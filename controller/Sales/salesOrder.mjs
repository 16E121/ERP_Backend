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

    const saleOrderCreation = async (req, res) => {
        const {
            Retailer_Id, Sales_Person_Id, Branch_Id,
            Narration = null, Created_by, Product_Array = [], GST_Inclusive = 1, IS_IGST = 0
        } = req.body;

        const So_Date = ISOString(req?.body?.So_Date);
        const isExclusiveBill = isEqualNumber(GST_Inclusive, 0);
        const isInclusive = isEqualNumber(GST_Inclusive, 1);
        const isNotTaxableBill = isEqualNumber(GST_Inclusive, 2);
        const isIGST = isEqualNumber(IS_IGST, 1);

        if (
            !checkIsNumber(Retailer_Id)
            || !checkIsNumber(Sales_Person_Id)
            || !checkIsNumber(Created_by)
            || (!Array.isArray(Product_Array) || Product_Array.length === 0)
        ) {
            return invalidInput(res, 'Retailer_Id, Sales_Person_Id, Created_by, Product_Array is Required')
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
                .input('date', So_Date)
                .input('retailer', Retailer_Id)
                .input('salesperson', Sales_Person_Id)
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
                .input('cancel', 0)
                .input('createdby', Created_by)
                .input('alterby', Created_by)
                .input('Alter_Id', Alter_Id)
                .input('createdon', new Date())
                .input('alteron', new Date())
                .input('Trans_Type', 'INSERT')
                .query(`
                    INSERT INTO tbl_Sales_Order_Gen_Info (
                        So_Date, Retailer_Id, Sales_Person_Id, Branch_Id, CSGT_Total, SGST_Total, IGST_Total,
                        GST_Inclusive, IS_IGST, Round_off, Total_Invoice_value, Total_Before_Tax, Total_Tax,
                        Narration, Cancel_status, Created_by, Altered_by, Alter_Id, Created_on, Alterd_on,
                        Trans_Type
                    ) VALUES (
                        @date, @retailer, @salesperson, @branch, @CSGT_Total, @SGST_Total, @IGST_Total,
                        @GST_Inclusive, @IS_IGST, @roundoff, @totalinvoice, @Total_Before_Tax, @Total_Tax,
                        @narration, @cancel, @createdby, @alterby, @Alter_Id, @createdon, @alteron,
                        @Trans_Type
                    );
                    SELECT SCOPE_IDENTITY() AS OrderId;`
                );

            const result = await request;

            if (result.rowsAffected[0] === 0) {
                throw new Error('Failed to create order, Try again.');
            }

            const OrderId = result.recordset[0].OrderId;


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
                    .input('So_Date', So_Date)
                    .input('Sales_Order_Id', OrderId)
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
                    .input('Unit_Id', product.UOM ? product.UOM : (productDetails.UOM ?? ''))
                    .input('Unit_Name', product.Units ? product.Units : (productDetails.Units ?? ''))
                    .input('Taxable_Amount', Taxable_Amount)
                    .input('Tax_Rate', gstPercentage)
                    .input('Cgst', isNotTaxableBill ? 0 : Cgst)
                    .input('Cgst_Amo', isNotTaxableBill ? 0 : Cgst_Amo)
                    .input('Sgst', isNotTaxableBill ? 0 : Cgst)
                    .input('Sgst_Amo', isNotTaxableBill ? 0 : Cgst_Amo)
                    .input('Igst', isNotTaxableBill ? 0 : Igst)
                    .input('Igst_Amo', isNotTaxableBill ? 0 : Igst_Amo)
                    .input('Final_Amo', Final_Amo)
                    .input('Created_on', new Date())
                    .query(`
                        INSERT INTO tbl_Sales_Order_Stock_Info (
                            So_Date, Sales_Order_Id, S_No, Item_Id, Bill_Qty, Item_Rate, Amount, Free_Qty, Total_Qty, 
                            Taxble, Taxable_Rate, HSN_Code, Unit_Id, Unit_Name, Taxable_Amount, Tax_Rate, 
                            Cgst, Cgst_Amo, Sgst, Sgst_Amo, Igst, Igst_Amo, Final_Amo, Created_on
                        ) VALUES (
                            @So_Date, @Sales_Order_Id, @S_No, @Item_Id, @Bill_Qty, @Item_Rate, @Amount, @Free_Qty, @Total_Qty, 
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

            success(res, 'Order Created!')
        } catch (e) {
            if (transaction._aborted === false) {
                await transaction.rollback();
            }
            servError(e, res)
        }
    }

    const editSaleOrder = async (req, res) => {
        const {
            So_Id, Retailer_Id, Sales_Person_Id, Branch_Id,
            Narration = null, Created_by, Product_Array, GST_Inclusive = 1, IS_IGST = 0
        } = req.body;

        const So_Date = ISOString(req?.body?.So_Date);
        const isExclusiveBill = isEqualNumber(GST_Inclusive, 0);
        const isInclusive = isEqualNumber(GST_Inclusive, 1);
        const isNotTaxableBill = isEqualNumber(GST_Inclusive, 2);
        const isIGST = isEqualNumber(IS_IGST, 1);

        if (
            !checkIsNumber(So_Id)
            || !checkIsNumber(Retailer_Id)
            || !checkIsNumber(Sales_Person_Id)
            || !checkIsNumber(Created_by)
            || (!Array.isArray(Product_Array) || Product_Array.length === 0)
        ) {
            return invalidInput(res, 'So_Id, Retailer_Id, Sales_Person_Id, Created_by, Product_Array is Required')
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
                    return o += Amount;
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
                .input('soid', So_Id)
                .input('date', So_Date)
                .input('retailer', Retailer_Id)
                .input('salesperson', Sales_Person_Id)
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
                        tbl_Sales_Order_Gen_Info
                    SET
                        So_Date = @date, 
                        Retailer_Id = @retailer, 
                        Sales_Person_Id = @salesperson, 
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
                        So_Id = @soid;
                    `
                );

            const result = await request;

            if (result.rowsAffected[0] === 0) {
                throw new Error('Failed to update order, Try again')
            }

            await new sql.Request(transaction)
                .input('soid', So_Id)
                .query(`DELETE FROM tbl_Sales_Order_Stock_Info WHERE Sales_Order_Id = @soid`);

            for (let i = 0; i < Product_Array.length; i++) {
                const request2 = new sql.Request(transaction);
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

                request2.input('So_Date', So_Date ? So_Date : new Date());
                request2.input('Sales_Order_Id', So_Id);
                request2.input('S_No', i + 1);
                request2.input('Item_Id', product.Item_Id);
                request2.input('Bill_Qty', Bill_Qty);
                request2.input('Item_Rate', Item_Rate);
                request2.input('Amount', Amount);
                request2.input('Free_Qty', 0);
                request2.input('Total_Qty', Bill_Qty);
                request2.input('Taxble', Taxble);
                request2.input('Taxable_Rate', Taxable_Rate);
                request2.input('HSN_Code', productDetails.HSN_Code);
                request2.input('Unit_Id', product.UOM ? product.UOM : (productDetails.UOM ?? ''));
                request2.input('Unit_Name', product.Units ? product.Units : (productDetails.Units ?? ''));
                request2.input('Taxable_Amount', Taxable_Amount);
                request2.input('Tax_Rate', gstPercentage);
                request2.input('Cgst', isNotTaxableBill ? 0 : Cgst);
                request2.input('Cgst_Amo', isNotTaxableBill ? 0 : Cgst_Amo);
                request2.input('Sgst', isNotTaxableBill ? 0 : Cgst);
                request2.input('Sgst_Amo', isNotTaxableBill ? 0 : Cgst_Amo);
                request2.input('Igst', isNotTaxableBill ? 0 : Igst);
                request2.input('Igst_Amo', isNotTaxableBill ? 0 : Igst_Amo);
                request2.input('Final_Amo', Final_Amo);
                request2.input('Created_on', new Date());

                const result2 = await request2.query(`
                    INSERT INTO tbl_Sales_Order_Stock_Info (
                        So_Date, Sales_Order_Id, S_No, Item_Id, Bill_Qty, Item_Rate, Amount, Free_Qty, Total_Qty, 
                        Taxble, Taxable_Rate, HSN_Code, Unit_Id, Unit_Name, Taxable_Amount, Tax_Rate, 
                        Cgst, Cgst_Amo, Sgst, Sgst_Amo, Igst, Igst_Amo, Final_Amo, Created_on
                    ) VALUES (
                        @So_Date, @Sales_Order_Id, @S_No, @Item_Id, @Bill_Qty, @Item_Rate, @Amount, @Free_Qty, @Total_Qty, 
                        @Taxble, @Taxable_Rate, @HSN_Code, @Unit_Id, @Unit_Name, @Taxable_Amount, @Tax_Rate, 
                        @Cgst, @Cgst_Amo, @Sgst, @Sgst_Amo, @Igst, @Igst_Amo, @Final_Amo, @Created_on
                    );`
                );

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
            		COALESCE(pm.Product_Name, 'unknown') AS Product_Name,
                    COALESCE(pm.Product_Image_Name, 'unknown') AS Product_Image_Name,
                    COALESCE(u.Units, 'unknown') AS UOM
            	FROM
            		tbl_Sales_Order_Stock_Info AS oi
                    LEFT JOIN tbl_Product_Master AS pm
                    ON pm.Product_Id = oi.Item_Id
                    LEFT JOIN tbl_UOM AS u
                    ON u.Unit_Id = oi.Unit_Id
                WHERE
                    CONVERT(DATE, oi.So_Date) >= CONVERT(DATE, @from)
            	    AND
            	    CONVERT(DATE, oi.So_Date) <= CONVERT(DATE, @to)
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
                CONVERT(DATE, so.So_Date) >= CONVERT(DATE, @from)
            	AND
            	CONVERT(DATE, so.So_Date) <= CONVERT(DATE, @to) 
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
            ORDER BY CONVERT(DATETIME, so.So_Id) DESC`;

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

    return {
        saleOrderCreation,
        getSaleOrder,
        editSaleOrder,
    }
}


export default SaleOrder();