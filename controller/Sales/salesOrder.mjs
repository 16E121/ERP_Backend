import sql from 'mssql'
import { dataFound, invalidInput, noData, servError, success } from '../../res.mjs';
import { checkIsNumber } from '../../helper_functions.mjs'
import getImage from '../../middleware/getImageIfExist.mjs';


const SaleOrder = () => {

    const saleOrderCreation = async (req, res) => {
        const { 
            So_Date, Retailer_Id, Sales_Person_Id, Branch_Id, 
            Narration, Created_by, Product_Array
        } = req.body;

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

            let Total_Invoice_value = 0;
            Product_Array.forEach(o => {
                Total_Invoice_value += (parseInt(o?.Bill_Qty) * Number(o?.Item_Rate) ?? 0);
            })

            await transaction.begin();

            const request = new sql.Request(transaction);
            request.input('date', So_Date ? So_Date : new Date());
            request.input('retailer', Retailer_Id);
            request.input('salesperson', Sales_Person_Id);
            request.input('branch', Branch_Id ?? '');
            request.input('roundoff', Total_Invoice_value ? parseInt(Total_Invoice_value) : 0);
            request.input('totalinvoice', Total_Invoice_value ? Total_Invoice_value : 0);
            request.input('narration', Narration);
            request.input('cancel', 0);
            request.input('createdby', Created_by);
            request.input('alterby', Created_by);
            request.input('createdon', new Date());
            request.input('alteron', new Date());

            const result = await request.query(`
                INSERT INTO tbl_Sales_Order_Gen_Info (
                    So_Date, Retailer_Id, Sales_Person_Id, Branch_Id, Round_off, Total_Invoice_value, 
                    Narration, Cancel_status, Created_by, Altered_by, Created_on, Alterd_on
                ) VALUES (
                    @date, @retailer, @salesperson, @branch, @roundoff, @totalinvoice, 
                    @narration, @cancel, @createdby, @alterby, @createdon, @alteron
                );
                SELECT SCOPE_IDENTITY() AS OrderId`
            );

            if (result.rowsAffected[0] === 0) {
                throw new Error('Failed to create order, Try again.');
            }

            const OrderId = result.recordset[0].OrderId;

            for (let i = 0; i < Product_Array.length; i++) {
                const product = Product_Array[i];
                const request2 = new sql.Request(transaction);

                request2.input('Sales_Order_Id', OrderId);
                request2.input('So_Date', So_Date ? So_Date : new Date());
                request2.input('S_No', i + 1);
                request2.input('Item_Id', product.Item_Id);
                request2.input('Bill_Qty', Number(product.Bill_Qty));
                request2.input('Item_Rate', Number(product.Item_Rate));
                request2.input('Free_Qty', 0);
                request2.input('Total_Qty', product.Bill_Qty);
                request2.input('Amount', parseInt(product?.Bill_Qty) * Number(product?.Item_Rate));
                request2.input('Created_on', new Date());
                request2.input('Unit', product.UOM);

                const result2 = await request2.query(`
                    INSERT INTO tbl_Sales_Order_Stock_Info 
                        (Sales_Order_Id, So_Date, S_No, Item_Id, Bill_Qty, Item_Rate, Free_Qty, Total_Qty, Amount, Created_on, Unit_Id)
                    VALUES
                        (@Sales_Order_Id, @So_Date, @S_No, @Item_Id, @Bill_Qty, @Item_Rate, @Free_Qty, @Total_Qty, @Amount, @Created_on, @Unit);
                `);

                if (result2.rowsAffected[0] === 0) {
                    throw new Error('Failed to create order, Try again.');
                }
            }

            await transaction.commit();

            success(res, 'Order Created!')
        } catch (e) {
            await transaction.rollback();
            servError(e, res)
        }
    }

    const editSaleOrder = async (req, res) => {
        const { So_Id, So_Date, Retailer_Id, Sales_Person_Id, Branch_Id, Narration, Created_by, Product_Array } = req.body;

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
            let Total_Invoice_value = 0;
            Product_Array.map(o => {
                Total_Invoice_value += (parseInt(o?.Bill_Qty) * Number(o?.Item_Rate) ?? 0);
            })

            await transaction.begin();

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
                `);

                if (updateResult.rowsAffected[0] === 0) {
                    throw new Error('Failed to update order, Try again')
                }

                await new sql.Request(transaction)
                    .input('soid', So_Id)
                    .query(`DELETE FROM tbl_Sales_Order_Stock_Info WHERE Sales_Order_Id = @soid`);

                for (let i = 0; i < Product_Array.length; i++) {
                    const product = Product_Array[i];
                    const request2 = new sql.Request(transaction);

                    request2.input('Sales_Order_Id', So_Id);
                    request2.input('S_No', i + 1);
                    request2.input('Item_Id', product.Item_Id);
                    request2.input('Bill_Qty', Number(product.Bill_Qty));
                    request2.input('Item_Rate', Number(product.Item_Rate));
                    request2.input('Free_Qty', 0);
                    request2.input('Total_Qty', product.Bill_Qty);
                    request2.input('Amount', parseInt(product?.Bill_Qty) * Number(product?.Item_Rate));
                    request2.input('Created_on', new Date());

                    const result2 = await request2.query(`
                        INSERT INTO tbl_Sales_Order_Stock_Info 
                            (Sales_Order_Id, S_No, Item_Id, Bill_Qty, Item_Rate, Free_Qty, Total_Qty, Amount, Created_on)
                        VALUES
                            (@Sales_Order_Id, @S_No, @Item_Id, @Bill_Qty, @Item_Rate, @Free_Qty, @Total_Qty, @Amount, @Created_on);
                    `);

                    if (result2.rowsAffected[0] === 0) {
                        throw new Error('Failed to update order, Try again')
                    }
                }

                await transaction.commit();
                success(res, 'Changes Saved!')

        } catch (e) {
            transaction.rollback();
            servError(e, res)
        }
    }

    const getSaleOrder = async (req, res) => {
        const { Fromdate, Todate, Retailer_Id, Cancel_status, Created_by, Sales_Person_Id } = req.query;

        if (!Fromdate || !Todate) {
            return invalidInput(res, 'Fromdate and Todate is required. Retailer_Id, Cancel_status, Created_by, Sales_Person_Id are filters');
        }

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
            ORDER BY CONVERT(DATETIME, so.So_Date) DESC`;

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