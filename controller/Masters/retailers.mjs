import sql from 'mssql';
import { dataFound, failed, invalidInput, noData, servError, success } from '../../res.mjs'
import uploadFile from '../../middleware/uploadMiddleware.mjs';
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import copyImageMiddleware from '../../middleware/copyMiddleware.mjs';
import getImage from '../../middleware/getImageIfExist.mjs';
import dotenv from 'dotenv';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const RetailerControll = () => {
    const domain = process.env.domain;

    const getSFCustomers = async (req, res) => {
        const { Company_Id } = req.query;

        if (isNaN(Company_Id)) {
            return invalidInput(res, 'Company_Id is required');
        }

        try {
            const getQuery = `
            SELECT 
                rm.*,
                COALESCE(rom.Route_Name, '') AS RouteGet,
                COALESCE(am.Area_Name, '') AS AreaGet,
                COALESCE(sm.State_Name, '') AS StateGet,
                COALESCE(cm.Company_Name, '') AS Company_Name,
                COALESCE(modify.Name, '') AS lastModifiedBy,
                COALESCE(created.Name, '') AS createdBy,

                COALESCE(
                    (
                        SELECT 
                            TOP (1) *
                        FROM 
                            tbl_Retailers_Locations
                        WHERE
                            Retailer_Id = rm.Retailer_Id
                            AND
                            isActiveLocation = 1
                        FOR JSON PATH, WITHOUT_ARRAY_WRAPPER
                    ), '{}'
                ) AS VERIFIED_LOCATION,

                COALESCE((
                    SELECT
                    	TOP (5) 
                        ml.*,

                        COALESCE((
                            SELECT NAME FROM tbl_Users WHERE UserId = ml.EntryBy
                        ), 'unknown') AS EntryByGet

                    FROM
                    	tbl_Retailers_Locations AS ml
                    WHERE
                        rm.Retailer_Id = ml.Retailer_Id
                    ORDER BY
                        CONVERT(DATETIME, EntryAt) DESC
                    FOR JSON PATH
                ), '[]') AS AllLocations
            
            FROM
                tbl_Retailers_Master AS rm
            LEFT JOIN
                tbl_Route_Master AS rom
                ON rom.Route_Id = rm.Route_Id
            LEFT JOIN
                tbl_Area_Master AS am
                ON am.Area_Id = rm.Area_Id
            LEFT JOIN
                tbl_State_Master AS sm
                ON sm.State_Id = rm.State_Id
            LEFT JOIN
                tbl_Company_Master AS cm
                ON cm.Company_id = rm.Company_Id
            LEFT JOIN
                tbl_Users AS modify
                ON modify.UserId = rm.Updated_By
            LEFT JOIN
                tbl_Users AS created
                ON created.UserId = rm.Created_By
            
            WHERE
                rm.Company_Id = @company
            
            ORDER BY 
                rm.Retailer_Name`;

            const request = new sql.Request();
            request.input('company', Company_Id);

            const result = await request.query(getQuery);

            if (result.recordset.length) {
                const parsed = result.recordset.map(o => ({
                    ...o,
                    VERIFIED_LOCATION: JSON.parse(o.VERIFIED_LOCATION),
                    AllLocations: JSON.parse(o.AllLocations),
                    imageUrl: getImage('retailers', o?.ImageName)
                }));
                dataFound(res, parsed)
            } else {
                noData(res)
            }
        } catch (e) {
            servError(e, res)
        }
    }

    const getRetailerDropDown = async (req, res) => {
        const { Company_Id } = req.query;

        if (isNaN(Company_Id)) {
            return invalidInput(res, 'Company_Id is required');
        }

        try {
            const query = `
            SELECT 
                Retailer_Id,
                Retailer_Name
            FROM 
                tbl_Retailers_Master
            WHERE
                Company_Id = @comp`
            const request = new sql.Request();
            request.input('comp', Company_Id);

            const result = await request.query(query);

            if (result.recordset.length > 0) {
                dataFound(res, result.recordset)
            } else {
                noData(res)
            }
        } catch (e) {
            servError(e, res);
        }
    }

    const getAreaRetailers = async (req, res) => {
        const { Company_Id } = req.query;

        if (isNaN(Company_Id)) {
            return invalidInput(res, 'Company_Id is required');
        }

        try {
            const query = `
            SELECT
            	a.Area_Id,
            	a.Area_Name,
            	COALESCE((
            		SELECT 
                        rm.*,
                        COALESCE(rom.Route_Name, '') AS RouteGet,
                        COALESCE(am.Area_Name, '') AS AreaGet,
                        COALESCE(sm.State_Name, '') AS StateGet,
                        COALESCE(cm.Company_Name, '') AS Company_Name,
                        COALESCE(modify.Name, '') AS lastModifiedBy,
                        COALESCE(created.Name, '') AS createdBy,

                        COALESCE(
                            (
                                SELECT 
                                    TOP (1) *
                                FROM 
                                    tbl_Retailers_Locations
                                WHERE
                                    Retailer_Id = rm.Retailer_Id
                                    AND
                                    isActiveLocation = 1
                                FOR JSON PATH, WITHOUT_ARRAY_WRAPPER
                            ), '{}'
                        ) AS VERIFIED_LOCATION
                    
                    FROM
                        tbl_Retailers_Master AS rm
                        LEFT JOIN
                            tbl_Route_Master AS rom
                            ON rom.Route_Id = rm.Route_Id
                        LEFT JOIN
                            tbl_Area_Master AS am
                            ON am.Area_Id = rm.Area_Id
                        LEFT JOIN
                            tbl_State_Master AS sm
                            ON sm.State_Id = rm.State_Id
                        LEFT JOIN
                            tbl_Company_Master AS cm
                            ON cm.Company_id = rm.Company_Id
                        LEFT JOIN
                            tbl_Users AS modify
                            ON modify.UserId = rm.Updated_By
                        LEFT JOIN
                            tbl_Users AS created
                            ON created.UserId = rm.Created_By
            		WHERE
            			rm.Area_Id = a.Area_Id
            			AND
            			rm.Company_Id = @comp
            		FOR JSON PATH
            	), '[]') AS Area_Retailers
            FROM
            	tbl_Area_Master AS a`;

            const request = new sql.Request();
            request.input('comp', Company_Id);

            const result = await request.query(query);

            if (result.recordset.length > 0) {
                const parsed = result.recordset.map(o => ({
                    ...o,
                    Area_Retailers: JSON.parse(o?.Area_Retailers)
                }))

                const withImage = parsed.map(o => ({
                    ...o,
                    Area_Retailers: o?.Area_Retailers?.map(oo => ({
                        ...oo,
                        imageUrl: getImage('retailers', oo?.ImageName)
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

    const postLocationForCustomer = async (req, res) => {
        const { Latitude, Longitude, Retailer_Id, EntryBy } = req.body;

        if (!Latitude || !Longitude || !Retailer_Id || !EntryBy) {
            return invalidInput(res, 'Latitude, Longitude, Retailer_Id, EntryBy is required');
        }

        try {
            const query = `
            INSERT INTO 
                tbl_Retailers_Locations 
                (Retailer_Id, latitude, longitude, isActiveLocation, EntryBy, EntryAt)
            VALUES 
                (@id, @lati, @long, @active, @entry, @at)`;

            const request = new sql.Request();
            request.input('id', Retailer_Id);
            request.input('lati', Latitude);
            request.input('long', Longitude);
            request.input('active', 0);
            request.input('entry', EntryBy);
            request.input('at', new Date());

            const result = await request.query(query);

            if (result.rowsAffected[0] && result.rowsAffected[0] > 0) {
                success(res, 'Location Saved');
            } else {
                failed(res, 'Failed to Saved');
            }
        } catch (e) {
            servError(e, res)
        }
    }

    const verifyLocation = async (req, res) => {
        const { Id } = req.body;

        if (!Id) {
            return invalidInput(res, 'location Id is required')
        }

        try {
            const getRetailer = await new sql.Request()
                .input('Id', Id)
                .query(`
                    SELECT 
                        Retailer_Id 
                    FROM 
                        tbl_Retailers_Locations 
                    WHERE Id = @Id`);

            if (getRetailer.recordset[0]?.Retailer_Id) {
                await new sql.Request()
                    .input('Retailer_Id', getRetailer.recordset[0]?.Retailer_Id)
                    .query(`
                    UPDATE 
                        tbl_Retailers_Locations
                    SET 
                        isActiveLocation = 0
                    WHERE 
                        Retailer_Id = @Retailer_Id
                    `)
            }

            const result = await new sql.Request()
                .input('Id', Id)
                .query(`
                    UPDATE 
                        tbl_Retailers_Locations
                    SET 
                        isActiveLocation = 1
                    WHERE 
                        Id = @Id
                `)

            if (result.rowsAffected[0] && result.rowsAffected[0] > 0) {
                success(res, 'Location Verified');
            } else {
                failed(res, 'Failed Verify Location')
            }

        } catch (e) {
            servError(e, res)
        }
    }

    const addRetailers = async (req, res) => {

        try {

            await uploadFile(req, res, 1, 'Profile_Pic');
            const fileName = req?.file?.filename;
            const filePath = req?.file?.path;
            const filetype = req?.file?.mimetype;
            const filesize = req?.file?.size;

            // if (!fileName) {
            //     return invalidInput(res, 'Retailer Photo is required')
            // }

            const {
                Retailer_Name, Contact_Person, Mobile_No, Retailer_Channel_Id, PinCode,
                Retailer_Class, Route_Id, Area_Id, Reatailer_Address, Reatailer_City,
                State_Id, Branch_Id, Gstno, Latitude, Longitude,
                Created_By, Company_Id
            } = req.body;

            const request = new sql.Request()
                .input('code', 0)
                .input('rname', Retailer_Name)
                .input('cperson', Contact_Person)
                .input('mobile', Mobile_No)
                .input('channel', Retailer_Channel_Id)

                .input('rclass', Retailer_Class)
                .input('route', Route_Id)
                .input('area', Area_Id)
                .input('address', Reatailer_Address)
                .input('city', Reatailer_City)

                .input('pincode', PinCode)
                .input('state', State_Id)
                .input('salesforce', '')
                .input('branch', Branch_Id)
                .input('gst', Gstno)

                .input('erp', 0)
                .input('lati', Latitude ? Latitude : null)
                .input('long', Longitude ? Longitude : null)
                .input('profile', fileName ? domain + '/imageURL/retailers/' + fileName : null)
                .input('created', new Date())

                .input('createdby', Created_By)
                .input('update', new Date())
                .input('updateby', 0)
                .input('dflag', 0)
                .input('filename', fileName ? fileName : null)

                .input('filepath', filePath ? filePath : null)
                .input('filetype', filetype ? filetype : null)
                .input('filesize', filesize ? filesize : null)
                .input('other5', null)
                .input('company', Company_Id)
                .query(`
                    INSERT INTO tbl_Retailers_Master (
                        Retailer_Code, Retailer_Name,  Contact_Person,  Mobile_No,  Retailer_Channel_Id, 
                        Retailer_Class, Route_Id, Area_Id, Reatailer_Address, Reatailer_City,
                        PinCode, State_Id, Sales_Force_Id, Branch_Id, Gstno,
                        ERP_Id, Latitude, Longitude, Profile_Pic, Created_Date,
                        Created_By, Updated_Date, Updated_By, Del_Flag, ImageName,
                        ImagePath, ImageType, ImageSize, Others_5,  Company_Id 
                    ) VALUES (
                        @code, @rname, @cperson, @mobile, @channel, 
                        @rclass, @route, @area, @address, @city, 
                        @pincode, @state, @salesforce, @branch, @gst, 
                        @erp, @lati, @long, @profile, @created, 
                        @createdby, @update, @updateby, @dflag, @filename, 
                        @filepath, @filetype, @filesize, @other5, @company 
                    )
                `)

            const result = await request;

            if (result.rowsAffected[0] && result.rowsAffected[0] > 0) {
                return success(res, 'New Customer Added')
            } else {
                return failed(res, 'Failed to create customer')
            }
        } catch (e) {
            servError(e, res);
        }
    }

    const putRetailers = async (req, res) => {
        try {
            await uploadFile(req, res, 1, 'Profile_Pic');
            const fileName = req?.file?.filename;
            const filePath = req?.file?.path;
            const filetype = req?.file?.mimetype;
            const filesize = req?.file?.size;

            // if (!fileName) {
            //     return invalidInput(res, 'Retailer Photo is required');
            // }

            const {
                Retailer_Id, Retailer_Name, Contact_Person, Mobile_No, Retailer_Channel_Id,
                Retailer_Class, Route_Id, Area_Id, Reatailer_Address, Reatailer_City, PinCode,
                State_Id, Gstno, Updated_By
            } = req.body;

            const updateQuery = `
                UPDATE 
                    tbl_Retailers_Master
                SET
                    Retailer_Name = @rname,
                    Contact_Person = @cperson,
                    Mobile_No = @mobile,
                    Retailer_Channel_Id = @channel,
                    Retailer_Class = @rclass,

                    Route_Id = @route,
                    Area_Id = @area,
                    Reatailer_Address = @address,
                    Reatailer_City = @city,
                    PinCode = @pincode,

                    State_Id = @state,
                    Gstno = @gst,
                    Updated_By = @updatedby,
                    Updated_Date = @updated

                    ${fileName ? ', Profile_Pic = @profile, ImageName = @imagename, ImagePath = @imagepath, ImageType = @imagetype, ImageSize = @imagesize' : ''}
                    
                WHERE Retailer_Id = @id;
            `;

            const request = new sql.Request()
                .input('id', Retailer_Id)
                .input('rname', Retailer_Name)
                .input('cperson', Contact_Person)
                .input('mobile', Mobile_No)
                .input('channel', Retailer_Channel_Id)

                .input('rclass', Retailer_Class)
                .input('route', Route_Id)
                .input('area', Area_Id)
                .input('address', Reatailer_Address)
                .input('city', Reatailer_City)

                .input('pincode', PinCode)
                .input('state', State_Id)
                .input('gst', Gstno)
                .input('updatedby', Updated_By)
                .input('updated', new Date())

                .input('profile', fileName ? domain + '/imageURL/retailers/' + fileName : null)
                .input('imagename', fileName ? fileName : null)
                .input('imagepath', filePath ? filePath : null)
                .input('imagetype', filetype ? filetype : null)
                .input('imagesize', filesize ? filesize : null)

                .query(updateQuery)

            const result = await request;

            if (result.rowsAffected[0] && result.rowsAffected[0] > 0) {
                return success(res, 'Retailer information updated successfully');
            } else {
                return failed(res, 'Failed to update retailer information');
            }
        } catch (e) {
            servError(e, res);
        }
    }

    const getRetailerInfo = async (req, res) => {
        const { Retailer_Id } = req.query;

        if (isNaN(Retailer_Id)) {
            return invalidInput(res, 'Retailer_Id is required')
        }

        try {
            const query = `
            SELECT 
                rm.*,
                COALESCE(rom.Route_Name, '') AS RouteGet,
                COALESCE(am.Area_Name, '') AS AreaGet,
                COALESCE(sm.State_Name, '') AS StateGet,
                COALESCE(cm.Company_Name, '') AS Company_Name,
                COALESCE(modify.Name, '') AS lastModifiedBy,
                COALESCE(created.Name, '') AS createdBy,

                COALESCE(
                    (
                        SELECT 
                            TOP (1) *
                        FROM 
                            tbl_Retailers_Locations
                        WHERE
                            Retailer_Id = rm.Retailer_Id
                            AND
                            isActiveLocation = 1
                        FOR JSON PATH, WITHOUT_ARRAY_WRAPPER
                    ), '{}'
                ) AS VERIFIED_LOCATION
            
            FROM
                tbl_Retailers_Master AS rm
            
            LEFT JOIN
                tbl_Route_Master AS rom
                ON rom.Route_Id = rm.Route_Id
            LEFT JOIN
                tbl_Area_Master AS am
                ON am.Area_Id = rm.Area_Id
            LEFT JOIN
                tbl_State_Master AS sm
                ON sm.State_Id = rm.State_Id
            LEFT JOIN
                tbl_Company_Master AS cm
                ON cm.Company_id = rm.Company_Id
            LEFT JOIN
                tbl_Users AS modify
                ON modify.UserId = rm.Updated_By
            LEFT JOIN
                tbl_Users AS created
                ON created.UserId = rm.Created_By
            
            WHERE
            	rm.Retailer_Id = @retail
            `;

            const request = new sql.Request();
            request.input('retail', Retailer_Id);

            const result = await request.query(query);

            if (result.recordset.length > 0) {
                const withImage = result.recordset.map(o => ({
                    ...o,
                    VERIFIED_LOCATION: JSON.parse(o.VERIFIED_LOCATION),
                    imageUrl: getImage('retailers', o?.ImageName)
                }));

                dataFound(res, withImage);
            } else {
                noData(res)
            }
        } catch (e) {
            servError(e, res);
        }
    }

    const getRetailerInfoWithClosingStock = async (req, res) => {
        const { Retailer_Id, Fromdate, Todate } = req.query;

        if (isNaN(Retailer_Id)) {
            return invalidInput(res, 'Retailer_Id is required')
        }

        try {
            const query = `
            SELECT 
                rm.*,
                COALESCE(rom.Route_Name, '') AS RouteGet,
                COALESCE(am.Area_Name, '') AS AreaGet,
                COALESCE(sm.State_Name, '') AS StateGet,
                COALESCE(cm.Company_Name, '') AS Company_Name,
                COALESCE(modify.Name, '') AS lastModifiedBy,
                COALESCE(created.Name, '') AS createdBy,

                COALESCE(
                    (
                        SELECT 
                            TOP (1) *
                        FROM 
                            tbl_Retailers_Locations
                        WHERE
                            Retailer_Id = rm.Retailer_Id
                            AND
                            isActiveLocation = 1
                        FOR JSON PATH, WITHOUT_ARRAY_WRAPPER
                    ), '{}'
                ) AS VERIFIED_LOCATION,
            
            	COALESCE((
            		SELECT 
            			csgi.*,
            			COALESCE((
                            SELECT
                                csi.*,
                                COALESCE((SELECT Product_Name FROM tbl_Product_Master WHERE Product_Id = csi.Item_Id), 'unknown') AS ProductName
                            FROM
                                tbl_Closing_Stock_Info AS csi
                            WHERE
                                csi.St_Id = csgi.ST_Id
                            FOR JSON PATH
                         ), '[]') AS ProductCount,
            			COALESCE((
            				SELECT Name FROM tbl_Users WHERE UserId = csgi.Created_by
            			), 'unknown') AS CreatedByGet
            		FROM
            			tbl_Closing_Stock_Gen_Info AS csgi
            		WHERE 
            			csgi.Retailer_Id = rm.Retailer_Id
                        AND
                        CONVERT(DATE, csgi.ST_Date) >= CONVERT(DATE, @from)
                        AND
                        CONVERT(DATE, csgi.ST_Date) <= CONVERT(DATE, @to)
                    ORDER BY
                        CONVERT(DATETIME, csgi.Created_on_date) DESC
            		FOR JSON PATH
            	), '[]') AS ClosingStocks
            
            FROM
                tbl_Retailers_Master AS rm
            
            LEFT JOIN
                tbl_Route_Master AS rom
                ON rom.Route_Id = rm.Route_Id
            LEFT JOIN
                tbl_Area_Master AS am
                ON am.Area_Id = rm.Area_Id
            LEFT JOIN
                tbl_State_Master AS sm
                ON sm.State_Id = rm.State_Id
            LEFT JOIN
                tbl_Company_Master AS cm
                ON cm.Company_id = rm.Company_Id
            LEFT JOIN
                tbl_Users AS modify
                ON modify.UserId = rm.Updated_By
            LEFT JOIN
                tbl_Users AS created
                ON created.UserId = rm.Created_By
            
            WHERE
            	rm.Retailer_Id = @retail
            `;

            const request = new sql.Request();
            request.input('retail', Retailer_Id);
            request.input('from', Fromdate || new Date());
            request.input('to', Todate || new Date());

            const result = await request.query(query);

            if (result.recordset.length > 0) {
                const withImage = result.recordset.map(o => ({
                    ...o,
                    VERIFIED_LOCATION: JSON.parse(o.VERIFIED_LOCATION),
                    imageUrl: getImage('retailers', o?.ImageName)
                }));

                const parsed = withImage.map(o => ({
                    ...o,
                    ClosingStocks: JSON.parse(o?.ClosingStocks)
                }))

                const parsed2 = parsed.map(o => ({
                    ...o,
                    ClosingStocks: o?.ClosingStocks?.map(oo => ({
                        ...oo,
                        ProductCount: JSON.parse(oo?.ProductCount)
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

    const convertVisitLogToRetailer = async (req, res) => {

        try {
            const {
                Retailer_Name, Contact_Person, Mobile_No, Retailer_Channel_Id, PinCode,
                Retailer_Class, Route_Id, Area_Id, Reatailer_Address, Reatailer_City,
                State_Id, Branch_Id, Gstno, Latitude, Longitude,
                Created_By, Company_Id, fileName, fileType, fileSize, visitLogID
            } = req.body;

            const sourcearea = path.join(__dirname, '..', '..', 'uploads', 'visitLogs');
            const destination = path.join(__dirname, '..', '..', 'uploads', 'retailers');

            const copyedFileName = fileName ? (await copyImageMiddleware(sourcearea, destination, fileName)) : null;

            const request = new sql.Request()
                .input('code', 0)
                .input('rname', Retailer_Name)
                .input('cperson', Contact_Person)
                .input('mobile', Mobile_No)
                .input('channel', Retailer_Channel_Id)

                .input('rclass', Retailer_Class)
                .input('route', Route_Id)
                .input('area', Area_Id)
                .input('address', Reatailer_Address)
                .input('city', Reatailer_City)

                .input('pincode', PinCode)
                .input('state', State_Id)
                .input('salesforce', '')
                .input('branch', Branch_Id)
                .input('gst', Gstno)

                .input('erp', 0)
                .input('lati', Latitude ? Latitude : null)
                .input('long', Longitude ? Longitude : null)
                .input('profile', fileName ? domain + '/imageURL/retailers/' + fileName : null)
                .input('created', new Date())

                .input('createdby', Created_By)
                .input('update', new Date())
                .input('updateby', 0)
                .input('dflag', 0)
                .input('filename', fileName ? fileName : null)

                .input('filepath', copyedFileName ? copyedFileName : null)
                .input('filetype', fileType ? fileType : null)
                .input('filesize', fileSize ? fileSize : null)
                .input('company', Company_Id)
                .query(`
                    INSERT INTO tbl_Retailers_Master (
                        Retailer_Code, Retailer_Name, Contact_Person, Mobile_No, Retailer_Channel_Id, 
                        Retailer_Class, Route_Id, Area_Id, Reatailer_Address, Reatailer_City,
                        PinCode, State_Id, Sales_Force_Id, Branch_Id, Gstno,
                        ERP_Id, Latitude, Longitude, Profile_Pic, Created_Date,
                        Created_By, Updated_Date, Updated_By, Del_Flag, ImageName,
                        ImagePath, ImageType, ImageSize, Company_Id 
                    ) VALUES (
                        @code, @rname, @cperson, @mobile, @channel, 
                        @rclass, @route, @area, @address, @city, 
                        @pincode, @state, @salesforce, @branch, @gst, 
                        @erp, @lati, @long, @profile, @created, 
                        @createdby, @update, @updateby, @dflag, @filename, 
                        @filepath, @filetype, @filesize, @company 
                    );

                    SELECT SCOPE_IDENTITY() AS Retailer_Id
                `)

            const result = await request;

            if (result.rowsAffected[0] && result.rowsAffected[0] > 0) {

                await new sql.Request()
                    .input('Retailer_Id', result.recordset[0]?.Retailer_Id)
                    .input('visitLogID', visitLogID)
                    .query(`
                    UPDATE 
                        tbl_Daily_Call_Log 
                    SET 
                        IsExistingRetailer = 1, 
                        Retailer_Id = @Retailer_Id 
                    WHERE 
                        Id = @visitLogID`
                )

                return success(res, 'New Customer Added');
            } else {
                return failed(res, 'Failed to create customer')
            }
        } catch (e) {
            servError(e, res);
        }
    }

    return {
        getSFCustomers,
        getRetailerDropDown,
        getAreaRetailers,
        postLocationForCustomer,
        verifyLocation,
        addRetailers,
        putRetailers,
        getRetailerInfo,
        getRetailerInfoWithClosingStock,
        convertVisitLogToRetailer,
    }
}


export default RetailerControll()