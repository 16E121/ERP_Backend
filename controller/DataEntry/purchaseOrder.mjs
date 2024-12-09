import sql from 'mssql'
import { servError, dataFound, noData, success, failed, invalidInput } from '../../res.mjs';
import { checkIsNumber, createPadString, ISOString } from '../../helper_functions.mjs';
import { getLOL, getLOS, getNextId } from '../../middleware/miniAPIs.mjs';

const PurchaseOrderDataEntry = () => {

    const getPurchaseOrder = async (req, res) => {
        const Fromdate = ISOString(req.query.Fromdate);
        const Todate = ISOString(req.query.Todate);

        try {
            const request = new sql.Request()
                .input('Fromdate', Fromdate)
                .input('Todate', Todate)
                .query(`
                    WITH LOLData AS (
                        SELECT * 
                        FROM tbl_Ledger_LOL
                    ), LOSData AS (
                        SELECT * 
                        FROM tbl_Stock_LOS
                    ), ITEM_DETAILS AS (
                    	SELECT 
                    		i.*,
                            COALESCE(los.Stock_Item, 'Not Found') AS Stock_Item,
                            COALESCE(los.Stock_Group, 'Not Found') AS Stock_Group
                    	FROM
                    		tbl_PurchaseOrderItemDetails AS i
                            LEFT JOIN tbl_Product_Master AS p
                            ON i.ItemId = p.Product_Id
                            LEFT JOIN tbl_Stock_LOS AS los
                            ON los.Stock_Tally_Id = p.ERP_Id
                    	WHERE
                    		i.OrderId IN (
                    			SELECT 
                    				pgi.Sno
                    			FROM
                    				tbl_PurchaseOrderGeneralDetails AS pgi
                    			WHERE
                    				CONVERT(DATE, pgi.TradeConfirmDate) >= CONVERT(DATE, @Fromdate)
                    				AND
                    				CONVERT(DATE, pgi.TradeConfirmDate) <= CONVERT(DATE, @Todate)
                    		)
                    ), DELIVERY_DETAILS AS (
                    	SELECT 
                    		d.*,
                            COALESCE(los.Stock_Item, 'Not Found') AS Stock_Item,
                            COALESCE(los.Stock_Group, 'Not Found') AS Stock_Group
                    	FROM
                    		tbl_PurchaseOrderDeliveryDetails AS d
                            LEFT JOIN tbl_Product_Master AS p
                            ON d.ItemId = p.Product_Id
                            LEFT JOIN tbl_Stock_LOS AS los
                            ON los.Stock_Tally_Id = p.ERP_Id
                    	WHERE
                    		OrderId IN (
                    			SELECT 
                    				pgi.Sno
                    			FROM
                    				tbl_PurchaseOrderGeneralDetails AS pgi
                    			WHERE
                    				CONVERT(DATE, pgi.TradeConfirmDate) >= CONVERT(DATE, @Fromdate)
                    				AND
                    				CONVERT(DATE, pgi.TradeConfirmDate) <= CONVERT(DATE, @Todate)
                    		)
                    ), TRANSPOTER_DETAILS AS (
                    	SELECT 
                    		*
                    	FROM
                    		tbl_PurchaseOrderTranspoterDetails
                    	WHERE
                    		OrderId IN (
                    			SELECT 
                    				pgi.Sno
                    			FROM
                    				tbl_PurchaseOrderGeneralDetails AS pgi
                    			WHERE
                    				CONVERT(DATE, pgi.TradeConfirmDate) >= CONVERT(DATE, @Fromdate)
                    				AND
                    				CONVERT(DATE, pgi.TradeConfirmDate) <= CONVERT(DATE, @Todate)
                    		)
                    )
                    SELECT 
                    	pgi.*,
                        COALESCE(lol.Ledger_Name, 'Not found') AS Ledger_Name,
                        COALESCE(lol.Party_District, 'Not found') AS Party_District,
                    	ISNULL((
                    		SELECT JSON_QUERY((
                    			SELECT * FROM ITEM_DETAILS WHERE ITEM_DETAILS.OrderId = pgi.Sno FOR JSON AUTO)
                    		)
                    	), '[]') AS ItemDetails,
                    	ISNULL((
                    		SELECT JSON_QUERY((
                    			SELECT * FROM DELIVERY_DETAILS WHERE DELIVERY_DETAILS.OrderId = pgi.Sno FOR JSON AUTO)
                    		)
                    	), '[]') AS DeliveryDetails,
                    	ISNULL((
                    		SELECT JSON_QUERY((
                    			SELECT * FROM TRANSPOTER_DETAILS WHERE TRANSPOTER_DETAILS.OrderId = pgi.Sno FOR JSON AUTO)
                    		)
                    	), '[]') AS TranspoterDetails
                    FROM
                    	tbl_PurchaseOrderGeneralDetails AS pgi
                        LEFT JOIN tbl_Retailers_Master AS r
                        ON r.Retailer_Id = pgi.PartyId
                        LEFT JOIN LOLData AS lol
                        ON lol.Ledger_Tally_Id = r.ERP_Id
                    WHERE
                    	CONVERT(DATE, pgi.TradeConfirmDate) >= CONVERT(DATE, @Fromdate)
                    	AND
                    	CONVERT(DATE, pgi.TradeConfirmDate) <= CONVERT(DATE, @Todate)
                    ORDER BY pgi.Id DESC;
                    `
                );

            const result = await request;

            if (result.recordset.length > 0) {
                const extractedData = result.recordset.map(o => ({
                    ...o,
                    ItemDetails: JSON.parse(o?.ItemDetails),
                    DeliveryDetails: JSON.parse(o?.DeliveryDetails),
                    TranspoterDetails: JSON.parse(o?.TranspoterDetails)
                }))
                dataFound(res, extractedData);
            } else {
                noData(res);
            }
        } catch (e) {
            servError(e, res);
        }
    }

    const createPurchaseOrder = async (req, res) => {

        const OrderDetails = req.body.OrderDetails ?? {};
        const {
            BranchId,
            LoadingDate = '',
            TradeConfirmDate = '',
            OwnerId = 0,
            OwnerName = '',
            BrokerId = 0,
            BrokerName = '',
            PartyId = '',
            PartyName = '',
            PartyAddress = '',
            PaymentCondition = '',
            Remarks = '',
            OrderStatus = '',
            CreatedBy = ''
        } = OrderDetails;

        if (!checkIsNumber(BranchId)) {
            return invalidInput(res, 'Select Branch')
        }

        const OrderItems = Array.isArray(req.body.OrderItems) ? req.body.OrderItems : [];
        const DelivdryDetails = Array.isArray(req.body.DelivdryDetails) ? req.body.DelivdryDetails : [];
        const TranspoterDetails = Array.isArray(req.body.TranspoterDetails) ? req.body.TranspoterDetails : [];

        const transaction = new sql.Transaction();

        try {

            const currentYear = new Date().getFullYear();

            const newOrderId = Number((await new sql.Request()
                .input('BranchId', BranchId)
                .input('currentYear', currentYear)
                .query(`
                    SELECT 
                        COALESCE(MAX(Id), 0) AS MaxId
                    FROM 
                        tbl_PurchaseOrderGeneralDetails
                    WHERE
                        BranchId = @BranchId
                        AND
                        PoYear = @currentYear`
                ))?.recordset[0]?.MaxId) + 1;

            if (!checkIsNumber(newOrderId)) throw new Error('Failed to get Order Id');

            const PO_ID = 'PO_' + BranchId + '_' + currentYear + '_' + createPadString(newOrderId, 4);

            const getSno = await getNextId({ table: 'tbl_PurchaseOrderGeneralDetails', column: 'Sno' });

            if (!getSno.status || !checkIsNumber(getSno.MaxId)) throw new Error('Failed to get Sno');

            const Sno = getSno.MaxId;

            await transaction.begin();

            const OrderDetailsInsert = await new sql.Request(transaction)
                .input('Sno', Sno)
                .input('Id', newOrderId)
                .input('PoYear', currentYear)
                .input('BranchId', BranchId)
                .input('PO_ID', PO_ID)
                .input('LoadingDate', LoadingDate)
                .input('TradeConfirmDate', TradeConfirmDate)
                .input('OwnerId', Number(OwnerId))
                .input('OwnerName', OwnerName)
                .input('BrokerId', Number(BrokerId))
                .input('BrokerName', BrokerName)
                .input('PartyId', PartyId)
                .input('PartyName', PartyName)
                .input('PartyAddress', PartyAddress)
                .input('PaymentCondition', PaymentCondition)
                .input('Remarks', Remarks)
                .input('OrderStatus', OrderStatus)
                .input('CreatedBy', CreatedBy)
                .query(`
                    INSERT INTO tbl_PurchaseOrderGeneralDetails (
                        Sno, Id, PoYear, BranchId, PO_ID,
                        LoadingDate, TradeConfirmDate, OwnerId, OwnerName, BrokerId, BrokerName, PartyId, PartyName, 
                        PartyAddress, PaymentCondition, Remarks, OrderStatus, CreatedBy
                    ) VALUES (
                        @Sno, @Id, @PoYear, @BranchId, @PO_ID,
                        @LoadingDate, @TradeConfirmDate, @OwnerId, @OwnerName, @BrokerId, @BrokerName, @PartyId, @PartyName, 
                        @PartyAddress, @PaymentCondition, @Remarks, @OrderStatus, @CreatedBy
                    );`
                );
            // SELECT SCOPE_IDENTITY() AS OrderId;
            if (OrderDetailsInsert.rowsAffected[0] == 0) {
                throw new Error('Failed to insert order details')
            }

            // const OrderId = OrderDetailsInsert?.recordset[0]?.OrderId;
            const OrderId = Sno;

            for (let i = 0; i < OrderItems.length; i++) {
                const item = OrderItems[i];

                const result = await new sql.Request(transaction)
                    .input('Sno', i)
                    .input('OrderId', OrderId)
                    .input('ItemId', Number(item?.ItemId))
                    .input('ItemName', item?.ItemName)
                    .input('Weight', Number(item?.Weight))
                    .input('Units', item?.Units)
                    .input('Rate', Number(item?.Rate))
                    .input('DeliveryLocation', item?.DeliveryLocation)
                    .input('Discount', Number(item?.Discount))
                    .input('QualityCondition', item?.QualityCondition)
                    .query(`
                        INSERT INTO tbl_PurchaseOrderItemDetails (
                            Sno, OrderId, ItemId, ItemName, Weight, Units, Rate, DeliveryLocation, Discount, QualityCondition
                        ) VALUES (
                            @Sno, @OrderId, @ItemId, @ItemName, @Weight, @Units, @Rate, @DeliveryLocation, @Discount, @QualityCondition
                        )
                    `);

                if (result.rowsAffected[0] == 0) {
                    throw new Error('Failed to update Item Details')
                }
            }

            for (let i = 0; i < DelivdryDetails.length; i++) {
                const delivery = DelivdryDetails[i];

                const result = await new sql.Request(transaction)
                    .input('indexValue', Number(delivery?.indexValue))
                    .input('OrderId', OrderId)
                    .input('TransporterIndex', Number(delivery?.TransporterIndex))
                    .input('LocationId', Number(delivery?.LocationId))
                    .input('Location', delivery?.Location)
                    .input('ArrivalDate', delivery?.ArrivalDate)
                    .input('ItemId', Number(delivery?.ItemId))
                    .input('ItemName', delivery?.ItemName)
                    .input('Concern', delivery?.Concern)
                    .input('BillNo', delivery?.BillNo)
                    .input('BillDate', delivery?.BillDate)
                    .input('Quantity', Number(delivery?.Quantity))
                    .input('Weight', Number(delivery?.Weight))
                    .input('Units', delivery?.Units)
                    .input('BatchLocation', delivery?.BatchLocation)
                    .input('CreatedBy', Number(delivery?.CreatedBy))
                    .query(`
                        INSERT INTO tbl_PurchaseOrderDeliveryDetails (
                            indexValue, OrderId, LocationId, Location, TransporterIndex, ArrivalDate, ItemId, ItemName, Concern, BillNo, BillDate, 
                            Quantity, Weight, Units, BatchLocation, CreatedBy
                        ) VALUES (
                            @indexValue, @OrderId, @LocationId, @Location, @TransporterIndex, @ArrivalDate, @ItemId, @ItemName, @Concern, @BillNo, @BillDate,
                            @Quantity, @Weight, @Units, @BatchLocation, @CreatedBy
                        )
                    `);

                if (result.rowsAffected[0] == 0) {
                    throw new Error('Failed to update Delivery Details')
                }
            }

            for (let i = 0; i < TranspoterDetails.length; i++) {
                const transporter = TranspoterDetails[i];

                const result = await new sql.Request(transaction)
                    .input('OrderId', OrderId)
                    .input('indexValue', Number(transporter?.indexValue))
                    .input('Id', transporter?.Id)
                    .input('Loading_Load', transporter?.Loading_Load)
                    .input('Loading_Empty', transporter?.Loading_Empty)
                    .input('Unloading_Load', transporter?.Unloading_Load)
                    .input('Unloading_Empty', transporter?.Unloading_Empty)
                    .input('EX_SH', transporter?.EX_SH)
                    .input('DriverName', transporter?.DriverName)
                    .input('VehicleNo', transporter?.VehicleNo)
                    .input('PhoneNumber', Number(transporter?.PhoneNumber))
                    .input('CreatedBy', Number(transporter?.CreatedBy))
                    .query(`
                        INSERT INTO tbl_PurchaseOrderTranspoterDetails (
                            indexValue, OrderId, Loading_Load, Loading_Empty, Unloading_Load, Unloading_Empty, EX_SH, 
                            DriverName, VehicleNo, PhoneNumber, CreatedBy
                        ) VALUES (
                            @indexValue, @OrderId, @Loading_Load, @Loading_Empty, @Unloading_Load, @Unloading_Empty, @EX_SH, 
                            @DriverName, @VehicleNo, @PhoneNumber, @CreatedBy
                        );
                    `);

                if (result.rowsAffected[0] == 0) {
                    throw new Error('Failed to update Transporter details')
                }
            }

            await transaction.commit();
            return success(res, 'Order Created')

        } catch (e) {
            if (transaction._aborted === false) {
                await transaction.rollback();
            }
            servError(e, res);
        }
    }

    const updatePurchaseOrder = async (req, res) => {
        const {
            OrderDetails = {},
            OrderItems = [],
            DelivdryDetails = [],
            TranspoterDetails = []
        } = req.body;

        const {
            Sno = '',
            LoadingDate = '',
            TradeConfirmDate = '',
            OwnerId = 0,
            OwnerName = '',
            BrokerId = 0,
            BrokerName = '',
            PartyId = 0,
            PartyName = '',
            PartyAddress = '',
            PaymentCondition = '',
            Remarks = '',
            OrderStatus = '',
            CreatedBy = ''
        } = OrderDetails;

        const transaction = new sql.Transaction();

        try {
            await transaction.begin();

            // Update Order General Details
            const updateOrderDetails = await new sql.Request(transaction)
                .input('OrderId', Sno)
                .input('LoadingDate', LoadingDate)
                .input('TradeConfirmDate', TradeConfirmDate)
                .input('OwnerId', Number(OwnerId))
                .input('OwnerName', OwnerName)
                .input('BrokerId', Number(BrokerId))
                .input('BrokerName', BrokerName)
                .input('PartyId', PartyId)
                .input('PartyName', PartyName)
                .input('PartyAddress', PartyAddress)
                .input('PaymentCondition', PaymentCondition)
                .input('Remarks', Remarks)
                .input('OrderStatus', OrderStatus)
                .input('CreatedBy', CreatedBy)
                .query(`
                    UPDATE tbl_PurchaseOrderGeneralDetails
                    SET LoadingDate = @LoadingDate, TradeConfirmDate = @TradeConfirmDate,
                        OwnerId = @OwnerId, BrokerId = @BrokerId, 
                        OwnerName = @OwnerName, BrokerName = @BrokerName, PartyId = @PartyId, PartyName = @PartyName,
                        PartyAddress = @PartyAddress, PaymentCondition = @PaymentCondition, 
                        Remarks = @Remarks, OrderStatus = @OrderStatus, CreatedBy = @CreatedBy
                    WHERE Sno = @OrderId
                `);

            if (updateOrderDetails.rowsAffected[0] === 0) {
                throw new Error('Failed to update order details');
            }

            await new sql.Request(transaction)
                .input('OrderId', Sno)
                .query(`
                    DELETE FROM tbl_PurchaseOrderItemDetails WHERE OrderId = @OrderId;
                    DELETE FROM tbl_PurchaseOrderDeliveryDetails WHERE OrderId = @OrderId;
                    DELETE FROM tbl_PurchaseOrderTranspoterDetails WHERE OrderId = @OrderId;
                `);

            for (let i = 0; i < OrderItems.length; i++) {
                const item = OrderItems[i];

                const result = await new sql.Request(transaction)
                    .input('Sno', i)
                    .input('OrderId', Sno)
                    .input('ItemId', Number(item?.ItemId))
                    .input('ItemName', item?.ItemName)
                    .input('Weight', Number(item?.Weight))
                    .input('Units', item?.Units)
                    .input('Rate', Number(item?.Rate))
                    .input('DeliveryLocation', item?.DeliveryLocation)
                    .input('Discount', Number(item?.Discount))
                    .input('QualityCondition', item?.QualityCondition)
                    .query(`
                        INSERT INTO tbl_PurchaseOrderItemDetails (
                            Sno, OrderId, ItemId, ItemName, Weight, Units, Rate, DeliveryLocation, Discount, QualityCondition
                        ) VALUES (
                            @Sno, @OrderId, @ItemId, @ItemName, @Weight, @Units, @Rate, @DeliveryLocation, @Discount, @QualityCondition
                        )
                    `);

                if (result.rowsAffected[0] == 0) {
                    throw new Error('Failed to update Item Details')
                }
            }

            // Update or Insert Delivery Details
            for (let i = 0; i < DelivdryDetails.length; i++) {
                const delivery = DelivdryDetails[i];

                const result = await new sql.Request(transaction)
                    .input('indexValue', Number(delivery?.indexValue))
                    .input('OrderId', Sno)
                    .input('Id', delivery?.Id)
                    .input('TransporterIndex', Number(delivery?.TransporterIndex))
                    .input('LocationId', Number(delivery?.LocationId))
                    .input('Location', delivery?.Location)
                    .input('ArrivalDate', delivery?.ArrivalDate)
                    .input('ItemId', Number(delivery?.ItemId))
                    .input('ItemName', delivery?.ItemName)
                    .input('Concern', delivery?.Concern)
                    .input('BillNo', delivery?.BillNo)
                    .input('BillDate', delivery?.BillDate)
                    .input('Quantity', Number(delivery?.Quantity))
                    .input('Weight', Number(delivery?.Weight))
                    .input('Units', delivery?.Units)
                    .input('BatchLocation', delivery?.BatchLocation)
                    .input('CreatedBy', Number(delivery?.CreatedBy))
                    .query(`
                        INSERT INTO tbl_PurchaseOrderDeliveryDetails (
                            indexValue, OrderId, LocationId, Location, TransporterIndex, ArrivalDate, ItemId, ItemName, Concern, BillNo, BillDate, 
                            Quantity, Weight, Units, BatchLocation, CreatedBy
                        ) VALUES (
                            @indexValue, @OrderId, @LocationId, @Location, @TransporterIndex, @ArrivalDate, @ItemId, @ItemName, @Concern, @BillNo, @BillDate,
                            @Quantity, @Weight, @Units, @BatchLocation, @CreatedBy
                        )
                    `);

                if (result.rowsAffected[0] == 0) {
                    throw new Error('Failed to update Delivery Details')
                }
            }

            // Update or Insert Transporter Details
            for (let i = 0; i < TranspoterDetails.length; i++) {
                const transporter = TranspoterDetails[i];

                const result = await new sql.Request(transaction)
                    .input('OrderId', Sno)
                    .input('indexValue', Number(transporter?.indexValue))
                    .input('Id', transporter?.Id)
                    .input('Loading_Load', transporter?.Loading_Load)
                    .input('Loading_Empty', transporter?.Loading_Empty)
                    .input('Unloading_Load', transporter?.Unloading_Load)
                    .input('Unloading_Empty', transporter?.Unloading_Empty)
                    .input('EX_SH', transporter?.EX_SH)
                    .input('DriverName', transporter?.DriverName)
                    .input('VehicleNo', transporter?.VehicleNo)
                    .input('PhoneNumber', Number(transporter?.PhoneNumber))
                    .input('CreatedBy', Number(transporter?.CreatedBy))
                    .query(`
                        INSERT INTO tbl_PurchaseOrderTranspoterDetails (
                            indexValue, OrderId, Loading_Load, Loading_Empty, Unloading_Load, Unloading_Empty, EX_SH, 
                            DriverName, VehicleNo, PhoneNumber, CreatedBy
                        ) VALUES (
                            @indexValue, @OrderId, @Loading_Load, @Loading_Empty, @Unloading_Load, @Unloading_Empty, @EX_SH, 
                            @DriverName, @VehicleNo, @PhoneNumber, @CreatedBy
                        );
                    `);

                if (result.rowsAffected[0] == 0) {
                    throw new Error('Failed to update Transporter details')
                }
            }

            await transaction.commit();
            return success(res, 'Order Updated Successfully');
        } catch (e) {
            if (transaction._aborted === false) {
                await transaction.rollback();
            }
            servError(e, res);
        }
    };

    const godownLocation = async (req, res) => {
        try {
            const result = await sql.query('SELECT Godown_Id, Godown_Name FROM tbl_Godown_Master');

            if (result.recordset.length > 0) {
                dataFound(res, result.recordset);
            } else {
                noData(res)
            }
        } catch (e) {
            servError(e, res);
        }
    }

    const updateArrivalDetails = async (req, res) => {
        const { OrderId, DelivdryDetails, TranspoterDetails } = req.body;

        if (!OrderId) {
            return invalidInput(res, 'OrderId is required');
        }

        const transaction = new sql.Transaction();

        try {
            const checkIfOrderIdExist = await new sql.Request()
                .input('OrderId', OrderId)
                .query(`SELECT COUNT(Id) AS Orders FROM tbl_PurchaseOrderGeneralDetails WHERE Id = @OrderId;`);

            if (checkIfOrderIdExist.recordset[0].Orders === 0) {
                return failed(res, 'Order Id is not matched');
            }

            await transaction.begin();

            await new sql.Request(transaction)
                .input('OrderId', OrderId)
                .query(`
                    DELETE FROM tbl_PurchaseOrderDeliveryDetails WHERE OrderId = @OrderId;
                    DELETE FROM tbl_PurchaseOrderTranspoterDetails WHERE OrderId = @OrderId;
                `);

            // Update or Insert Delivery Details
            for (let i = 0; i < DelivdryDetails.length; i++) {
                const delivery = DelivdryDetails[i];

                const result = await new sql.Request(transaction)
                    .input('Sno', i + 1)
                    .input('OrderId', OrderId)
                    .input('Id', delivery?.Id)
                    .input('Location', delivery?.Location)
                    .input('ArrivalDate', delivery?.ArrivalDate)
                    .input('ItemName', delivery?.ItemName)
                    .input('Concern', delivery?.Concern)
                    .input('BillNo', delivery?.BillNo)
                    .input('BillDate', delivery?.BillDate)
                    .input('Quantity', delivery?.Quantity)
                    .input('Weight', delivery?.Weight)
                    .input('Units', delivery?.Units)
                    .input('BatchLocation', delivery?.BatchLocation)
                    .input('PendingQuantity', delivery?.PendingQuantity)
                    .input('CreatedBy', delivery?.CreatedBy)
                    .query(`
                        INSERT INTO tbl_PurchaseOrderDeliveryDetails (
                            Sno, OrderId, Location, ArrivalDate, ItemName, Concern, BillNo, BillDate, 
                            Quantity, Weight, Units, BatchLocation, PendingQuantity, CreatedBy
                        ) VALUES (
                            @Sno, @OrderId, @Location, @ArrivalDate, @ItemName, @Concern, @BillNo, @BillDate,
                            @Quantity, @Weight, @Units, @BatchLocation, @PendingQuantity, @CreatedBy
                        )
                    `);

                if (result.rowsAffected[0] == 0) {
                    throw new Error('Failed to update Delivery Details')
                }
            }

            // Update or Insert Transporter Details
            for (let i = 0; i < TranspoterDetails.length; i++) {
                const transporter = TranspoterDetails[i];

                const result = await new sql.Request(transaction)
                    .input('OrderId', OrderId)
                    .input('Id', transporter?.Id)
                    .input('Loading_Load', transporter?.Loading_Load)
                    .input('Loading_Empty', transporter?.Loading_Empty)
                    .input('Unloading_Load', transporter?.Unloading_Load)
                    .input('Unloading_Empty', transporter?.Unloading_Empty)
                    .input('EX_SH', transporter?.EX_SH)
                    .input('DriverName', transporter?.DriverName)
                    .input('VehicleNo', transporter?.VehicleNo)
                    .input('PhoneNumber', transporter?.PhoneNumber)
                    .input('CreatedBy', transporter?.CreatedBy)
                    .query(`
                        INSERT INTO tbl_PurchaseOrderTranspoterDetails (
                            OrderId, Loading_Load, Loading_Empty, Unloading_Load, Unloading_Empty, EX_SH, 
                            DriverName, VehicleNo, PhoneNumber, CreatedBy
                        ) VALUES (
                            @OrderId, @Loading_Load, @Loading_Empty, @Unloading_Load, @Unloading_Empty, @EX_SH, 
                            @DriverName, @VehicleNo, @PhoneNumber, @CreatedBy
                        );
                    `);

                if (result.rowsAffected[0] == 0) {
                    throw new Error('Failed to update Transporter details')
                }
            }

            await transaction.commit();
            success(res, 'Arrival Details Saved');
        } catch (e) {
            if (transaction._aborted === false) {
                await transaction.rollback();
            }
            servError(e, res);
        }
    };

    const deleteOrderPermanantly = async (req, res) => {
        const { OrderId } = req.body;

        if (!checkIsNumber(OrderId)) return invalidInput(res, 'OrderId is required');

        const transaction = new sql.Transaction();

        try {
            await transaction.begin();

            const request = new sql.Request(transaction)
                .input('OrderId', OrderId)
                .query(`
                    DELETE FROM tbl_PurchaseOrderGeneralDetails WHERE Id = @OrderId;
                    DELETE FROM tbl_PurchaseOrderItemDetails WHERE OrderId = @OrderId;
                    DELETE FROM tbl_PurchaseOrderDeliveryDetails WHERE OrderId = @OrderId;
                    DELETE FROM tbl_PurchaseOrderTranspoterDetails WHERE OrderId = @OrderId;`
                );

            const result = await request;

            if (result.rowsAffected[0] === 0) throw new Error('Failed to delete Order');

            await transaction.commit();

            return success(res, 'Order Deleted!')

        } catch (e) {
            servError(e, res);
        }
    }

    // const getPurchaseDetailsDropdown = async (req, res) => {
    //     const Fromdate = ISOString(req?.query?.Fromdate);
    //     const Todate = ISOString(req?.query?.Todate);
    //     const { ItemId, OrderId } = req.query;

    //     try {

    //         let query = `
    //             WITH ITEM_DETAILS AS (
    //             	SELECT 
    //             		*
    //             	FROM
    //             		tbl_PurchaseOrderItemDetails
    //             	WHERE
    //             		OrderId IN (
    //             			SELECT 
    //             				pgi.Id
    //             			FROM
    //             				tbl_PurchaseOrderGeneralDetails AS pgi
    //             			WHERE
    //             				CONVERT(DATE, pgi.LoadingDate) >= CONVERT(DATE, @Fromdate)
    //             				AND
    //             				CONVERT(DATE, pgi.LoadingDate) <= CONVERT(DATE, @Todate)
    //                             AND
    //                             pgi.ItemId = @ItemId
    //             		)
    //             )
    //             SELECT 
    //             	pgi.*,
    //             	ISNULL((
    //             		SELECT JSON_QUERY((
    //             			SELECT * FROM ITEM_DETAILS WHERE ITEM_DETAILS.OrderId = pgi.Id FOR JSON AUTO)
    //             		)
    //             	), '[]') AS ItemDetails
    //             FROM
    //             	tbl_PurchaseOrderGeneralDetails AS pgi
    //             WHERE
    //             	CONVERT(DATE, pgi.LoadingDate) >= CONVERT(DATE, @Fromdate)
    //             	AND
    //             	CONVERT(DATE, pgi.LoadingDate) <= CONVERT(DATE, @Todate)
    //         `;

    //         if (OrderId) {

    //         }

    //         const request = new sql.Request()
    //             .input('Fromdate', Fromdate)
    //             .input('Todate', Todate)
    //             .input('ItemId', ItemId)
    //             .input('OrderId', OrderId)
    //             .query(query);

    //         const result = await request;
    //     } catch (e) {
    //         servError(e, res);
    //     }
    // }

    return {
        getPurchaseOrder,
        createPurchaseOrder,
        updatePurchaseOrder,
        godownLocation,
        updateArrivalDetails,
        deleteOrderPermanantly,
    }
}

export default PurchaseOrderDataEntry();