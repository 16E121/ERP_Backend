import sql from 'mssql'
import { dataFound, invalidInput, noData, servError, success } from '../../res.mjs';
import { checkIsNumber, isEqualNumber, ISOString, Subraction, Multiplication, RoundNumber, createPadString } from '../../helper_functions.mjs'
import getImage from '../../middleware/getImageIfExist.mjs';
import { getNextId, getProducts } from '../../middleware/miniAPIs.mjs';


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

const PurchaseOrder = () => {

    const purchaseOrderCreation = async (req, res) => {
        const {
            Retailer_Id, Branch_Id, Ref_Po_Inv_No = '',
            Narration = null, Created_by, Product_Array = [], GST_Inclusive = 1, IS_IGST = 0,
        } = req.body;

        const Po_Inv_Date = ISOString(req?.body?.Po_Inv_Date);
        const isExclusiveBill = isEqualNumber(GST_Inclusive, 0);
        const isInclusive = isEqualNumber(GST_Inclusive, 1);
        const isNotTaxableBill = isEqualNumber(GST_Inclusive, 2);
        const isIGST = isEqualNumber(IS_IGST, 1);

        if (
            !checkIsNumber(Retailer_Id)
            || !checkIsNumber(Created_by)
            || (!Array.isArray(Product_Array) || Product_Array.length === 0)
        ) {
            return invalidInput(res, 'Retailer_Id, Created_by, Product_Array is Required')
        }

        const transaction = new sql.Transaction();

        try {
            const productsData = (await getProducts(1)).dataArray;
            const Alter_Id = Math.floor(Math.random() * 999999);

            const PO_Inv_Year = new Date().getFullYear();

            const PO_Inv_Id = Number((await new sql.Request()
                .input('Branch_Id', Branch_Id)
                .input('PO_Inv_Year', PO_Inv_Year)
                .query(`
                    SELECT 
                        COALESCE(MAX(PO_Inv_Id), 0) AS PO_Inv_Id
                    FROM 
                        tbl_Purchase_Order_Inv_Gen_Info
                    WHERE
                        Branch_Id = @Branch_Id
                        AND
                        PO_Inv_Year = @PO_Inv_Year`
                ))?.recordset[0]?.PO_Inv_Id) + 1;

            if (!checkIsNumber(PO_Inv_Id)) throw new Error('Failed to get Order Id');

            const Po_Inv_No = 'PO_' + Branch_Id + '_' + PO_Inv_Year + '_' + createPadString(PO_Inv_Id, 4);

            const getPIN_Id = await getNextId({ table: 'tbl_Purchase_Order_Inv_Gen_Info', column: 'PIN_Id' });

            if (!getPIN_Id.status || !checkIsNumber(getPIN_Id.MaxId)) throw new Error('Failed to get PIN_Id');

            const PIN_Id = getPIN_Id.MaxId;

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

            await transaction.begin();

            const request = new sql.Request(transaction)
                .input('PIN_Id', PIN_Id)
                .input('PO_Inv_Id', PO_Inv_Id)
                .input('PO_Inv_Year', PO_Inv_Year)
                .input('Ref_Po_Inv_No', Ref_Po_Inv_No)
                .input('Branch_Id', Branch_Id)
                .input('Po_Inv_No', Po_Inv_No)
                .input('Po_Inv_Date', Po_Inv_Date)
                .input('Retailer_Id', Retailer_Id)
                .input('GST_Inclusive', GST_Inclusive)
                .input('CSGT_Total', isIGST ? 0 : totalValueBeforeTax.TotalTax / 2)
                .input('SGST_Total', isIGST ? 0 : totalValueBeforeTax.TotalTax / 2)
                .input('IGST_Total', isIGST ? totalValueBeforeTax.TotalTax : 0)
                .input('IS_IGST', isIGST ? 1 : 0)
                .input('Round_off', Total_Invoice_value - (totalValueBeforeTax.TotalValue + totalValueBeforeTax.TotalTax))
                .input('Total_Before_Tax', totalValueBeforeTax.TotalValue)
                .input('Total_Tax', totalValueBeforeTax.TotalTax)
                .input('Total_Invoice_value', Total_Invoice_value)
                .input('Narration', Narration)
                .input('Cancel_status', 0)
                .input('Created_by', Created_by)
                .input('Altered_by', Created_by)
                .input('Created_on', new Date())
                .input('Alterd_on', new Date())
                .input('Trans_Type', 'INSERT')
                .input('Alter_Id', Alter_Id)
                .query(`
                    INSERT INTO tbl_Purchase_Order_Inv_Gen_Info (
                        PIN_Id, PO_Inv_Id, PO_Inv_Year, Ref_Po_Inv_No, Branch_Id, Po_Inv_No, Po_Inv_Date, Retailer_Id, GST_Inclusive, IS_IGST,
                        CSGT_Total, SGST_Total, IGST_Total, Round_off, Total_Before_Tax, Total_Tax, Total_Invoice_value,
                        Narration, Cancel_status, Created_by, Altered_by, Created_on, Alterd_on, Trans_Type, Alter_Id
                    ) VALUES (
                        @PIN_Id, @PO_Inv_Id, @PO_Inv_Year, @Ref_Po_Inv_No, @Branch_Id, @Po_Inv_No, @Po_Inv_Date, @Retailer_Id, @GST_Inclusive, @IS_IGST,
                        @CSGT_Total, @SGST_Total, @IGST_Total, @Round_off, @Total_Before_Tax, @Total_Tax, @Total_Invoice_value,
                        @Narration, @Cancel_status, @Created_by, @Altered_by, @Created_on, @Alterd_on, @Trans_Type, @Alter_Id
                    )`
                );

            const result = await request;

            if (result.rowsAffected[0] === 0) {
                throw new Error('Failed to create order, Try again.');
            }

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
                    .input('DeliveryId', Number(product?.DeliveryId || 0))
                    .input('Po_Inv_Date', Po_Inv_Date)
                    .input('PIN_Id', PIN_Id)
                    .input('Location_Id', Number(product?.Location_Id || 0))

                    .input('S_No', i + 1)
                    .input('Item_Id', product.Item_Id)

                    .input('Bill_Qty', Bill_Qty)
                    .input('Act_Qty', Bill_Qty)
                    .input('Bill_Alt_Qty', Bill_Qty)
                    .input('Alt_Act_Qty', Bill_Qty)

                    .input('Unit_Id', product.Unit_Id ?? '')
                    .input('Bill_Alt_Unit_Id', product.Unit_Id ?? '')
                    .input('Act_unit_Id', product.Unit_Id ?? '')
                    .input('Alt_Unit_Id', product.Unit_Id ?? '')

                    .input('Unit_Name', product.Unit_Name ?? '')
                    .input('Bill_Alt_Unit_Name', product.Unit_Name ?? '')
                    .input('Act_unit_Nmae', product.Unit_Name ?? '')
                    .input('Alt_Unit_Name', product.Unit_Name ?? '')

                    .input('Taxable_Rate', Taxable_Rate)
                    .input('Item_Rate', Item_Rate)
                    .input('Amount', Amount)
                    .input('Free_Qty', 0)
                    .input('Total_Qty', Bill_Qty)
                    .input('Taxble', Taxble)
                    .input('HSN_Code', productDetails.HSN_Code)

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
                        INSERT INTO tbl_Purchase_Order_Inv_Stock_Info (
                            DeliveryId, PIN_Id, Po_Inv_Date, Location_Id, S_No, Item_Id,
                            Bill_Qty, Act_Qty, Bill_Alt_Qty, Alt_Act_Qty,
                            Unit_Id, Bill_Alt_Unit_Id, Act_unit_Id, Alt_Unit_Id,
                            Unit_Name, Bill_Alt_Unit_Name, Act_unit_Nmae, Alt_Unit_Name,
                            Taxable_Rate, Item_Rate, Amount, Free_Qty, Total_Qty, Taxble,
                            HSN_Code, Taxable_Amount, Tax_Rate, Cgst, Cgst_Amo, Sgst, Sgst_Amo, Igst, Igst_Amo, Final_Amo, Created_on
                        ) VALUES (
                            @DeliveryId, @PIN_Id, @Po_Inv_Date, @Location_Id, @S_No, @Item_Id,
                            @Bill_Qty, @Act_Qty, @Bill_Alt_Qty, @Alt_Act_Qty,
                            @Unit_Id, @Bill_Alt_Unit_Id, @Act_unit_Id, @Alt_Unit_Id,
                            @Unit_Name, @Bill_Alt_Unit_Name, @Act_unit_Nmae, @Alt_Unit_Name,
                            @Taxable_Rate, @Item_Rate, @Amount, @Free_Qty, @Total_Qty, @Taxble,
                            @HSN_Code, @Taxable_Amount, @Tax_Rate, @Cgst, @Cgst_Amo, @Sgst, @Sgst_Amo, @Igst, @Igst_Amo, @Final_Amo, @Created_on
                        );`
                    )

                const result2 = await request2;

                if (result2.rowsAffected[0] === 0) {
                    throw new Error('Failed to create order, Try again.');
                }
            }

            const DE_PO_ID = Product_Array.reduce((acc, pro) => {
                const existIndex = acc.findIndex(ind => isEqualNumber(ind, pro.OrderId));

                if (existIndex === -1) {
                    return acc.concat(pro.OrderId);
                } else {
                    return acc;
                }
            }, []);

            for (let i = 0; i < DE_PO_ID.length; i++) {
                const request = new sql.Request(transaction)
                    .input('Order_Id', DE_PO_ID[i])
                    .input('PIN_Id', PIN_Id)
                    .query(`
                        INSERT INTO tbl_Purchase_Order_Inv_Gen_Order (
                            Order_Id, PIN_Id
                        ) VALUES (
                            @Order_Id, @PIN_Id
                        );`
                    );

                const result = await request;

                if (result.rowsAffected[0] === 0) throw new Error('Failed to save data entry id')
            }

            await transaction.commit();

            success(res, 'Order Created!')
        } catch (e) {
            if (transaction._aborted === false) {
                await transaction.rollback();
            }
            servError(e, res)
        }
    }

    const editPurchaseOrder = async (req, res) => {
        const {
            Po_Id, Retailer_Id, Branch_Id,
            Narration = null, Created_by, Product_Array, GST_Inclusive = 1, IS_IGST = 0,
        } = req.body;

        const Po_Date = ISOString(req?.body?.Po_Date);
        const isExclusiveBill = isEqualNumber(GST_Inclusive, 0);
        const isInclusive = isEqualNumber(GST_Inclusive, 1);
        const isNotTaxableBill = isEqualNumber(GST_Inclusive, 2);
        const isIGST = isEqualNumber(IS_IGST, 1);

        if (
            !checkIsNumber(Po_Id)
            || !checkIsNumber(Retailer_Id)
            || !checkIsNumber(Created_by)
            || (!Array.isArray(Product_Array) || Product_Array.length === 0)
        ) {
            return invalidInput(res, 'Po_Id, Retailer_Id, Sales_Person_Id, Created_by, Product_Array is Required')
        }

        const transaction = new sql.Transaction();

        try {
            const productsData = (await getProducts(0)).dataArray;
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
                .input('soid', Po_Id)
                .input('date', Po_Date)
                .input('retailer', Retailer_Id)
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
                .input('Trans_Type', 'UPDATE')
                .query(`
                    UPDATE 
                        tbl_Purchase_Order_Inv_Gen_Info
                    SET
                        Po_Date = @date, 
                        Retailer_Id = @retailer, 
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
                        Alterd_on = @alteron,
                        Trans_Type = @Trans_Type
                    WHERE
                        Po_Id = @soid;
                    `
                );

            const result = await request;

            if (result.rowsAffected[0] === 0) {
                throw new Error('Failed to update order, Try again')
            }

            await new sql.Request(transaction)
                .input('soid', Po_Id)
                .query(`DELETE FROM tbl_Purchase_Order_Inv_Stock_Info WHERE Purchase_Order_Id = @soid`);

            for (let i = 0; i < Product_Array.length; i++) {
                const product = Product_Array[i];
                const productDetails = findProductDetails(productsData, product.Item_Id)

                const gstPercentage = isIGST ? productDetails?.Igst_P : productDetails?.Gst_P;
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
                    .input('Po_Date', Po_Date)
                    .input('Purchase_Order_Id', Po_Id)
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
                        INSERT INTO tbl_Purchase_Order_Inv_Stock_Info (
                            Po_Date, Purchase_Order_Id, S_No, Item_Id, Bill_Qty, Item_Rate, Amount, Free_Qty, Total_Qty, 
                            Taxble, Taxable_Rate, HSN_Code, Unit_Id, Unit_Name, Taxable_Amount, Tax_Rate, 
                            Cgst, Cgst_Amo, Sgst, Sgst_Amo, Igst, Igst_Amo, Final_Amo, Created_on
                        ) VALUES (
                            @Po_Date, @Purchase_Order_Id, @S_No, @Item_Id, @Bill_Qty, @Item_Rate, @Amount, @Free_Qty, @Total_Qty, 
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

    const getPurchaseOrder = async (req, res) => {
        const { Retailer_Id, Cancel_status, Created_by } = req.query;

        const Fromdate = ISOString(req.query.Fromdate), Todate = ISOString(req.query.Todate);

        try {
            let query = `
            WITH SALES_DETAILS AS (
                SELECT
            		oi.*,
            		COALESCE(pm.Product_Name, 'unknown') AS Product_Name,
                    COALESCE(pm.Product_Image_Name, 'unknown') AS Product_Image_Name,
                    COALESCE(u.Units, 'unknown') AS UOM
            	FROM
            		tbl_Purchase_Order_Inv_Stock_Info AS oi
                    LEFT JOIN tbl_Product_Master AS pm
                    ON pm.Product_Id = oi.Item_Id
                    LEFT JOIN tbl_UOM AS u
                    ON u.Unit_Id = oi.Unit_Id
                WHERE
                    CONVERT(DATE, oi.Po_Date) >= CONVERT(DATE, @from)
            	    AND
            	    CONVERT(DATE, oi.Po_Date) <= CONVERT(DATE, @to)
            )
            SELECT 
            	so.*,
            	COALESCE(rm.Retailer_Name, 'unknown') AS Retailer_Name,
            	COALESCE(bm.BranchName, 'unknown') AS Branch_Name,
            	COALESCE(cb.Name, 'unknown') AS Created_BY_Name,

            	COALESCE((
            		SELECT
            			sd.*
            		FROM
            			SALES_DETAILS AS sd
            		WHERE
            			sd.Purchase_Order_Id = so.Po_Id
            		FOR JSON PATH
            	), '[]') AS Products_List
            
            FROM 
            	tbl_Purchase_Order_Inv_Gen_Info AS so
            
            	LEFT JOIN tbl_Retailers_Master AS rm
            	ON rm.Retailer_Id = so.Retailer_Id
            
            
            	LEFT JOIN tbl_Branch_Master bm
            	ON bm.BranchId = so.Branch_Id
            
            	LEFT JOIN tbl_Users AS cb
            	ON cb.UserId = so.Created_by
                        
            WHERE
                CONVERT(DATE, so.Po_Date) >= CONVERT(DATE, @from)
            	AND
            	CONVERT(DATE, so.Po_Date) <= CONVERT(DATE, @to) 
            `;


            // COALESCE(sp.Name, 'unknown') AS Sales_Person_Name,
            // LEFT JOIN tbl_Users AS sp
            // ON sp.UserId = so.Sales_Person_Id

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

            query += `
            ORDER BY CONVERT(DATETIME, so.Po_Id) DESC`;

            const request = new sql.Request();
            request.input('from', Fromdate);
            request.input('to', Todate);
            request.input('retailer', Retailer_Id);
            request.input('cancel', Cancel_status);
            request.input('creater', Created_by);

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

    return {
        purchaseOrderCreation,
        editPurchaseOrder,
        getPurchaseOrder,
    }
}


export default PurchaseOrder();