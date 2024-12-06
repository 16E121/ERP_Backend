import sql from 'mssql'
import { servError, dataFound, noData, success, failed, invalidInput } from '../../res.mjs';
import { checkIsNumber } from '../../helper_functions.mjs';

const CostCenter = () => {

    const getCostCenter = async (req, res) => {
        try {
            const result = await sql.query(`
                SELECT 
                    c.*,
                    COALESCE((
                        SELECT UserType FROM tbl_User_Type WHERE Id = c.User_Type
                    ), 'Not found') AS UserTypeGet,
                    COALESCE((
                        SELECT Name FROM tbl_Users WHERE UserId = c.User_Id 
                    ), 'Not found') AS UserGet
                FROM tbl_ERP_Cost_Center AS c
            `);

            if (result.recordset.length > 0) {
                dataFound(res, result.recordset);
            } else {
                noData(res)
            }
        } catch (e) {
            servError(e, res);
        }
    }

    const createCostCenter = async (req, res) => {
        const { Cost_Center_Name, User_Type } = req.body;

        if (!Cost_Center_Name || !User_Type) {
            return invalidInput(res, 'Cost_Center_Name, User_Type is required');
        }

        try {
            const request = new sql.Request()
                .input('Cost_Center_Name', Cost_Center_Name)
                .input('User_Type', User_Type)
                .input('Is_Converted_To_User', 0)
                .query(`
                    INSERT INTO tbl_ERP_Cost_Center (
                        Cost_Center_Name, User_Type, Is_Converted_To_User
                    ) VALUES (
                        @Cost_Center_Name, @User_Type, @Is_Converted_To_User
                    )
                    `);

            const result = await request;

            if (result.rowsAffected[0] > 0) {
                success(res, 'New Record Created');
            } else {
                failed(res, 'Failed to create')
            }
        } catch (e) {
            servError(e, res);
        }
    }

    const updateCostCenter = async (req, res) => {
        const { Cost_Center_Id,  Cost_Center_Name, User_Type } = req.body;

        if (!checkIsNumber(Cost_Center_Id) || !Cost_Center_Name || !User_Type) {
            return invalidInput(res, 'Cost_Center_Name, User_Type is required');
        }

        try {
            const request = new sql.Request()
                .input('Cost_Center_Id', Cost_Center_Id)
                .input('Cost_Center_Name', Cost_Center_Name)
                .input('User_Type', User_Type)
                .input('Is_Converted_To_User', 0)
                .query(`
                    UPDATE tbl_ERP_Cost_Center
                    SET
                        Cost_Center_Name = @Cost_Center_Name,
                        User_Type = @User_Type
                    WHERE
                        Cost_Center_Id = @Cost_Center_Id;
                    `);

            const result = await request;

            if (result.rowsAffected[0] > 0) {
                success(res, 'Changes Saved');
            } else {
                failed(res, 'Failed to save changes')
            }
        } catch (e) {
            servError(e, res);
        }
    }

    return {
        getCostCenter,
        createCostCenter,
        updateCostCenter,
    }
}


export default CostCenter()