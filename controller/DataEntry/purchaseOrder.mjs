import sql from 'mssql'
import { servError, dataFound, noData, success, failed, invalidInput } from '../../res.mjs';
import { extractHHMM, ISOString } from '../../helper_functions.mjs';

const PurchaseOrderDataEntry = () => {

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
                .input('CreatedBy', CreatedBy)
                .query(`
                    INSERT INTO tbl_PurchaseOrderGeneralDetails (
                        LoadingDate, TradeConfirmDate, OwnerName, BrokerName, PartyName, PartyAddress, PaymentCondition, Remarks, CreatedBy
                    ) VALUES (
                        @LoadingDate, @TradeConfirmDate, @OwnerName, @BrokerName, @PartyName, @PartyAddress, @PaymentCondition, @Remarks, @CreatedBy
                    );
                    
                    SELECT SCOPE_IDENTITY() AS OrderId;`
                );

            if (OrderDetailsInsert.rowsAffected[0] == 0) {
                throw new Error('Failed to insert order details')
            }

            const OrderId = OrderDetailsInsert?.recordset[0]?.OrderId;

            for (let i = 1; i <= OrderItems.length; i++) {

                const Items = OrderItems[i];

                const OrderItemsInsert = await new sql.Request(transaction)
                    .input('Sno', i)
                    .input('OrderId', OrderId)
                    .input('ItemId', Items?.ItemId)
                    .input('ItemName', Items?.ItemName)
                    .input('Weight', Items?.Weight)
                    .input('Units', Items?.Units)
                    .input('Rate', Items?.Rate)
                    .input('DeliveryLocation', Items?.DeliveryLocation)
                    .input('Discount', Items?.Discount)
                    .input('QualityCondition', Items?.QualityCondition)
                    .query(`
                        INSERT INTO tbl_PurchaseOrderItemDetails (
                            Sno, OrderId, ItemId, ItemName, Weight, Units, Rate, DeliveryLocation, Discount, QualityCondition
                        ) VALUES (
                            @Sno, @OrderId, @ItemId, @ItemName, @Weight, @Units, @Rate, @DeliveryLocation, @Discount, @QualityCondition
                        ); `
                    )

                if (OrderItemsInsert.rowsAffected[0] == 0) {
                    throw new Error('Failed to insert Item Details')
                }
            }

            for (let i = 1; i <= DelivdryDetails.length; i++) {

                const DeliveryInfo = DelivdryDetails[i];

                const DeliveryDetailsInsert = await new sql.Request(transaction)
                    .input('Sno', i)
                    .input('OrderId', OrderId)
                    .input('Location', DeliveryInfo?.Location)
                    .input('ArrivalDate', DeliveryInfo?.ArrivalDate)
                    .input('ItemName', DeliveryInfo?.ItemName)
                    .input('Concern', DeliveryInfo?.Concern)
                    .input('BillNo', DeliveryInfo?.BillNo)
                    .input('BillDate', DeliveryInfo?.BillDate)
                    .input('Quantity', DeliveryInfo?.Quantity)
                    .input('Weight', DeliveryInfo?.Weight)
                    .input('Units', DeliveryInfo?.Units)
                    .input('BatchLocation', DeliveryInfo?.BatchLocation)
                    .input('PendingQuantity', DeliveryInfo?.PendingQuantity)
                    .input('CreatedBy', DeliveryInfo?.CreatedBy)
                    .query(`
                        INSERT INTO tbl_PurchaseOrderDeliveryDetails (
                            Sno, OrderId, Location, ArrivalDate, ItemName, Concern, BillNo, BillDate, Quantity, 
                            Weight, Units, BatchLocation, PendingQuantity, CreatedBy
                        ) VALUES (
                            @Sno, @OrderId, @Location, @ArrivalDate, @ItemName, @Concern, @BillNo, @BillDate, @Quantity, 
                            @Weight, @Units, @BatchLocation, @PendingQuantity, @CreatedBy
                        );`
                    );

                if (DeliveryDetailsInsert.rowsAffected[0] == 0) {
                    throw new Error('Failed to insert Delivery Details')
                }
            }

            for (let i = 1; i <= TranspoterDetails.length; i++) {

                const TranspoterInfo = TranspoterDetails[i];

                const TranspoterInsert = await new sql.Request(transaction)
                    .input('OrderId', OrderId)
                    .input('Loading_Load', TranspoterInfo?.Loading_Load)
                    .input('Loading_Empty', TranspoterInfo?.Loading_Empty)
                    .input('Unloading_Load', TranspoterInfo?.Unloading_Load)
                    .input('Unloading_Empty', TranspoterInfo?.Unloading_Empty)
                    .input('EX_SH', TranspoterInfo?.EX_SH)
                    .input('DrinverName', TranspoterInfo?.DrinverName)
                    .input('VehicleNo', TranspoterInfo?.VehicleNo)
                    .input('PhoneNumber', TranspoterInfo?.PhoneNumber)
                    .input('CreatedBy', TranspoterInfo?.CreatedBy)
                    .query(`
                        INSERT INTO tbl_PurchaseOrderTranspoterDetails (
                            OrderId, Loading_Load, Loading_Empty, Unloading_Load, Unloading_Empty, 
                            EX_SH, DrinverName, VehicleNo, PhoneNumber, CreatedBy
                        ) VALUES (
                            @OrderId, @Loading_Load, @Loading_Empty, @Unloading_Load, @Unloading_Empty, 
                            @EX_SH, @DrinverName, @VehicleNo, @PhoneNumber, @CreatedBy
                        )
                        `);

                if (TranspoterInsert.rowsAffected[0] == 0) {
                    throw new Error('Failed to insert Transpoter Details')
                }
            }

            await transaction.commit();
            return success(res, 'Order Created')

        } catch (e) {
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
            OrderId = '',
            LoadingDate = '',
            TradeConfirmDate = '',
            OwnerName = '',
            BrokerName = '',
            PartyName = '',
            PartyAddress = '',
            PaymentCondition = '',
            Remarks = '',
            CreatedBy = ''
        } = OrderDetails;
    
        const transaction = new sql.Transaction();
    
        try {
            await transaction.begin();
    
            // Update Order General Details
            const updateOrderDetails = await new sql.Request(transaction)
                .input('OrderId', OrderId)
                .input('LoadingDate', LoadingDate)
                .input('TradeConfirmDate', TradeConfirmDate)
                .input('OwnerName', OwnerName)
                .input('BrokerName', BrokerName)
                .input('PartyName', PartyName)
                .input('PartyAddress', PartyAddress)
                .input('PaymentCondition', PaymentCondition)
                .input('Remarks', Remarks)
                .input('CreatedBy', CreatedBy)
                .query(`
                    UPDATE tbl_PurchaseOrderGeneralDetails
                    SET LoadingDate = @LoadingDate, TradeConfirmDate = @TradeConfirmDate, 
                        OwnerName = @OwnerName, BrokerName = @BrokerName, PartyName = @PartyName,
                        PartyAddress = @PartyAddress, PaymentCondition = @PaymentCondition, 
                        Remarks = @Remarks, CreatedBy = @CreatedBy
                    WHERE Id = @OrderId
                `);
    
            if (updateOrderDetails.rowsAffected[0] === 0) {
                throw new Error('Failed to update order details');
            }
    
            for (let i = 0; i < OrderItems.length; i++) {
                const item = OrderItems[i];
    
                await new sql.Request(transaction)
                    .input('Sno', i + 1)
                    .input('OrderId', OrderId)
                    .input('ItemId', item?.ItemId)
                    .input('ItemName', item?.ItemName)
                    .input('Weight', item?.Weight)
                    .input('Units', item?.Units)
                    .input('Rate', item?.Rate)
                    .input('DeliveryLocation', item?.DeliveryLocation)
                    .input('Discount', item?.Discount)
                    .input('QualityCondition', item?.QualityCondition)
                    .query(`
                        MERGE tbl_PurchaseOrderItemDetails AS target
                        USING (VALUES (@Sno, @OrderId, @ItemId)) AS source (Sno, OrderId, ItemId)
                        ON target.OrderId = source.OrderId AND target.ItemId = source.ItemId
                        WHEN MATCHED THEN 
                            UPDATE SET 
                                Weight = @Weight, Units = @Units, Rate = @Rate, 
                                DeliveryLocation = @DeliveryLocation, Discount = @Discount, 
                                QualityCondition = @QualityCondition
                        WHEN NOT MATCHED THEN
                            INSERT (Sno, OrderId, ItemId, ItemName, Weight, Rate, DeliveryLocation, Discount, QualityCondition)
                            VALUES (@Sno, @OrderId, @ItemId, @ItemName, @Weight, @Rate, @DeliveryLocation, @Discount, @QualityCondition)
                        WHEN NOT MATCHED BY SOURCE AND target.OrderId = @OrderId THEN
                            DELETE;
                    `);
            }
    
            // Update or Insert Delivery Details
            for (let i = 0; i < DelivdryDetails.length; i++) {
                const delivery = DelivdryDetails[i];
    
                await new sql.Request(transaction)
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
                        MERGE tbl_PurchaseOrderDeliveryDetails AS target
                        USING (VALUES (@Id, @OrderId)) AS source (Id, OrderId)
                        ON target.OrderId = source.OrderId AND target.Id = source.Id
                        WHEN MATCHED THEN 
                            UPDATE SET 
                                Location = @Location, ArrivalDate = @ArrivalDate, 
                                ItemName = @ItemName, Concern = @Concern, BillNo = @BillNo,
                                BillDate = @BillDate, Quantity = @Quantity, Weight = @Weight, 
                                Units = @Units, BatchLocation = @BatchLocation, 
                                PendingQuantity = @PendingQuantity
                        WHEN NOT MATCHED THEN
                            INSERT (
                                Sno, OrderId, Location, ArrivalDate, ItemName, Concern, BillNo, BillDate, 
                                Quantity, Weight, Units, BatchLocation, PendingQuantity, CreatedBy
                            ) VALUES (
                                @Sno, @OrderId, @Location, @ArrivalDate, @ItemName, @Concern, @BillNo, @BillDate,
                                @Quantity, @Weight, @Units, @BatchLocation, @PendingQuantity, @CreatedBy
                            ) 
                        WHEN NOT MATCHED BY SOURCE AND target.OrderId = @OrderId THEN
                            DELETE;
                    `);
            }
    
            // Update or Insert Transporter Details
            for (let i = 0; i < TranspoterDetails.length; i++) {
                const transporter = TranspoterDetails[i];
    
                await new sql.Request(transaction)
                    .input('OrderId', OrderId)
                    .input('Id', transporter?.Id)
                    .input('Loading_Load', transporter?.Loading_Load)
                    .input('Loading_Empty', transporter?.Loading_Empty)
                    .input('Unloading_Load', transporter?.Unloading_Load)
                    .input('Unloading_Empty', transporter?.Unloading_Empty)
                    .input('EX_SH', transporter?.EX_SH)
                    .input('DrinverName', transporter?.DrinverName)
                    .input('VehicleNo', transporter?.VehicleNo)
                    .input('PhoneNumber', transporter?.PhoneNumber)
                    .input('CreatedBy', transporter?.CreatedBy)
                    .query(`
                        MERGE tbl_PurchaseOrderTranspoterDetails AS target
                        USING (VALUES (@OrderId, @Id)) AS source (OrderId, Id)
                        ON target.OrderId = source.OrderId AND target.Id = source.Id
                        WHEN MATCHED THEN 
                            UPDATE SET 
                                Loading_Load = @Loading_Load, Loading_Empty = @Loading_Empty, 
                                Unloading_Load = @Unloading_Load, Unloading_Empty = @Unloading_Empty, 
                                EX_SH = @EX_SH, DrinverName = @DrinverName, PhoneNumber = @PhoneNumber
                        WHEN NOT MATCHED THEN
                            INSERT (
                                OrderId, Loading_Load, Loading_Empty, Unloading_Load, Unloading_Empty, EX_SH, 
                                DrinverName, VehicleNo, PhoneNumber, CreatedBy
                            ) VALUES (
                                @OrderId, @Loading_Load, @Loading_Empty, @Unloading_Load, @Unloading_Empty, @EX_SH, 
                                @DrinverName, @VehicleNo, @PhoneNumber, @CreatedBy
                            );
                        WHEN NOT MATCHED BY SOURCE AND target.OrderId = @OrderId THEN
                            DELETE;
                    `);
            }
    
            await transaction.commit();
            return success(res, 'Order Updated Successfully');
        } catch (e) {
            await transaction.rollback();
            servError(e, res);
        }
    };
    

    return {
        createPurchaseOrder,
        updatePurchaseOrder
    }
}

export default PurchaseOrderDataEntry();