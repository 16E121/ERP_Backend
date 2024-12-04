import sql from 'mssql'
import { servError, dataFound, noData, success, failed, invalidInput } from '../../res.mjs';
import { checkIsNumber, ISOString } from '../../helper_functions.mjs';

const PurchaseOrderDataEntry = () => {

    const getPurchaseOrder = async (req, res) => {
        const Fromdate = ISOString(req.query.Fromdate);
        const Todate = ISOString(req.query.Todate);

        try {
            const request = new sql.Request()
                .input('Fromdate', Fromdate)
                .input('Todate', Todate)
                .query(`
                    WITH ITEM_DETAILS AS (
                    	SELECT 
                    		*
                    	FROM
                    		tbl_PurchaseOrderItemDetails
                    	WHERE
                    		OrderId IN (
                    			SELECT 
                    				pgi.Id
                    			FROM
                    				tbl_PurchaseOrderGeneralDetails AS pgi
                    			WHERE
                    				CONVERT(DATE, pgi.TradeConfirmDate) >= CONVERT(DATE, @Fromdate)
                    				AND
                    				CONVERT(DATE, pgi.TradeConfirmDate) <= CONVERT(DATE, @Todate)
                    		)
                    ), DELIVERY_DETAILS AS (
                    	SELECT 
                    		*
                    	FROM
                    		tbl_PurchaseOrderDeliveryDetails
                    	WHERE
                    		OrderId IN (
                    			SELECT 
                    				pgi.Id
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
                    				pgi.Id
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
                    	ISNULL((
                    		SELECT JSON_QUERY((
                    			SELECT * FROM ITEM_DETAILS WHERE ITEM_DETAILS.OrderId = pgi.Id FOR JSON AUTO)
                    		)
                    	), '[]') AS ItemDetails,
                    	ISNULL((
                    		SELECT JSON_QUERY((
                    			SELECT * FROM DELIVERY_DETAILS WHERE DELIVERY_DETAILS.OrderId = pgi.Id FOR JSON AUTO)
                    		)
                    	), '[]') AS DeliveryDetails,
                    	ISNULL((
                    		SELECT JSON_QUERY((
                    			SELECT * FROM TRANSPOTER_DETAILS WHERE TRANSPOTER_DETAILS.OrderId = pgi.Id FOR JSON AUTO)
                    		)
                    	), '[]') AS TranspoterDetails
                    FROM
                    	tbl_PurchaseOrderGeneralDetails AS pgi
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
            LoadingDate = '',
            TradeConfirmDate = '',
            OwnerName = '',
            BrokerName = '',
            PartyName = '',
            PartyAddress = '',
            PaymentCondition = '',
            Remarks = '',
            OrderStatus = '',
            CreatedBy = ''
        } = OrderDetails;

        const OrderItems = Array.isArray(req.body.OrderItems) ? req.body.OrderItems : [];
        const DelivdryDetails = Array.isArray(req.body.DelivdryDetails) ? req.body.DelivdryDetails : [];
        const TranspoterDetails = Array.isArray(req.body.TranspoterDetails) ? req.body.TranspoterDetails : [];

        const transaction = new sql.Transaction();

        try {

            await transaction.begin();

            const OrderDetailsInsert = await new sql.Request(transaction)
                .input('LoadingDate', LoadingDate)
                .input('TradeConfirmDate', TradeConfirmDate)
                .input('OwnerName', OwnerName)
                .input('BrokerName', BrokerName)
                .input('PartyName', PartyName)
                .input('PartyAddress', PartyAddress)
                .input('PaymentCondition', PaymentCondition)
                .input('Remarks', Remarks)
                .input('OrderStatus', OrderStatus)
                .input('CreatedBy', CreatedBy)
                .query(`
                    INSERT INTO tbl_PurchaseOrderGeneralDetails (
                        LoadingDate, TradeConfirmDate, OwnerName, BrokerName, PartyName, 
                        PartyAddress, PaymentCondition, Remarks, OrderStatus, CreatedBy
                    ) VALUES (
                        @LoadingDate, @TradeConfirmDate, @OwnerName, @BrokerName, @PartyName, 
                        @PartyAddress, @PaymentCondition, @Remarks, @OrderStatus, @CreatedBy
                    );
                    
                    SELECT SCOPE_IDENTITY() AS OrderId;`
                );

            if (OrderDetailsInsert.rowsAffected[0] == 0) {
                throw new Error('Failed to insert order details')
            }

            const OrderId = OrderDetailsInsert?.recordset[0]?.OrderId;

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
                    .input('PendingQuantity', Number(delivery?.PendingQuantity))
                    .input('CreatedBy', Number(delivery?.CreatedBy))
                    .query(`
                        INSERT INTO tbl_PurchaseOrderDeliveryDetails (
                            indexValue, OrderId, Location, TransporterIndex, ArrivalDate, ItemId, ItemName, Concern, BillNo, BillDate, 
                            Quantity, Weight, Units, BatchLocation, PendingQuantity, CreatedBy
                        ) VALUES (
                            @indexValue, @OrderId, @Location, @TransporterIndex, @ArrivalDate, @ItemId, @ItemName, @Concern, @BillNo, @BillDate,
                            @Quantity, @Weight, @Units, @BatchLocation, @PendingQuantity, @CreatedBy
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
            Id = '',
            LoadingDate = '',
            TradeConfirmDate = '',
            OwnerName = '',
            BrokerName = '',
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
                .input('OrderId', Id)
                .input('LoadingDate', LoadingDate)
                .input('TradeConfirmDate', TradeConfirmDate)
                .input('OwnerName', OwnerName)
                .input('BrokerName', BrokerName)
                .input('PartyName', PartyName)
                .input('PartyAddress', PartyAddress)
                .input('PaymentCondition', PaymentCondition)
                .input('Remarks', Remarks)
                .input('OrderStatus', OrderStatus)
                .input('CreatedBy', CreatedBy)
                .query(`
                    UPDATE tbl_PurchaseOrderGeneralDetails
                    SET LoadingDate = @LoadingDate, TradeConfirmDate = @TradeConfirmDate, 
                        OwnerName = @OwnerName, BrokerName = @BrokerName, PartyName = @PartyName,
                        PartyAddress = @PartyAddress, PaymentCondition = @PaymentCondition, 
                        Remarks = @Remarks, OrderStatus = @OrderStatus, CreatedBy = @CreatedBy
                    WHERE Id = @OrderId
                `);

            if (updateOrderDetails.rowsAffected[0] === 0) {
                throw new Error('Failed to update order details');
            }

            await new sql.Request(transaction)
                .input('OrderId', Id)
                .query(`
                    DELETE FROM tbl_PurchaseOrderItemDetails WHERE OrderId = @OrderId;
                    DELETE FROM tbl_PurchaseOrderDeliveryDetails WHERE OrderId = @OrderId;
                    DELETE FROM tbl_PurchaseOrderTranspoterDetails WHERE OrderId = @OrderId;
                `);

            for (let i = 0; i < OrderItems.length; i++) {
                const item = OrderItems[i];

                const result = await new sql.Request(transaction)
                    .input('Sno', i)
                    .input('OrderId', Id)
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
                    .input('OrderId', Id)
                    .input('Id', delivery?.Id)
                    .input('TransporterIndex', Number(delivery?.TransporterIndex))
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
                    .input('PendingQuantity', Number(delivery?.PendingQuantity))
                    .input('CreatedBy', Number(delivery?.CreatedBy))
                    .query(`
                        INSERT INTO tbl_PurchaseOrderDeliveryDetails (
                            indexValue, OrderId, Location, TransporterIndex, ArrivalDate, ItemId, ItemName, Concern, BillNo, BillDate, 
                            Quantity, Weight, Units, BatchLocation, PendingQuantity, CreatedBy
                        ) VALUES (
                            @indexValue, @OrderId, @Location, @TransporterIndex, @ArrivalDate, @ItemId, @ItemName, @Concern, @BillNo, @BillDate,
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
                    .input('OrderId', Id)
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
        updateArrivalDetails,
        deleteOrderPermanantly,
    }
}

export default PurchaseOrderDataEntry();