import sql from 'mssql';
import { checkIsNumber, isEqualNumber } from '../helper_functions.mjs';

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

        if (userTypeDetails.length > 0) {
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

        if (getUserId.length > 0) {
            return Number(getUserId[0].UserId);
        } else {
            return false;
        }
    } catch (e) {
        console.error(e);
        return false
    }
}

export const getUserTypeBasedRights = async (usertype) => {

    try {
        const getUserTypeRights = new sql.Request()
            .input('usertype', usertype)
            .query(`
                SELECT 
                    m.*,
                    COALESCE(utr.Read_Rights, 0) AS Read_Rights,
                    COALESCE(utr.Add_Rights, 0) AS Add_Rights,
                    COALESCE(utr.Edit_Rights, 0) AS Edit_Rights,
                    COALESCE(utr.Delete_Rights, 0) AS Delete_Rights,
                    COALESCE(utr.Print_Rights, 0) AS Print_Rights
                FROM 
                    tbl_AppMenu m
                LEFT JOIN 
                    tbl_AppMenu_UserTypeRights utr ON utr.UserTypeId = @usertype AND utr.MenuId = m.id`
            )

        const result = await getUserTypeRights;

        return result.recordset;
    } catch (e) {
        console.error(e);
        return false;
    }
}

export const getUserBasedRights = async (userid) => {
    if (!userid) {
        return false;
    }

    try {
        const getUserRights = new sql.Request()
            .input('userid', userid)
            .query(`
                SELECT 
                    m.*,
                    COALESCE(ur.Read_Rights, 0) AS Read_Rights,
                    COALESCE(ur.Add_Rights, 0) AS Add_Rights,
                    COALESCE(ur.Edit_Rights, 0) AS Edit_Rights,
                    COALESCE(ur.Delete_Rights, 0) AS Delete_Rights,
                    COALESCE(ur.Print_Rights, 0) AS Print_Rights
                FROM 
                    tbl_AppMenu m
                LEFT JOIN 
                    tbl_AppMenu_UserRights ur ON ur.UserId = @userid AND ur.MenuId = m.id`
            )

        const result = await getUserRights;

        return result.recordset;
    } catch (e) {
        console.error(e);
        return false;
    }
}

export const getUserMenuRights = async (Auth) => {
    try {
        const UserTypeId = await getUserTypeByAuth(Auth);

        // for admin and management user have all permissions
        if (isEqualNumber(UserTypeId, 0) || isEqualNumber(UserTypeId, 1)) {
            const request = new sql.Request().query(`
                SELECT 
                	*,
                    1 as Read_Rights,
	                1 as Add_Rights,
	                1 as Edit_Rights,
	                1 as Delete_Rights,
	                1 as Print_Rights
                FROM
                	tbl_AppMenu`
            );

            const result = await request;

            return result.recordset
        } else {
            const UserId = await getUserIdByAuth(Auth);

            const request = new sql.Request()
                .input('userid', UserId)
                .input('usertype', UserTypeId)
                .query(`
                    SELECT 
                        m.*,
                        COALESCE(ur.Read_Rights, utr.Read_Rights, 0) AS Read_Rights,
                        COALESCE(ur.Add_Rights, utr.Add_Rights, 0) AS Add_Rights,
                        COALESCE(ur.Edit_Rights, utr.Edit_Rights, 0) AS Edit_Rights,
                        COALESCE(ur.Delete_Rights, utr.Delete_Rights, 0) AS Delete_Rights,
                        COALESCE(ur.Print_Rights, utr.Print_Rights, 0) AS Print_Rights
                    FROM 
                        tbl_AppMenu m
                    LEFT JOIN 
                        tbl_AppMenu_UserRights ur ON ur.UserId = @userid AND ur.MenuId = m.id
                    LEFT JOIN 
                        tbl_AppMenu_UserTypeRights utr ON utr.UserTypeId = @usertype AND utr.MenuId = m.id`
                );

            const result = await request;
            return result.recordset;
        }
    } catch (e) {
        console.error(e);
        return false;
    }
}