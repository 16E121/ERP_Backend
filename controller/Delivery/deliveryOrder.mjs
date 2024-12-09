import sql from 'mssql'
import { dataFound, invalidInput, noData, servError, success } from '../../res.mjs';
import { checkIsNumber, isEqualNumber, ISOString, Subraction, Multiplication, RoundNumber } from '../../helper_functions.mjs'
import getImage from '../../middleware/getImageIfExist.mjs';
import { getProducts } from '../../middleware/miniAPIs.mjs';


const findProductDetails = (arr = [], productid) => arr.find(obj => isEqualNumber(obj.Product_Id, productid)) ?? {};

const taxCalc = (method = 1, amount = 0, percentage = 0) => {
    switch (method) {
        case 0:
            return RoundNumber(amount * (percentage / 100));
        case 1:
            return RoundNumber(amount - (amount * (100 / (100 + percentage))));
        case 2:
            return 0;
        default:
            return 0;
    }
}

const SaleOrder = () => {
    
    
    
    const salesDeliveryCreation = async (req, res) => {
        const {
            Retailer_Id, Delivery_Person_Id, Branch_Id,
            Narration = null, Created_by, Delivery_Location, Payment_Mode, Payment_Status, Delivery_Status,
            Payment_Ref_No = null, Delivery_Time = null, Product_Array = [], So_No,
            GST_Inclusive = 1, IS_IGST = 0
        } = req.body;

        const Do_Date = ISOString(req?.body?.Do_Date);
        const isExclusiveBill = isEqualNumber(GST_Inclusive, 0);
        const isInclusive = isEqualNumber(GST_Inclusive, 1);
        const isNotTaxableBill = isEqualNumber(GST_Inclusive, 2);
        const isIGST = isEqualNumber(IS_IGST, 1);

        if (!Do_Date || !Retailer_Id || !Delivery_Person_Id || !Created_by || !Array.isArray(Product_Array) || Product_Array.length === 0) {
            return invalidInput(res, 'Please select Delivery Person')
        }


        const transaction = new sql.Transaction();

        try {
            await transaction.begin();
            const requestForSoNoCheck = new sql.Request(transaction);
            requestForSoNoCheck.input('So_No', sql.Int, So_No);
            const resultForSoNoCheck = await requestForSoNoCheck.query(`
            SELECT COUNT(*) AS count 
            FROM tbl_Sales_Delivery_Gen_Info 
            WHERE So_No = @So_No
        `);

        if (resultForSoNoCheck.recordset[0].count > 0) {
            const queryUpdate = new sql.Request(transaction);
            queryUpdate.input('So_No', sql.Int, So_No);
            await queryUpdate.query(`
                UPDATE tbl_Sales_Delivery_Gen_Info
                SET Cancel_Status = 2
                WHERE So_No = @So_No
            `);
    
            await transaction.commit();
            return success(res, 'Order Moved to Sales Delivery to Sale Order.');
        }
            const requestForDoNo = new sql.Request(transaction);
            const resultForDoNo = await requestForDoNo.query(`
                SELECT COUNT(*) AS count
                FROM tbl_Sales_Delivery_Gen_Info
            `);

            const maxDoNo = Number(resultForDoNo.recordset[0].count) + 1;
            const productsData = (await getProducts()).dataArray;
            const Alter_Id = Math.floor(Math.random() * 999999);

            const Total_Invoice_value = Product_Array.reduce((o, item) => {
                const itemRate = RoundNumber(item?.Item_Rate);
                const billQty = parseInt(item?.Bill_Qty);
                const Amount = RoundNumber(Multiplication(billQty, itemRate));

                if (isInclusive || isNotTaxableBill) {
                    return o += Number(Amount);
                }

                if (isExclusiveBill) {
                    const product = findProductDetails(productsData, item.Item_Id);
                    const gstPercentage = isEqualNumber(IS_IGST, 1) ? product.Igst_P : product.Gst_P;
                    const tax = taxCalc(0, itemRate, gstPercentage)
                    return o += (Amount + (tax * billQty));
                }
            }, 0);

            const totalValueBeforeTax = Product_Array.reduce((acc, item) => {
                const itemRate = RoundNumber(item?.Item_Rate);
                const billQty = parseInt(item?.Bill_Qty) || 0;

                if (isNotTaxableBill) {
                    acc.TotalValue += Multiplication(billQty, itemRate);
                    return acc;
                }

                const product = findProductDetails(productsData, item.Item_Id);
                const gstPercentage = isEqualNumber(IS_IGST, 1) ? product.Igst_P : product.Gst_P;

                if (isInclusive) {
                    const itemTax = taxCalc(1, itemRate, gstPercentage);
                    const basePrice = Subraction(itemRate, itemTax);
                    acc.TotalTax += Multiplication(billQty, itemTax);
                    acc.TotalValue += Multiplication(billQty, basePrice);
                }
                if (isExclusiveBill) {
                    const itemTax = taxCalc(0, itemRate, gstPercentage);
                    acc.TotalTax += Multiplication(billQty, itemTax);
                    acc.TotalValue += Multiplication(billQty, itemRate);
                }

                return acc;
            }, {
                TotalValue: 0,
                TotalTax: 0
            });

            // await transaction.begin();

            const request = new sql.Request(transaction);
            request.input('Do_No', maxDoNo)
            request.input('Do_Date', sql.Date, Do_Date);
            request.input('Retailer_Id', sql.Int, Retailer_Id);
            request.input('Delivery_Person_Id', sql.Int, Number(Delivery_Person_Id));
            request.input('Branch_Id', sql.Int, Branch_Id);
            request.input('GST_Inclusive', sql.Int, GST_Inclusive);
            request.input('CSGT_Total', IS_IGST ? 0 : totalValueBeforeTax.TotalTax / 2);
            request.input('SGST_Total', IS_IGST ? 0 : totalValueBeforeTax.TotalTax / 2);
            request.input('IGST_Total', IS_IGST ? totalValueBeforeTax.TotalTax : 0);
            request.input('Round_off', Total_Invoice_value - (totalValueBeforeTax.TotalValue + totalValueBeforeTax.TotalTax));
            request.input('Total_Before_Tax', totalValueBeforeTax.TotalValue);
            request.input('Total_Tax', totalValueBeforeTax.TotalTax);
            request.input('Total_Invoice_value', Total_Invoice_value);
            request.input('Narration', Narration);
            request.input('Cancel_status', 2);
            request.input('So_No', So_No)
            request.input('Delivery_Status', sql.Int, Delivery_Status);
            request.input('Delivery_Time', sql.NVarChar(50), Delivery_Time);
            request.input('Delivery_Location', sql.NVarChar(250), Delivery_Location);
            request.input('Payment_Ref_No', sql.NVarChar(255), Payment_Ref_No);
            request.input('Payment_Mode', sql.Int, Payment_Mode);
            request.input('Payment_Status', sql.Int, Payment_Status);
            request.input('Alter_Id', sql.BigInt, Alter_Id)
            request.input('Created_by', sql.BigInt, Created_by);
            request.input('Created_on', sql.DateTime, new Date());
            request.input('Trans_Type', 'INSERT')

            const result = await request.query(`
                INSERT INTO tbl_Sales_Delivery_Gen_Info (
                   Do_No, Do_Date, Retailer_Id, Delivery_Person_Id, Branch_Id,
                    GST_Inclusive, CSGT_Total, SGST_Total, IGST_Total, Round_off,
                    Total_Before_Tax, Total_Tax, Total_Invoice_value, Narration,
                    Cancel_status,So_No, Delivery_Status, Delivery_Time, Delivery_Location,
                 Trans_Type,Payment_Mode, Payment_Ref_No, Payment_Status,Alter_Id, Created_by,Created_on
                ) VALUES (
                   @Do_No, @Do_Date, @Retailer_Id, @Delivery_Person_Id, @Branch_Id,
                    @GST_Inclusive, @CSGT_Total, @SGST_Total, @IGST_Total, @Round_off,
                    @Total_Before_Tax, @Total_Tax, @Total_Invoice_value, @Narration,
                    @Cancel_status,@So_No, @Delivery_Status, @Delivery_Time, @Delivery_Location,
                    @Trans_Type,@Payment_Mode, @Payment_Ref_No, @Payment_Status,@Alter_Id, @Created_by,@Created_on
                );
                SELECT SCOPE_IDENTITY() AS DeliveryId;
            `);

            const DeliveryId = result.recordset && result.recordset.length > 0 ? result.recordset[0].DeliveryId : 1;

            for (let i = 0; i < Product_Array.length; i++) {
                const product = Product_Array[i];
                const productDetails = findProductDetails(productsData, product.Item_Id)

                const gstPercentage = isEqualNumber(IS_IGST, 1) ? productDetails.Igst_P : productDetails.Gst_P;
                const Taxble = gstPercentage > 0 ? 1 : 0;
                const Bill_Qty = Number(product.Bill_Qty);
                const Item_Rate = RoundNumber(product.Item_Rate);
                const Amount = Bill_Qty * Item_Rate;
                const tax = taxCalc(GST_Inclusive, Amount, gstPercentage);
                const itemTaxRate = taxCalc(GST_Inclusive, Item_Rate, gstPercentage);
                const Taxable_Rate = RoundNumber(Subraction(Item_Rate, itemTaxRate));

                const Taxable_Amount = isInclusive ? (Amount - tax) : Amount;
                const Final_Amo = isInclusive ? Amount : (Amount + tax);

                const Cgst_Amo = !isIGST ? (taxCalc(GST_Inclusive, Amount, gstPercentage) / 2) : 0;
                const Igst_Amo = isIGST ? taxCalc(GST_Inclusive, Amount, gstPercentage) : 0;

                const request2 = new sql.Request(transaction)
                    .input('Do_Date', Do_Date)
                    .input('DeliveryOrder', DeliveryId)
                    .input('S_No', i + 1)
                    .input('Item_Id', product.Item_Id)
                    .input('Bill_Qty', Bill_Qty)
                    .input('Item_Rate', Item_Rate)
                    .input('Amount', Amount)
                    .input('Free_Qty', 0)
                    .input('Total_Qty', Bill_Qty)
                    .input('Taxble', Taxble)
                    .input('Taxable_Rate', Taxable_Rate)
                    .input('HSN_Code', productDetails.HSN_Code)
                    .input('Unit_Id', product.UOM ?? '')
                    .input('Unit_Name', product.Units ?? '')
                    .input('Taxable_Amount', Taxable_Amount)
                    .input('Tax_Rate', gstPercentage)
                    .input('Cgst', (gstPercentage / 2) ?? 0)
                    .input('Cgst_Amo', isNotTaxableBill ? 0 : Cgst_Amo)
                    .input('Sgst', (gstPercentage / 2) ?? 0)
                    .input('Sgst_Amo', isNotTaxableBill ? 0 : Cgst_Amo)
                    .input('Igst', gstPercentage ?? 0)
                    .input('Igst_Amo', isNotTaxableBill ? 0 : Igst_Amo)
                    .input('Final_Amo', Final_Amo)
                    .input('Created_on', new Date())

                    .query(`
                        INSERT INTO tbl_Sales_Delivery_Stock_Info (
                            Do_Date, Delivery_Order_Id, S_No, Item_Id, Bill_Qty, Item_Rate, Amount, Free_Qty, Total_Qty, 
                            Taxble, Taxable_Rate, HSN_Code, Unit_Id, Unit_Name, Taxable_Amount, Tax_Rate, 
                            Cgst, Cgst_Amo, Sgst, Sgst_Amo, Igst, Igst_Amo, Final_Amo, Created_on
                        ) VALUES (
                            @Do_Date, @DeliveryOrder, @S_No, @Item_Id, @Bill_Qty, @Item_Rate, @Amount, @Free_Qty, @Total_Qty, 
                            @Taxble, @Taxable_Rate, @HSN_Code, @Unit_Id, @Unit_Name, @Taxable_Amount, @Tax_Rate, 
                            @Cgst, @Cgst_Amo, @Sgst, @Sgst_Amo, @Igst, @Igst_Amo, @Final_Amo, @Created_on
                        );`
                    )

                const result2 = await request2;

                if (result2.rowsAffected[0] === 0) {
                    throw new Error('Failed to create order, Try again.');
                }
            }


            // Commit the transaction
            await transaction.commit();

            success(res, 'Delivery Created!')
        } catch (e) {
            if (transaction._aborted === false) {
                await transaction.rollback();
            }
            servError(e, res)
        }
    };

    const editDeliveryOrder = async (req, res) => {
        const {
            Do_Id, Retailer_Id, Delivery_Person_Id, Branch_Id,
            Narration, Created_by, Product_Array, GST_Inclusive = 1, IS_IGST = 0, Delivery_Status,
            Delivery_Time, Delivery_Location, Delivery_Latitude, Delivery_Longitude, Collected_By, Collected_Status, Payment_Mode, Payment_Status, Payment_Ref_No
        } = req.body;

        const Do_Date = ISOString(req?.body?.Do_Date);
        const isExclusiveBill = isEqualNumber(GST_Inclusive, 0);
        const isInclusive = isEqualNumber(GST_Inclusive, 1);
        const isNotTaxableBill = isEqualNumber(GST_Inclusive, 2);
        const isIGST = isEqualNumber(IS_IGST, 1);

        if (
            !checkIsNumber(Do_Id)
            || !checkIsNumber(Retailer_Id)
            || !checkIsNumber(Delivery_Person_Id)
            || !checkIsNumber(Created_by)
            || (!Array.isArray(Product_Array) || Product_Array.length === 0)
        ) {
            return invalidInput(res, 'Do_Id, Retailer_Id, Delivery_Person_Id, Created_by, Product_Array is Required')
        }

        const transaction = new sql.Transaction();

        try {
            const productsData = (await getProducts()).dataArray;
            const Alter_Id = Math.floor(Math.random() * 999999);

            const Total_Invoice_value = Product_Array.reduce((o, item) => {
                const itemRate = RoundNumber(item?.Item_Rate);
                const billQty = parseInt(item?.Bill_Qty);
                const Amount = RoundNumber(Multiplication(billQty, itemRate));

                if (isInclusive || isNotTaxableBill) {
                    return o += Number(Amount);
                }

                if (isExclusiveBill) {
                    const product = findProductDetails(productsData, item.Item_Id);
                    const gstPercentage = isEqualNumber(IS_IGST, 1) ? product.Igst_P : product.Gst_P;
                    const tax = taxCalc(0, itemRate, gstPercentage)
                    return o += (Number(Amount) + (tax * billQty));
                }
            }, 0);

            const totalValueBeforeTax = Product_Array.reduce((acc, item) => {
                const itemRate = RoundNumber(item?.Item_Rate);
                const billQty = parseInt(item?.Bill_Qty) || 0;

                if (isNotTaxableBill) {
                    acc.TotalValue += Multiplication(billQty, itemRate);
                    return acc;
                }

                const product = findProductDetails(productsData, item.Item_Id);
                const gstPercentage = isIGST ? product.Igst_P : product.Gst_P;

                if (isInclusive) {
                    const itemTax = taxCalc(1, itemRate, gstPercentage);
                    const basePrice = Subraction(itemRate, itemTax);
                    acc.TotalTax += Multiplication(billQty, itemTax);
                    acc.TotalValue += Multiplication(billQty, basePrice);
                }
                if (isExclusiveBill) {
                    const itemTax = taxCalc(0, itemRate, gstPercentage);
                    acc.TotalTax += Multiplication(billQty, itemTax);
                    acc.TotalValue += Multiplication(billQty, itemRate);
                }

                return acc;
            }, {
                TotalValue: 0,
                TotalTax: 0
            });

            await transaction.begin();

            const request = new sql.Request(transaction)
                .input('doid', Do_Id)
                .input('date', Do_Date)
                .input('retailer', Retailer_Id)
                .input('deliveryperson', Delivery_Person_Id)
                .input('branch', Branch_Id)
                .input('GST_Inclusive', GST_Inclusive)
                .input('CSGT_Total', isIGST ? 0 : totalValueBeforeTax.TotalTax / 2)
                .input('SGST_Total', isIGST ? 0 : totalValueBeforeTax.TotalTax / 2)
                .input('IGST_Total', isIGST ? totalValueBeforeTax.TotalTax : 0)
                .input('IS_IGST', isIGST ? 1 : 0)
                .input('roundoff', Total_Invoice_value - (totalValueBeforeTax.TotalValue + totalValueBeforeTax.TotalTax))
                .input('totalinvoice', Total_Invoice_value)
                .input('Total_Before_Tax', totalValueBeforeTax.TotalValue)
                .input('Total_Tax', totalValueBeforeTax.TotalTax)
                .input('narration', Narration)
                .input('alterby', Created_by)
                .input('Alter_Id', Alter_Id)
                .input('alteron', new Date())
                .input('deliverystatus', Delivery_Status)
                .input('deliveryTime', Delivery_Time)
                .input('deliveryLocation', Delivery_Location)
                .input('deliverylatitude', Delivery_Latitude)
                .input('deliverylongitute', Delivery_Longitude)
                .input('collectedby', Collected_By)
                .input('collectedStatus', Collected_Status)
                .input('paymentMode', Payment_Mode)
                .input('paymentStatus', Payment_Status)
                .input('paymentrefno', Payment_Ref_No)
                .input('Trans_Type', 'UPDATE')
                .query(`
                    UPDATE 
                        tbl_Sales_Delivery_Gen_Info
                    SET
                        Do_Date = @date, 
                        Retailer_Id = @retailer, 
                        Delivery_Person_Id = @deliveryperson, 
                        Branch_Id = @branch, 
                        GST_Inclusive = @GST_Inclusive, 
                        IS_IGST = @IS_IGST, 
                        CSGT_Total = @CSGT_Total, 
                        SGST_Total = @SGST_Total, 
                        IGST_Total = @IGST_Total, 
                        Round_off = @roundoff, 
                        Total_Invoice_value = @totalinvoice, 
                        Total_Before_Tax = @Total_Before_Tax, 
                        Total_Tax = @Total_Tax,
                        Narration = @narration,  
                        Altered_by = @alterby, 
                        Alter_Id = @Alter_Id, 
                        Delivery_Time=@deliveryTime,
                        Delivery_Status=@deliverystatus,
                       Delivery_Location=@deliveryLocation,
                       Delivery_Latitude=@deliverylatitude,
                       Delivery_Longitude=@deliverylongitute,
                       Collected_By=@collectedby,
                       Collected_Status=@collectedStatus,
                       Payment_Mode=@paymentMode,
                       Payment_Status=@paymentStatus,
                       Payment_Ref_No=@paymentrefno,
                        Alterd_on = @alteron,
                        Trans_Type = @Trans_Type
                    WHERE
                        Do_Id = @doid;
                    `
                );

            const result = await request;

            if (result.rowsAffected[0] === 0) {
                throw new Error('Failed to update order, Try again')
            }

            await new sql.Request(transaction)
                .input('doid', Do_Id)
                .query(`DELETE FROM tbl_Sales_Delivery_Stock_Info WHERE Delivery_Order_Id = @doid`);

            for (let i = 0; i < Product_Array.length; i++) {
                const product = Product_Array[i];
                const productDetails = findProductDetails(productsData, product.Item_Id)

                const gstPercentage = isEqualNumber(IS_IGST, 1) ? productDetails.Igst_P : productDetails.Gst_P;
                const Taxble = gstPercentage > 0 ? 1 : 0;
                const Bill_Qty = Number(product.Bill_Qty);
                const Item_Rate = RoundNumber(product.Item_Rate);
                const Amount = Bill_Qty * Item_Rate;
                const tax = taxCalc(GST_Inclusive, Amount, gstPercentage);
                const itemTaxRate = taxCalc(GST_Inclusive, Item_Rate, gstPercentage);
                const Taxable_Rate = RoundNumber(Subraction(Item_Rate, itemTaxRate));

                const Taxable_Amount = isInclusive ? (Amount - tax) : Amount;
                const Final_Amo = isInclusive ? Amount : (Amount + tax);

                const Cgst = isNotTaxableBill ? 0 : !isIGST ? productDetails.Cgst_P : 0;
                const Igst = isIGST ? productDetails.Igst_P : 0
                const Cgst_Amo = !isIGST ? (taxCalc(GST_Inclusive, Amount, gstPercentage) / 2) : 0;
                const Igst_Amo = isIGST ? taxCalc(GST_Inclusive, Amount, gstPercentage) : 0;

                const request2 = new sql.Request(transaction)
                    .input('Do_Date', Do_Date ? Do_Date : new Date())
                    .input('Delivery_Order_Id', Do_Id)
                    .input('S_No', i + 1)
                    .input('Item_Id', product.Item_Id)
                    .input('Bill_Qty', Bill_Qty)
                    .input('Item_Rate', Item_Rate)
                    .input('Amount', Amount)
                    .input('Free_Qty', 0)
                    .input('Total_Qty', Bill_Qty)
                    .input('Taxble', Taxble)
                    .input('Taxable_Rate', Taxable_Rate)
                    .input('HSN_Code', productDetails.HSN_Code)
                    .input('Unit_Id', product.UOM ?? '')
                    .input('Unit_Name', product.Units ?? '')
                    .input('Taxable_Amount', Taxable_Amount)
                    .input('Tax_Rate', gstPercentage)
                    .input('Cgst', (gstPercentage / 2) ?? 0)
                    .input('Cgst_Amo', isNotTaxableBill ? 0 : Cgst_Amo)
                    .input('Sgst', (gstPercentage / 2) ?? 0)
                    .input('Sgst_Amo', isNotTaxableBill ? 0 : Cgst_Amo)
                    .input('Igst', gstPercentage ?? 0)
                    .input('Igst_Amo', isNotTaxableBill ? 0 : Igst_Amo)
                    .input('Final_Amo', Final_Amo)
                    .input('Created_on', new Date())
                    .query(`
                        INSERT INTO tbl_Sales_Delivery_Stock_Info (
                            Do_Date, Delivery_Order_Id, S_No, Item_Id, Bill_Qty, Item_Rate, Amount, Free_Qty, Total_Qty, 
                            Taxble, Taxable_Rate, HSN_Code, Unit_Id, Unit_Name, Taxable_Amount, Tax_Rate, 
                            Cgst, Cgst_Amo, Sgst, Sgst_Amo, Igst, Igst_Amo, Final_Amo, Created_on
                        ) VALUES (
                            @Do_Date, @Delivery_Order_Id, @S_No, @Item_Id, @Bill_Qty, @Item_Rate, @Amount, @Free_Qty, @Total_Qty, 
                            @Taxble, @Taxable_Rate, @HSN_Code, @Unit_Id, @Unit_Name, @Taxable_Amount, @Tax_Rate, 
                            @Cgst, @Cgst_Amo, @Sgst, @Sgst_Amo, @Igst, @Igst_Amo, @Final_Amo, @Created_on
                        );`
                    )

                const result2 = await request2;

                if (result2.rowsAffected[0] === 0) {
                    throw new Error('Failed to create order, Try again.');
                }
            }

            await transaction.commit();
            success(res, 'Changes Saved!')

        } catch (e) {
            if (transaction._aborted === false) {
                await transaction.rollback();
            }
            servError(e, res)
        }
    }

    const getSaleOrder = async (req, res) => {
        const { Retailer_Id, Cancel_status, Created_by, Sales_Person_Id } = req.query;

        const Fromdate = ISOString(req.query.Fromdate), Todate = ISOString(req.query.Todate);

        try {
            let query = `
            WITH SALES_DETAILS AS (
                SELECT
            		oi.*,
            		COALESCE(pm.Product_Name, 'not available') AS Product_Name,
                    COALESCE(pm.Product_Image_Name, 'not available') AS Product_Image_Name,
                    COALESCE(u.Units, 'not available') AS UOM,
                    COALESCE(b.Brand_Name, 'not available') AS BrandGet
            	FROM
            		tbl_Sales_Order_Stock_Info AS oi
                    LEFT JOIN tbl_Product_Master AS pm
                    ON pm.Product_Id = oi.Item_Id
                    LEFT JOIN tbl_UOM AS u
                    ON u.Unit_Id = oi.Unit_Id
                    LEFT JOIN tbl_Brand_Master AS b
                    ON b.Brand_Id = pm.Brand
                WHERE
                    CONVERT(DATE, oi.Do_Date) >= CONVERT(DATE, @from)
            	    AND
            	    CONVERT(DATE, oi.Do_Date) <= CONVERT(DATE, @to)
            )
            SELECT 
            	so.*,
            	COALESCE(rm.Retailer_Name, 'unknown') AS Retailer_Name,
            	COALESCE(sp.Name, 'unknown') AS Sales_Person_Name,
            	COALESCE(bm.BranchName, 'unknown') AS Branch_Name,
            	COALESCE(cb.Name, 'unknown') AS Created_BY_Name,

            	COALESCE((
            		SELECT
            			sd.*
            		FROM
            			SALES_DETAILS AS sd
            		WHERE
            			sd.Sales_Order_Id = so.So_Id
            		FOR JSON PATH
            	), '[]') AS Products_List
            
            FROM 
            	tbl_Sales_Order_Gen_Info AS so
            
            	LEFT JOIN tbl_Retailers_Master AS rm
            	ON rm.Retailer_Id = so.Retailer_Id
            
            	LEFT JOIN tbl_Users AS sp
            	ON sp.UserId = so.Sales_Person_Id
            
            	LEFT JOIN tbl_Branch_Master bm
            	ON bm.BranchId = so.Branch_Id
            
            	LEFT JOIN tbl_Users AS cb
            	ON cb.UserId = so.Created_by
                        
            WHERE
                CONVERT(DATE, so.Do_Date) >= CONVERT(DATE, @from)
            	AND
            	CONVERT(DATE, so.Do_Date) <= CONVERT(DATE, @to) 
            `;

            if (Retailer_Id) {
                query += `
                AND
            	so.Retailer_Id = @retailer `
            }

            if (Number(Cancel_status) === 0 || Number(Cancel_status) === 1) {
                query += `
                AND
            	so.Cancel_status = @cancel `
            }

            if (Created_by) {
                query += `
                AND
            	so.Created_by = @creater `
            }

            if (Sales_Person_Id) {
                query += `
                AND
                so.Sales_Person_Id = @salesPerson `
            }

            query += `
            ORDER BY CONVERT(DATETIME, so.Do_Id) DESC`;

            const request = new sql.Request();
            request.input('from', Fromdate);
            request.input('to', Todate);
            request.input('retailer', Retailer_Id);
            request.input('cancel', Cancel_status);
            request.input('creater', Created_by);
            request.input('salesPerson', Sales_Person_Id)

            const result = await request.query(query);

            if (result.recordset.length > 0) {
                const parsed = result.recordset.map(o => ({
                    ...o,
                    Products_List: JSON.parse(o?.Products_List)
                }))
                const withImage = parsed.map(o => ({
                    ...o,
                    Products_List: o?.Products_List.map(oo => ({
                        ...oo,
                        ProductImageUrl: getImage('products', oo?.Product_Image_Name)
                    }))
                }));
                dataFound(res, withImage);
            } else {
                noData(res)
            }
        } catch (e) {
            servError(e, res);
        }
    }


    const getDeliveryorder = async (req, res) => {
        const { Retailer_Id, Cancel_status, Created_by, Delivery_Person_Id, Route_Id, Area_Id } = req.query;

        const Fromdate = ISOString(req.query.Fromdate), Todate = ISOString(req.query.Todate);

        try {

            let query = `
                WITH SALES_DETAILS AS (
                SELECT
                oi.*,
                
                COALESCE(pm.Product_Name, 'not available') AS Product_Name,
                COALESCE(pm.Product_Image_Name, 'not available') AS Product_Image_Name,
                COALESCE(u.Units, 'not available') AS UOM,
                COALESCE(b.Brand_Name, 'not available') AS BrandGet
                FROM
                tbl_Sales_Delivery_Stock_Info AS oi
                LEFT JOIN tbl_Product_Master AS pm
                ON pm.Product_Id = oi.Item_Id
                LEFT JOIN tbl_UOM AS u
                ON u.Unit_Id = oi.Unit_Id
                LEFT JOIN tbl_Brand_Master AS b
                ON b.Brand_Id = pm.Brand
                 WHERE
                            CONVERT(DATE, oi.Do_Date) >= CONVERT(DATE, @from)
                    	    AND
                    	    CONVERT(DATE, oi.Do_Date) <= CONVERT(DATE, @to)
              
        )
        SELECT 
            so.*,
            COALESCE(rm.Retailer_Name, 'unknown') AS Retailer_Name,
            COALESCE(sp.Name, 'unknown') AS Delivery_Person_Name,
            COALESCE(bm.BranchName, 'unknown') AS Branch_Name,
            COALESCE(cb.Name, 'unknown') AS Created_BY_Name,
            COALESCE(rmt.Route_Name, 'Unknown') AS Routename, 
        	COALESCE(am.Area_Name, 'Unknown') AS AreaName,
            COALESCE(rmt.Route_Id, 'Unknown') AS Route_Id,
             COALESCE(rm.Area_Id, 'Unknown') AS Area_Id,
               COALESCE(st.Status, 'Unknown') AS DeliveryStatusName,
                 COALESCE(sgi.SO_Date,'Unkown') AS SalesDate,
            COALESCE((
                SELECT
                    sd.*
                FROM
                    SALES_DETAILS AS sd
                WHERE
                    sd.Delivery_Order_Id = so.Do_Id
                FOR JSON PATH
            ), '[]') AS Products_List
            FROM 
            tbl_Sales_Delivery_Gen_Info AS so
            LEFT JOIN tbl_Retailers_Master AS rm
            ON rm.Retailer_Id = so.Retailer_Id
            	LEFT JOIN tbl_Status As st
		  ON st.Status_Id = so.Delivery_Status 
            LEFT JOIN tbl_Users AS sp
            ON sp.UserId = so.Delivery_Person_Id
            LEFT JOIN tbl_Branch_Master bm
            ON bm.BranchId = so.Branch_Id
            LEFT JOIN tbl_Users AS cb
            ON cb.UserId = so.Created_by
            LEFT JOIN tbl_Route_Master AS rmt
            ON rmt.Route_Id = rm.Route_Id 
        	LEFT JOIN tbl_Area_Master AS am
        	ON am.Area_Id = rm.Area_Id
            	LEFT JOIN tbl_Sales_Order_Gen_Info AS sgi 
			ON sgi.So_Id=so.So_No
            WHERE CONVERT(DATE, so.Do_Date) >= CONVERT(DATE, @from)
            AND
            CONVERT(DATE, so.Do_Date) <= CONVERT(DATE, @to) 
      `

            if (Retailer_Id) {
                query += `
                AND
            	so.Retailer_Id = @retailer `
            }

          
            if (Created_by) {
                query += `
                AND
            	so.Created_by = @creater`
            }

            if (Delivery_Person_Id) {
                query += `
                AND
                so.Delivery_Person_Id = @Delivery_Person_Id`
            }

            if (Route_Id) {
                query += `
                AND
            	rmt.Route_Id = @Route_Id`
            }

            if (Area_Id) {
                query += `
                AND
            	rm.Area_Id = @Area_Id`
            }

            query += `
            ORDER BY CONVERT(DATETIME, so.Do_Id) DESC`;

            const request = new sql.Request();
            request.input('from', Fromdate);
            request.input('to', Todate);
            request.input('retailer', Retailer_Id);
            request.input('cancel', Cancel_status);
            request.input('creater', Created_by);
            request.input('Delivery_Person_Id', sql.Int, Delivery_Person_Id);
            request.input('Route_Id', Route_Id)
            request.input('Area_Id', Area_Id)

            const result = await request.query(query);

            if (result.recordset.length > 0) {
                const parsed = result.recordset.map(o => ({
                    ...o,
                    Products_List: JSON.parse(o?.Products_List)
                }))
                const withImage = parsed.map(o => ({
                    ...o,
                    Products_List: o?.Products_List.map(oo => ({
                        ...oo,
                        ProductImageUrl: getImage('products', oo?.Product_Image_Name)
                    }))
                }));
                dataFound(res, withImage);
            } else {
                noData(res)
            }
        } catch (e) {
            servError(e, res);
        }
    }


    const deleteDeliveryOrder = async (req, res) => {
        const { Order_Id, Do_Id } = req.body;
    
        if (!Order_Id || !Do_Id) {
            return invalidInput(res, 'Invalid Order_Id or Do_Id');
        }
    
        try {
            const request = new sql.Request()
                .input('Order_No', sql.Int, Order_Id)  
                .input('Do_Id', sql.Int, Do_Id);    
    

            const deleteDeliveryResult = await request.query(`
                DELETE FROM tbl_Sales_Delivery_Gen_Info
                WHERE Do_Id = @Do_Id;
            `);
    
            if (deleteDeliveryResult.rowsAffected[0] > 0) {
    
                const deleteStockInfoResult = await request.query(`
                    DELETE FROM tbl_Sales_Delivery_Stock_Info
                    WHERE Delivery_Order_Id = @Do_Id;
                `);
    
                if (deleteStockInfoResult.rowsAffected[0] > 0) {
                    success(res, 'Sales Order and Delivery Order deleted successfully.');
                } else {
                    noData(res, 'Failed to delete the Sales Order from tbl_Sales_Delivery_Stock_Info.');
                }
            } else {
        
                return failed(res, 'Failed to delete the Delivery Order from tbl_Sales_Delivery_Gen_Info.');
            }
    
        } catch (e) {
            servError(e, res);
        }
    };
    
    
    const editmobileApi = async (req, res) => {
        const {
            Do_Id, Retailer_Id, Delivery_Person_Id,
         Delivery_Status,
            Delivery_Time, Delivery_Location, Delivery_Latitude, Delivery_Longitude, Payment_Mode, Payment_Status, Payment_Ref_No
        } = req.body;

        const Do_Date = ISOString(req?.body?.Do_Date);
    

        if (
            !checkIsNumber(Do_Id)
            || !checkIsNumber(Retailer_Id)
            || !checkIsNumber(Delivery_Person_Id)
          
        ) {
            return invalidInput(res, 'Do_Id, Retailer_Id, Delivery_Person_Id, Created_by is Required')
        }

        const transaction = new sql.Transaction();

        try {
  
            await transaction.begin();

            const request = new sql.Request(transaction)
                .input('doid', Do_Id)
                .input('date', Do_Date)
                .input('retailer', Retailer_Id)
                .input('deliveryperson', Delivery_Person_Id)
                .input('deliverystatus', Delivery_Status)
                .input('deliveryTime', Delivery_Time)
                .input('deliveryLocation', Delivery_Location)
                .input('deliverylatitude', Delivery_Latitude)
                .input('deliverylongitute', Delivery_Longitude)
                .input('paymentMode', Payment_Mode)
                .input('paymentStatus', Payment_Status)
                .input('paymentrefno', Payment_Ref_No)
                .input('Trans_Type', 'UPDATE')
                .query(`
                    UPDATE 
                        tbl_Sales_Delivery_Gen_Info
                    SET
                        Do_Date = @date, 
                        Retailer_Id = @retailer, 
                        Delivery_Person_Id = @deliveryperson, 
                        Delivery_Time=@deliveryTime,
                        Delivery_Status=@deliverystatus,
                       Delivery_Location=@deliveryLocation,
                       Delivery_Latitude=@deliverylatitude,
                       Delivery_Longitude=@deliverylongitute,
                       Payment_Mode=@paymentMode,
                       Payment_Status=@paymentStatus,
                       Payment_Ref_No=@paymentrefno,
                        Trans_Type = @Trans_Type
                    WHERE
                        Do_Id = @doid;
                    `
                );

            const result = await request;

            if (result.rowsAffected[0] === 0) {
                throw new Error('Failed to update order, Try again')
            }

            await transaction.commit();
            success(res, 'Changes Saved!')

        } catch (e) {
            if (transaction._aborted === false) {
                await transaction.rollback();
            }
            servError(e, res)
        }
    }


    return {
        salesDeliveryCreation,
        getSaleOrder,
        editDeliveryOrder,
        getDeliveryorder,
        deleteDeliveryOrder,
        editmobileApi
    }
}


export default SaleOrder();