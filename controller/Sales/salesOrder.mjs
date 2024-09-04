import sql from 'mssql'
import { dataFound, failed, invalidInput, noData, servError, success } from '../../res.mjs';
import { checkIsNumber } from '../../helper_functions.mjs'
import getImage from '../../middleware/getImageIfExist.mjs';


const SaleOrder = () => {

    const saleOrderCreation = async (req, res) => {
        const { Company_Id, So_Date, Retailer_Id, Sales_Person_Id, Branch_Id, Narration, Created_by, Product_Array } = req.body;

        if (!checkIsNumber(Company_Id) || !checkIsNumber(Retailer_Id) || !checkIsNumber(Sales_Person_Id) || !checkIsNumber(Created_by) || !Array.isArray(Product_Array)) {
            return invalidInput(res, 'Company_Id, Retailer_Id, Sales_Person_Id, Created_by, Product_Array is Required')
        }

        try {

            const companyGet = await new sql.Request()
                .input('Company_Id', Company_Id)
                .query(`SELECT Company_Code FROM tbl_Company_Master WHERE Company_id = @Company_Id`)

            if (companyGet.recordset.length === 0) {
                return failed(res, 'Invalid Company')
            }

            const saleOrderId = await new sql.Request()
                .input('Company_Id', Company_Id)
                .query(`SELECT COALESCE(MAX(Sales_Order_Id), 0) AS Max_Id FROM tbl_Sales_Order_Gen_Info WHERE Company_Id = @Company_Id`);

            const Company_Code = companyGet.recordset[0].Company_Code;
            const Sales_Order_Id = Number(saleOrderId.recordset[0].Max_Id) + 1;

            const paddedOrderId = Sales_Order_Id.toString().padStart(7, '0');

            const Sales_Order_No = Company_Code + paddedOrderId;

            let Total_Invoice_value = 0;
            Product_Array.map(o => {
                Total_Invoice_value += (parseInt(o?.Bill_Qty) * Number(o?.Item_Rate));
            })

            const transaction = new sql.Transaction();

            await transaction.begin();

            try {
                const request = new sql.Request(transaction);
                request.input('comp', Company_Id);
                request.input('orderid', Sales_Order_Id);
                request.input('orderno', Sales_Order_No);
                request.input('date', So_Date ? So_Date : new Date());
                request.input('retailer', Retailer_Id);
                request.input('salesperson', Sales_Person_Id);
                request.input('branch', Branch_Id);
                request.input('roundoff', Total_Invoice_value ? parseInt(Total_Invoice_value) : 0);
                request.input('totalinvoice', Total_Invoice_value ? Total_Invoice_value : 0);
                request.input('narration', Narration);
                request.input('cancel', 0);
                request.input('createdby', Created_by);
                request.input('alterby', Created_by);
                request.input('createdon', new Date());
                request.input('alteron', new Date());

                const result = await request.query(`
                    INSERT INTO tbl_Sales_Order_Gen_Info 
                        (Company_Id, Sales_Order_Id, Sales_Order_No, So_Date, Retailer_Id, Sales_Person_Id, Branch_Id, Round_off, 
                            Total_Invoice_value, Narration, Cancel_status, Created_by, Altered_by, Created_on, Alterd_on)
                    VALUES 
                        (@comp, @orderid, @orderno, @date, @retailer, @salesperson, @branch, @roundoff, 
                            @totalinvoice, @narration, @cancel, @createdby, @alterby, @createdon, @alteron);

                        SELECT SCOPE_IDENTITY() AS OrderId`);

                const OrderId = result.recordset[0].OrderId;

                for (let i = 0; i < Product_Array.length; i++) {
                    const product = Product_Array[i];
                    const request2 = new sql.Request(transaction);

                    request2.input('Company_Id', Company_Id);
                    request2.input('Sales_Order_Id', OrderId);
                    request2.input('S_No', i + 1);
                    request2.input('Item_Id', product.Item_Id);
                    request2.input('Bill_Qty', Number(product.Bill_Qty));
                    request2.input('Item_Rate', Number(product.Item_Rate));
                    request2.input('Free_Qty', 0);
                    request2.input('Total_Qty', product.Bill_Qty);
                    request2.input('Amount', parseInt(product?.Bill_Qty) * Number(product?.Item_Rate));
                    request2.input('Created_on', new Date());

                    await request2.query(`
                        INSERT INTO tbl_Sales_Order_Stock_Info 
                            (Company_Id, Sales_Order_Id, S_No, Item_Id, Bill_Qty, Item_Rate, Free_Qty, Total_Qty, Amount, Created_on)
                        VALUES
                            (@Company_Id, @Sales_Order_Id, @S_No, @Item_Id, @Bill_Qty, @Item_Rate, @Free_Qty, @Total_Qty, @Amount, @Created_on);
                    `);
                }

                await transaction.commit();

                success(res, 'Order Created!')

            } catch (e) {
                await transaction.rollback();
                return servError(e, res)
            }


        } catch (e) {
            servError(e, res,)
        }

    }

    const editSaleOrder = async (req, res) => {
        const { So_Id, So_Date, Retailer_Id, Sales_Person_Id, Branch_Id, Narration, Created_by, Product_Array } = req.body;

        if (!checkIsNumber(So_Id) || !checkIsNumber(Retailer_Id) || !checkIsNumber(Sales_Person_Id) || !checkIsNumber(Created_by) || !Array.isArray(Product_Array)) {
            return invalidInput(res, 'So_Id, Retailer_Id, Sales_Person_Id, Created_by, Product_Array is Required')
        }

        try {
            let Total_Invoice_value = 0;
            Product_Array.map(o => {
                Total_Invoice_value += (parseInt(o?.Bill_Qty) * Number(o?.Item_Rate));
            })

            const transaction = new sql.Transaction();

            await transaction.begin();

            try {
                const updateRequest = new sql.Request(transaction);
                updateRequest.input('date', So_Date ? So_Date : new Date());
                updateRequest.input('retailer', Retailer_Id);
                updateRequest.input('salesPerson', Sales_Person_Id);
                updateRequest.input('branch', Branch_Id);
                updateRequest.input('narration', Narration);
                updateRequest.input('alterby', Created_by);
                updateRequest.input('alteron', new Date());
                updateRequest.input('total', Total_Invoice_value);
                updateRequest.input('soid', So_Id);

                const updateResult = await updateRequest.query(`
                    UPDATE tbl_Sales_Order_Gen_Info
                    SET
                        So_Date = @date,
                        Retailer_Id = @retailer,
                        Sales_Person_Id = @salesPerson,
                        Branch_Id = @branch,
                        Narration = @narration,
                        Altered_by = @alterby,
                        Alterd_on = @alteron,
                        Round_off = @total,
                        Total_Invoice_value = @total
                    WHERE
                        So_Id = @soid
                    SELECT Company_Id FROM tbl_Sales_Order_Gen_Info WHERE So_Id = @soid
                `);

                const Company_Id = updateResult.recordset[0]?.Company_Id;

                await new sql.Request(transaction)
                    .input('soid', So_Id)
                    .query(`DELETE FROM tbl_Sales_Order_Stock_Info WHERE Sales_Order_Id = @soid`);

                for (let i = 0; i < Product_Array.length; i++) {
                    const product = Product_Array[i];
                    const request2 = new sql.Request(transaction);

                    request2.input('Company_Id', Company_Id);
                    request2.input('Sales_Order_Id', So_Id);
                    request2.input('S_No', i + 1);
                    request2.input('Item_Id', product.Item_Id);
                    request2.input('Bill_Qty', Number(product.Bill_Qty));
                    request2.input('Item_Rate', Number(product.Item_Rate));
                    request2.input('Free_Qty', 0);
                    request2.input('Total_Qty', product.Bill_Qty);
                    request2.input('Amount', parseInt(product?.Bill_Qty) * Number(product?.Item_Rate));
                    request2.input('Created_on', new Date());

                    await request2.query(`
                        INSERT INTO tbl_Sales_Order_Stock_Info 
                            (Company_Id, Sales_Order_Id, S_No, Item_Id, Bill_Qty, Item_Rate, Free_Qty, Total_Qty, Amount, Created_on)
                        VALUES
                            (@Company_Id, @Sales_Order_Id, @S_No, @Item_Id, @Bill_Qty, @Item_Rate, @Free_Qty, @Total_Qty, @Amount, @Created_on);
                    `);
                }

                await transaction.commit();

                success(res, 'Changes Saved!')

            } catch (e) {
                await transaction.rollback();
                return servError(e, res);
            }
        } catch (e) {
            servError(e, res)
        }
    }

    const getSaleOrder = async (req, res) => {
        const { Company_Id, Fromdate, Todate, Retailer_Id, Cancel_status, Created_by, Sales_Person_Id } = req.query;

        if (!checkIsNumber(Company_Id)) {
            return invalidInput(res, 'Company_Id is required, Optional: Fromdate, Todate, Retailer_Id, Cancel_status, Created_by, Sales_Person_Id');
        }

        try {
            let query = `
            SELECT 
            	so.*,
            	COALESCE(rm.Retailer_Name, 'unknown') AS Retailer_Name,
            	COALESCE(sp.Name, 'unknown') AS Sales_Person_Name,
            	COALESCE(bm.BranchName, 'unknown') AS Branch_Name,
            	COALESCE(cb.Name, 'unknown') AS Created_BY_Name,

            	COALESCE((
            		SELECT
            			oi.*,
            			COALESCE(pm.Product_Name, 'unknown') AS Product_Name,
                        COALESCE(pm.Product_Image_Name, 'unknown') AS Product_Image_Name
            		FROM
            			tbl_Sales_Order_Stock_Info AS oi

                        LEFT JOIN tbl_Product_Master pm
                        ON pm.Product_Id = oi.Item_Id
            		WHERE
            			oi.Sales_Order_Id = so.So_Id
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
            	so.Company_Id IS NOT NULL
            `;

            if (Fromdate && Todate) {
                query += `
                AND
            	CONVERT(DATE, so.So_Date) >= CONVERT(DATE, @from)
            	AND
            	CONVERT(DATE, so.So_Date) <= CONVERT(DATE, @to) `
            }

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
            ORDER BY CONVERT(DATETIME, so.So_Date) DESC`;

            const request = new sql.Request();
            request.input('comp', Company_Id);
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
                }))
                dataFound(res, withImage);
            } else {
                noData(res)
            }
        } catch (e) {
            servError(e, res);
        }
    }

    const salerOrderAreaWiseReport = async (req, res) => {
        const { Company_id } = req.query;

        if (!checkIsNumber(Company_id)) {
            return invalidInput(res, 'Company_id is required');
        }

        try {

            const request = new sql.Request()
                .input('comp', Company_id)
                .query(`
                    SELECT
                        a.*,
                        COALESCE((
                            SELECT
                                r.Retailer_Id,
                                r.Retailer_Name,
                                r.Reatailer_Address,
                                r.Mobile_No,
                                r.Latitude,
                                r.Longitude,
                                COALESCE((
                                    SELECT 
                                        pre.*,
                                        pm.Product_Name,
                                        COALESCE((
                                            SELECT 
                                                TOP (1) Product_Rate 
                                            FROM 
                                                tbl_Pro_Rate_Master 
                                            WHERE 
                                                Product_Id = pre.Item_Id
                                            ORDER BY
                                                CONVERT(DATETIME, Rate_Date) DESC
                                        ), 0) AS Item_Rate 
                                    FROM 
                                        Previous_Stock_Fn_1(CONVERT(DATE, GETDATE()), r.Retailer_Id) AS pre
                                        LEFT JOIN tbl_Product_Master AS pm
                                        ON pm.Product_Id = pre.Item_Id
                                    WHERE 
                                        pre.Previous_Balance * COALESCE((
                                            SELECT 
                                                TOP (1) Product_Rate 
                                            FROM 
                                                tbl_Pro_Rate_Master 
                                            WHERE 
                                                Product_Id = pre.Item_Id
                                            ORDER BY
                                                CONVERT(DATETIME, Rate_Date) DESC
                                        ), 0) > 0
                                    FOR JSON PATH
                                ), '[]') AS Closing_Stock
                            FROM
                                tbl_Retailers_Master AS r
                            WHERE
                                a.Area_Id = r.Area_Id
                                AND
                                r.Company_Id = @comp
                                AND EXISTS (
                                    SELECT 1
                                    FROM 
                                        Previous_Stock_Fn_1(CONVERT(DATE, GETDATE()), r.Retailer_Id) AS pre
                                    WHERE 
                                        pre.Previous_Balance * COALESCE((
                                            SELECT 
                                                TOP (1) Product_Rate 
                                            FROM 
                                                tbl_Pro_Rate_Master 
                                            WHERE 
                                                Product_Id = pre.Item_Id
                                            ORDER BY
                                                CONVERT(DATETIME, Rate_Date) DESC
                                        ), 0) > 0
                                )
                            FOR JSON PATH
                        ), '[]') AS Retailer
                    FROM
                        tbl_Area_Master AS a
                    WHERE
                        EXISTS (
                            SELECT 1
                            FROM
                                tbl_Retailers_Master AS r
                            WHERE
                                a.Area_Id = r.Area_Id
                                AND
                                r.Company_Id = @comp
                                AND EXISTS (
                                    SELECT 1
                                    FROM 
                                        Previous_Stock_Fn_1(CONVERT(DATE, GETDATE()), r.Retailer_Id) AS pre
                                    WHERE 
                                        pre.Previous_Balance * COALESCE((
                                            SELECT 
                                                TOP (1) Product_Rate 
                                            FROM 
                                                tbl_Pro_Rate_Master 
                                            WHERE 
                                                Product_Id = pre.Item_Id
                                            ORDER BY
                                                CONVERT(DATETIME, Rate_Date) DESC
                                        ), 0) > 0
                                )
                        )
                    `)

            const result = await request;

            if (result.recordset.length > 0) {
                const parsed = result.recordset.map(o => ({
                    ...o,
                    Retailer: JSON.parse(o?.Retailer)
                }));
                const parsed2 = parsed.map(o => ({
                    ...o,
                    Retailer: o?.Retailer?.map(oo => ({
                        ...oo,
                        Closing_Stock: JSON.parse(oo?.Closing_Stock)
                    }))
                }))
                dataFound(res, parsed2);
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
        salerOrderAreaWiseReport,
    }
}


export default SaleOrder();