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