import sql from 'mssql';
import { checkIsNumber } from '../helper_functions.mjs';

export const getUserType = async (UserId) => {
    if (!checkIsNumber(UserId)) {
        return false;
    }

    try {
        const userTypeDetails = (await new sql.Request()
            .input('UserId', UserId)
            .query(`
            SELECT 
                ut.Id
            FROM 
                tbl_Users AS u,
                tbl_User_Type AS ut
            WHERE 
                u.UserId =  @UserId
                AND
                u.UserTypeId = ut.Id
        `)
        ).recordset;

        if (userTypeDetails.length > 0 && Boolean(Number(userTypeDetails[0].Id))) {
            return Number(userTypeDetails[0].Id);
        } else {
            return false;
        }
    } catch (e) {
        console.error(e);
        return false
    }
}

export const getUserTypeByAuth = async (Auth) => {

    if (!Auth) {
        return false;
    }

    try {
        const userTypeDetails = (
            await new sql.Request()
                .input('Auth', Auth)
                .query(`
                SELECT ut.Id
                FROM 
                    tbl_Users AS u,
                    tbl_User_Type AS ut
                WHERE 
                    u.Autheticate_Id =  @Auth
                    AND
                    u.UserTypeId = ut.Id`
        )).recordset;

        if (userTypeDetails.length > 0 && Boolean(Number(userTypeDetails[0].Id))) {
            return Number(userTypeDetails[0].Id);
        } else {
            return false;
        }
    } catch (e) {
        console.error(e);
        return false
    }
}

export const getCUstomerIdByUserId = async (UserId) => {

    if (!checkIsNumber(UserId)) {
        return false;
    }

    try {
        const CustIdGet = (
            await new sql.Request()
                .input('UserId', UserId)
                .query(`
                SELECT cm.Cust_Id
                FROM 
                    tbl_Users AS u,
                    tbl_Customer_Master AS cm
                WHERE 
                    cm.User_Mgt_Id =  @UserId
                    AND
                    u.UserId = cm.User_Mgt_Id`
        )).recordset;

        if (CustIdGet.length > 0 && Boolean(Number(CustIdGet[0].Cust_Id))) {
            return Number(CustIdGet[0].Cust_Id);
        } else {
            return false;
        }
    } catch (e) {
        console.error(e);
        return false
    }
}

export const getUserIdByAuth = async (Auth) => {
    if (!Auth) {
        return false;
    }

    try {
        const getUserId = (await new sql.Request()
            .input('Auth', Auth)
            .query(`
            SELECT 
                UserId
            FROM 
                tbl_Users
            WHERE 
                Autheticate_Id = @Auth
        `)
        ).recordset;

        if (getUserId.length > 0 && Boolean(Number(getUserId[0].UserId))) {
            return Number(getUserId[0].UserId);
        } else {
            return false;
        }
    } catch (e) {
        console.error(e);
        return false
    }
}