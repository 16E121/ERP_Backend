import sql from 'mssql';
import dotenv from 'dotenv';
import { dataFound, failed, invalidInput, noData, servError, success } from '../../res.mjs';
import uploadFile from '../../middleware/uploadMiddleware.mjs';
import getImage from '../../middleware/getImageIfExist.mjs';
import fileRemoverMiddleware from '../../middleware/unSyncFile.mjs';
import { checkIsNumber } from '../../helper_functions.mjs';

dotenv.config();



const deleteCurrentProductImage = async (productId) => {
    const getImageQuery = `
        SELECT Product_Image_Path
        FROM tbl_Product_Master
        WHERE Product_Id = @productId`;

    const request = new sql.Request();
    request.input('productId', productId);
    const result = await request.query(getImageQuery);

    if (result.recordset.length > 0) {
        const imagePath = result.recordset[0].Product_Image_Path;
        if (imagePath) {
            fileRemoverMiddleware(imagePath)
                .catch((err) => {
                    console.error('Error deleting file:', err);
                });
        }
    }
};

const sfProductController = () => {

    const getProducts = async (req, res) => {

        const { Company_Id } = req.query;

        if (!checkIsNumber(Company_Id)) {
            return invalidInput(res, 'Company_Id is required');
        }

        try {
            const query = `
            SELECT 
            	p.*,
            	COALESCE(b.Brand_Name, 'NOT FOUND') AS Brand_Name,
            	COALESCE(pg.Pro_Group, 'NOT FOUND') AS Pro_Group,
                COALESCE(u.Units, 'NOT FOUND') AS Units,
                COALESCE((
                    SELECT 
                        TOP (1) Product_Rate 
                    FROM 
                        tbl_Pro_Rate_Master 
                    WHERE 
                        Product_Id = p.Product_Id
                    ORDER BY
                        CONVERT(DATETIME, Rate_Date) DESC
                ), 0) AS Item_Rate
            FROM 
            	tbl_Product_Master AS p
            	LEFT JOIN tbl_Brand_Master AS b
            	ON b.Brand_Id = p.Brand
            	LEFT JOIN tbl_Product_Group AS pg
            	ON pg.Pro_Group_Id = p.Product_Group
                LEFT JOIN tbl_UOM AS u
                ON u.Unit_Id = p.UOM_Id
            `;

            // WHERE
            //     p.Company_Id = @company

            const request = new sql.Request();
            request.input('company', Company_Id);

            const result = await request.query(query);
            
            if (result.recordset.length) {
                const withPic = result.recordset.map(o => ({
                    ...o,
                    productImageUrl: getImage('products', o?.Product_Image_Name)
                }));
                dataFound(res, withPic);
            } else {
                noData(res)
            }
        } catch (e) {
            servError(e, res)
        }
    }

    const getGroupedProducts = async (req, res) => {
        const { Company_Id } = req.query;

        if (!checkIsNumber(Company_Id)) {
            return invalidInput(res, 'Company_Id is required');
        }

        try {
            const query = `
            WITH UOM AS (
                SELECT *
                FROM tbl_UOM
            ),
            RATE AS (
                SELECT * 
                FROM tbl_Pro_Rate_Master
            ),
            BRAND AS (
                SELECT *
                FROM tbl_Brand_Master
            ),
            PRODUCTGROUP AS (
                SELECT *
                FROM tbl_Product_Group
            ),
            PRODUCTS AS (
                SELECT 
                    p.*,
                    COALESCE(b.Brand_Name, 'NOT FOUND') AS Brand_Name,
            	    COALESCE(pg.Pro_Group, 'NOT FOUND') AS Pro_Group,
                    COALESCE(u.Units, 'NOT FOUND') AS Units,
                    COALESCE((
                        SELECT 
                            TOP (1) Product_Rate 
                        FROM 
                            RATE AS r
                        WHERE 
                            r.Product_Id = p.Product_Id
                        ORDER BY
                            CONVERT(DATETIME, r.Rate_Date) DESC
                    ), 0) AS Item_Rate 
                FROM 
                    tbl_Product_Master AS p
                    LEFT JOIN BRAND AS b
            	    ON b.Brand_Id = p.Brand
            	    LEFT JOIN PRODUCTGROUP AS pg
            	    ON pg.Pro_Group_Id = p.Product_Group
                    LEFT JOIN UOM AS u
                    ON u.Unit_Id = p.UOM_Id
            )
            SELECT 
                g.*,
                COALESCE((
                    SELECT 
                        *
                    FROM 
                        PRODUCTS AS p
                    WHERE
                        g.Pro_Group_Id = p.Product_Group
                    FOR JSON PATH
                ), '[]') AS GroupedProductArray
            FROM
                tbl_Product_Group AS g
            WHERE
                g.Pro_Group_Id != 0 
            ORDER BY 
                g.Pro_Group_Id`;

                
                // AND
                // g.Company_Id = @comp

            const request = new sql.Request();
            request.input('comp', Company_Id);
            const result = await request.query(query);

            if (result.recordset.length > 0) {

                const parsed = result.recordset.map(o => ({
                    ...o,
                    GroupedProductArray: JSON.parse(o?.GroupedProductArray)
                }))
                const withPic = parsed.map(o => ({
                    ...o,
                    GroupedProductArray: o?.GroupedProductArray?.map(oo => ({
                        ...oo,
                        productImageUrl: getImage('products', oo?.Product_Image_Name)
                    }))
                }));
                dataFound(res, withPic)
            } else {
                noData(res)
            }
        } catch (e) {
            servError(e, res)
        }
    }

    const getProductGroups = async (req, res) => {
        const { Company_Id } = req.query;

        if (!checkIsNumber(Company_Id)) {
            return invalidInput(res, 'Company_Id is required')
        }
        try {
            const result = await new sql.Request()
                .input('Company_Id', Company_Id)
                .query(`SELECT Pro_Group_Id, Pro_Group FROM tbl_Product_Group `);
                // WHERE Company_Id = @Company_Id

            if (result.recordset.length > 0) {
                dataFound(res, result.recordset);
            } else {
                noData(res);
            }
        } catch (e) {
            servError(e, res);
        }
    }

    const getProductPacks = async (req, res) => {
        const { Company_Id } = req.query;

        if (!checkIsNumber(Company_Id)) {
            return invalidInput(res, 'Company_Id is required')
        }
        try {
            const result = await new sql.Request()
                .input('Company_Id', Company_Id)
                .query(`SELECT Pack_Id, Pack FROM tbl_Pack_Master `);
                // WHERE Company_Id = @Company_Id

            if (result.recordset.length > 0) {
                dataFound(res, result.recordset);
            } else {
                noData(res);
            }
        } catch (e) {
            servError(e, res);
        }
    }

    const postProductsWithImage = async (req, res) => {
        try {
            await uploadFile(req, res, 0, 'Product_Image');
            const fileName = req?.file?.filename;
            const filePath = req?.file?.path;
            const filetype = req?.file?.mimetype;
            const filesize = req?.file?.size;

            if (!fileName) {
                return invalidInput(res, 'Product Photo is required')
            }

            const { Product_Name, Short_Name, Product_Description, Brand, Product_Group, UOM } = req.body;

            const getMaxId = await sql.query(`SELECT MAX(Product_Id) AS MaxId FROM tbl_Product_Master`);

            const MaxId = getMaxId.recordset[0]?.MaxId || 1

            const insertQuery = `
            INSERT INTO tbl_Product_Master
                (Product_Id, Product_Code, Product_Name, Short_Name, Product_Description, Brand, Product_Group, UOM, IS_Sold, Display_Order_By, Product_Image_Name, Product_Image_Type, Product_Image_Size, Product_Image_Path)
            VALUES 
                (@maxid, @code, @name, @short_name, @desc, @brand, @product_group, @uom, @is_sold, @order, @img_name, @img_type, @img_size, @img_path)`;

            const request = new sql.Request();
            request.input('maxid', MaxId);
            request.input('code', 'ONLINE_' + MaxId)
            request.input('name', Product_Name)
            request.input('short_name', Short_Name)
            request.input('desc', Product_Description)
            request.input('brand', Brand)
            request.input('product_group', Product_Group)
            request.input('uom', UOM)
            request.input('is_sold', 1)
            request.input('order', 1)
            request.input('img_name', fileName)
            request.input('img_type', filetype)
            request.input('img_size', filesize)
            request.input('img_path', filePath)

            const result = await request.query(insertQuery);

            if (result.rowsAffected[0] && result.rowsAffected[0] > 0) {
                success(res, 'New Product Added')
            } else {
                failed(res)
            }

        } catch (e) {
            servError(e, res);
        }
    }

    const postProductsWithoutImage = async (req, res) => {
        const { Product_Name, Short_Name, Product_Description, Brand, Product_Group, UOM } = req.body;

        try {
            const getMaxId = await sql.query(`SELECT MAX(Product_Id) AS MaxId FROM tbl_Product_Master`);

            const MaxId = getMaxId.recordset[0]?.MaxId || 1

            const insertQuery = `
            INSERT INTO tbl_Product_Master
                (Product_Id, Product_Code, Product_Name, Short_Name, Product_Description, Brand, Product_Group, UOM, IS_Sold, Display_Order_By)
            VALUES 
                (@maxid, @code, @name, @short_name, @desc, @brand, @product_group, @uom, @is_sold, @order)`;

            const request = new sql.Request();
            request.input('maxid', MaxId);
            request.input('code', 'ONLINE_' + MaxId)
            request.input('name', Product_Name)
            request.input('short_name', Short_Name)
            request.input('desc', Product_Description)
            request.input('brand', Brand)
            request.input('product_group', Product_Group)
            request.input('uom', UOM)
            request.input('is_sold', 1)
            request.input('order', 1)

            const result = await request.query(insertQuery);

            if (result.rowsAffected[0] && result.rowsAffected[0] > 0) {
                success(res, 'New Product Added')
            } else {
                failed(res)
            }

        } catch (e) {
            servError(e, res);
        }
    }

    const updateProduct = async (req, res) => {
        try {
            const { Product_Id, Product_Name, Short_Name, Product_Description, Brand, Product_Group, UOM } = req.body;

            if (!Product_Id) {
                return invalidInput(res, 'Product Id is required for update');
            }

            const updateQuery = `
                UPDATE tbl_Product_Master
                SET 
                    Product_Name = @name,
                    Short_Name = @short_name,
                    Product_Description = @desc,
                    Brand = @brand,
                    Product_Group = @product_group,
                    UOM = @uom
                WHERE Product_Id = @productId`;

            const request = new sql.Request();
            request.input('name', Product_Name);
            request.input('short_name', Short_Name);
            request.input('desc', Product_Description);
            request.input('brand', Brand);
            request.input('product_group', Product_Group);
            request.input('uom', UOM);
            request.input('productId', Product_Id);

            const result = await request.query(updateQuery);

            if (result.rowsAffected[0] && result.rowsAffected[0] > 0) {
                success(res, 'Product updated successfully');
            } else {
                failed(res, 'Failed to update product');
            }
        } catch (e) {
            servError(e, res);
        }
    }

    const updateProductImages = async (req, res) => {
        try {
            await uploadFile(req, res, 0, 'Product_Image');
            const fileName = req?.file?.filename;
            const filePath = req?.file?.path;
            const filetype = req?.file?.mimetype;
            const filesize = req?.file?.size;

            if (!fileName) {
                return invalidInput(res, 'Product Photo is required')
            }

            const { Product_Id } = req.body;

            if (!checkIsNumber(Product_Id)) {
                return invalidInput(res, 'Product_Id is required');
            }

            await deleteCurrentProductImage(Product_Id)

            const updateImageQuery = `
            UPDATE tbl_Product_Master
            SET 
                Product_Image_Name = @img_name,
                Product_Image_Type = @img_type,
                Product_Image_Size = @img_size,
                Product_Image_Path = @img_path
            WHERE Product_Id = @productId`;

            const request = new sql.Request();
            request.input('img_name', fileName);
            request.input('img_type', filetype);
            request.input('img_size', filesize);
            request.input('img_path', filePath);
            request.input('productId', Product_Id);

            const result = await request.query(updateImageQuery);

            if (result.rowsAffected[0] && result.rowsAffected[0] > 0) {
                success(res, 'Product image updated successfully');
            } else {
                failed(res, 'Failed to update product image');
            }
        } catch (e) {
            servError(e, res);
        }
    }


    return {
        getProducts,
        getGroupedProducts,
        getProductGroups,
        getProductPacks,
        postProductsWithImage,
        postProductsWithoutImage,
        updateProduct,
        updateProductImages
    }
}

export default sfProductController();