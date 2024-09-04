import sql from 'mssql';
import { dataFound, failed, invalidInput, noData, servError, success } from '../../res.mjs';
import { checkIsNumber } from '../../helper_functions.mjs';


const appMenu = () => {

    const getMenu = async (req, res) => {
        const { Auth } = req.query;

        if (!Auth) {
            return res.status(400).json({ MainMenu: [], SubMenu: [], message: 'Invalid Auth', success: false });
        }

        try {
            const request = new sql.Request();
            request.input('Autheticate_Id', Auth)

            const result = await request.execute('User_Rights_Side');
            if (result.recordsets.length > 0) {
                return res.status(200).json({ MainMenu: result.recordsets[0], SubMenu: result.recordsets[1], message: 'no Data', success: true });
            } else {
                return res.status(400).json({ MainMenu: [], SubMenu: [], message: 'no Data', success: true });
            }
        } catch (e) {
            console.log(e)
            return res.status(500).json({ MainMenu: [], SubMenu: [], message: 'Server Error', success: false });
        }
    }

    const getUserRights = async (req, res) => {
        const { Auth } = req.query;

        if (!Auth) {
            return res.status(400).json({ MainMenu: [], SubMenu: [], message: 'Invalid Auth', success: false });
        }

        try {
            const request = new sql.Request();
            request.input('Autheticate_Id', Auth)

            const result = await request.execute('User_Rights_Online');
            if (result.recordsets.length > 0) {
                return res.status(200).json({ MainMenu: result.recordsets[0], SubMenu: result.recordsets[1], message: 'no Data', success: true });
            } else {
                return res.status(400).json({ MainMenu: [], SubMenu: [], message: 'no Data', success: true });
            }
        } catch (e) {
            console.log(e)
            return res.status(500).json({ MainMenu: [], SubMenu: [], message: 'Server Error', success: false });
        }
    }

    const modifyUserRights = async (req, res) => {
        const { MenuId, MenuType, User, ReadRights, AddRights, EditRights, DeleteRights, PrintRights } = req.body;

        try {
            const transaction = new sql.Transaction();

            await transaction.begin();

            try {
                const deleteQuery = `DELETE FROM tbl_User_Rights WHERE User_Id = @UserId AND Menu_Id = @MenuId AND Menu_Type = @MenuType`;
                await transaction.request()
                    .input('UserId', User)
                    .input('MenuId', MenuId)
                    .input('MenuType', MenuType)
                    .query(deleteQuery);

                const insertQuery = `
                    INSERT INTO tbl_User_Rights 
                        (User_Id, Menu_Id, Menu_Type, Read_Rights, Add_Rights, Edit_Rights, Delete_Rights, Print_Rights) 
                    VALUES 
                        (@UserId, @MenuId, @MenuType, @ReadRights, @AddRights, @EditRights, @DeleteRights, @PrintRights)`;
                const result = await transaction.request()
                    .input('UserId', User)
                    .input('MenuId', MenuId)
                    .input('MenuType', MenuType)
                    .input('ReadRights', ReadRights)
                    .input('AddRights', AddRights)
                    .input('EditRights', EditRights)
                    .input('DeleteRights', DeleteRights)
                    .input('PrintRights', PrintRights)
                    .query(insertQuery);

                if (result.rowsAffected[0] > 0) {
                    await transaction.commit();
                    return success(res, 'Changes saved successfully.');
                } else {
                    await transaction.rollback();
                    return failed(res, 'Failed to save changes.');
                }
            } catch (er) {
                await transaction.rollback();
                return servError(er, res)
            }
        } catch (e) {
            return servError(e, res)
        }
    }

    const getUserTypeRights = async (req, res) => {
        const { UserType } = req.query;

        if (!UserType) {
            return res.status(400).json({ MainMenu: [], SubMenu: [], message: 'Invalid UserType', success: false });
        }

        try {
            const request = new sql.Request();
            request.input('UserTypeId', UserType)

            const result = await request.execute('User_Rights_By_User_Type');
            if (result.recordsets.length > 0) {
                return res.status(200).json({ MainMenu: result.recordsets[0], SubMenu: result.recordsets[1], message: 'no Data', success: true });
            } else {
                return res.status(400).json({ MainMenu: [], SubMenu: [], message: 'no Data', success: true });
            }
        } catch (e) {
            return res.status(500).json({ MainMenu: [], SubMenu: [], message: 'Server Error', success: false });
        }
    }

    const modifyUserTypeRights = async (req, res) => {
        const { MenuId, MenuType, UserType, ReadRights, AddRights, EditRights, DeleteRights, PrintRights } = req.body;

        try {
            const transaction = new sql.Transaction();

            await transaction.begin();

            try {
                const deleteQuery = `DELETE FROM tbl_User_Type_Rights WHERE User_Type_Id = @UserTypeId AND Menu_Id = @MenuId AND Menu_Type = @MenuType`;
                await transaction.request()
                    .input('UserTypeId', UserType)
                    .input('MenuId', MenuId)
                    .input('MenuType', MenuType)
                    .query(deleteQuery);

                const insertQuery = `
                    INSERT INTO tbl_User_Type_Rights 
                        (User_Type_Id, Menu_Id, Menu_Type, Read_Rights, Add_Rights, Edit_Rights, Delete_Rights, Print_Rights) 
                    VALUES 
                        (@UserTypeId, @MenuId, @MenuType, @ReadRights, @AddRights, @EditRights, @DeleteRights, @PrintRights)`;
                const result = await transaction.request()
                    .input('UserTypeId', UserType)
                    .input('MenuId', MenuId)
                    .input('MenuType', MenuType)
                    .input('ReadRights', ReadRights)
                    .input('AddRights', AddRights)
                    .input('EditRights', EditRights)
                    .input('DeleteRights', DeleteRights)
                    .input('PrintRights', PrintRights)
                    .query(insertQuery);

                if (result.rowsAffected[0] > 0) {
                    await transaction.commit();
                    return success(res, 'Changes saved.')
                } else {
                    await transaction.rollback();
                    return failed(res, 'Failed to save changes');
                }
            } catch (er) {
                await transaction.rollback();
                return servError(er, res)
            }
        } catch (e) {
            return servError(e, res)
        }
    }

    const menuMaster = async (req, res) => {

        try {
            const getAppMenuData = (await new sql.Request()
                .query(`
                    WITH SubMenuData AS (
                        SELECT * FROM tbl_Sub_Menu WHERE Active = 1
                    )
                    SELECT 
                        m.*,
                        COALESCE((
                            SELECT 
                                s.*
                            FROM
                                SubMenuData AS s
                            WHERE
                                s.MenuId = m.Id
                            FOR JSON PATH
                        ), '[]') AS SubMenu
                    FROM 
                        tbl_Master_Menu AS m
            `)).recordset;

            // WHERE 
            // m.Active = 1

            if (getAppMenuData.length > 0) {
                dataFound(res, getAppMenuData.map(o => ({...o, SubMenu: JSON.parse(o.SubMenu)})));
            } else {
                noData(res);
            }

        } catch (e) {
            servError(e, res);
        }
    }

    const createMenu = async (req, res) => {
        const { MenuName, PageUrl, ParentId, OrderNo } = req.body;

        if (!MenuName || (checkIsNumber(ParentId) && !PageUrl)) {
            return invalidInput(res, 'MenuName is required, PageUrl is optional');
        }

        try {
            let query;
            if (checkIsNumber(ParentId)) {
                query = `   INSERT INTO tbl_Sub_Menu (
                                MenuId, SubMenuName, PageUrl, Active
                            ) VALUES (
                                @ParentId, @MenuName, @PageUrl, 1
                            )`;
            } else {
                query = `   INSERT INTO tbl_Master_Menu (
                                MenuName, PageUrl, OrderNo, Active, APP_Type 
                            ) VALUES (
                                @MenuName, @PageUrl, @OrderNo, 1, 2
                            )`;
            }
            const request = new sql.Request()
                .input('MenuName', MenuName)
                .input('PageUrl', PageUrl)
                .input('ParentId', ParentId)
                .input('OrderNo', OrderNo)
                .query(query);

            const result = await request;

            if (result.rowsAffected[0] > 0) {
                success(res, 'Menu Created')
            } else {
                failed(res, 'Failed to create Menu')
            }
        } catch (e) {
            servError(e, res);
        }
    }

    const updateMenu = async (req, res) => {
        const { Id, MenuName, PageUrl, ParentId, OrderNo, isActive } = req.body;

        if (!checkIsNumber(Id) || !MenuName || (checkIsNumber(ParentId) && !PageUrl)) {
            return invalidInput(res, 'MenuName, PageUrl is required');
        }

        try {
            let query;

            if (checkIsNumber(ParentId)) {
                query = `
                UPDATE tbl_Sub_Menu 
                SET 
                    SubMenuName = @MenuName,
                    PageUrl = @PageUrl,
                    MenuId = @ParentId,
                    Active = @Active
                WHERE
                    Id = @Id`
            } else {
                query = `   
                UPDATE tbl_Master_Menu
                SET
                    MenuName = @MenuName,
                    PageUrl = @PageUrl,
                    Active = @Active,
                    OrderNo = @OrderNo
                WHERE
                    Id = @Id`
            }

            const request = new sql.Request()
                .input('MenuName', MenuName)
                .input('ParentId', ParentId)
                .input('PageUrl', PageUrl)
                .input('OrderNo', OrderNo)
                .input('Active', Boolean(isActive) ? 1 : 0)
                .input('Id', Id)
                .query(query)

            const result = await request;

            if (result.rowsAffected[0] > 0) {
                success(res, 'Changes saved')
            } else {
                failed(res, 'Failed to save')
            }
        } catch (e) {
            servError(e, res);
        }
    }

    return {
        getMenu,
        getUserRights,
        modifyUserRights,
        getUserTypeRights,
        modifyUserTypeRights,
        menuMaster,
        createMenu,
        updateMenu
    }
}

export default appMenu();