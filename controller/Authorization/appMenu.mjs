import sql from 'mssql';
import { dataFound, failed, invalidInput, noData, servError, success } from '../../res.mjs';
import { checkIsNumber, isEqualNumber } from '../../helper_functions.mjs';
import { getUserBasedRights, getUserIdByAuth, getUserMenuRights, getUserTypeBasedRights, getUserTypeByAuth } from '../../middleware/miniAPIs.mjs';


const buildRoutesTree = (routes, parentId = null) => {
    return routes
        .filter(route => route.parent_id === parentId)
        .map(route => ({
            ...route,
            SubRoutes: buildRoutesTree(routes, route.id)
        }));
};

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

    // const getUserRights = async (req, res) => {
    //     const { Auth } = req.query;

    //     if (!Auth) {
    //         return res.status(400).json({ MainMenu: [], SubMenu: [], message: 'Invalid Auth', success: false });
    //     }

    //     try {
    //         const request = new sql.Request();
    //         request.input('Autheticate_Id', Auth)

    //         const result = await request.execute('User_Rights_Online');
    //         if (result.recordsets.length > 0) {
    //             return res.status(200).json({ MainMenu: result.recordsets[0], SubMenu: result.recordsets[1], message: 'no Data', success: true });
    //         } else {
    //             return res.status(400).json({ MainMenu: [], SubMenu: [], message: 'no Data', success: true });
    //         }
    //     } catch (e) {
    //         console.log(e)
    //         return res.status(500).json({ MainMenu: [], SubMenu: [], message: 'Server Error', success: false });
    //     }
    // }

    // const modifyUserRights = async (req, res) => {
    //     const { MenuId, MenuType, User, ReadRights, AddRights, EditRights, DeleteRights, PrintRights } = req.body;

    //     try {
    //         const transaction = new sql.Transaction();

    //         await transaction.begin();

    //         try {
    //             const deleteQuery = `DELETE FROM tbl_User_Rights WHERE User_Id = @UserId AND Menu_Id = @MenuId AND Menu_Type = @MenuType`;
    //             await transaction.request()
    //                 .input('UserId', User)
    //                 .input('MenuId', MenuId)
    //                 .input('MenuType', MenuType)
    //                 .query(deleteQuery);

    //             const insertQuery = `
    //                 INSERT INTO tbl_User_Rights 
    //                     (User_Id, Menu_Id, Menu_Type, Read_Rights, Add_Rights, Edit_Rights, Delete_Rights, Print_Rights) 
    //                 VALUES 
    //                     (@UserId, @MenuId, @MenuType, @ReadRights, @AddRights, @EditRights, @DeleteRights, @PrintRights)`;
    //             const result = await transaction.request()
    //                 .input('UserId', User)
    //                 .input('MenuId', MenuId)
    //                 .input('MenuType', MenuType)
    //                 .input('ReadRights', ReadRights)
    //                 .input('AddRights', AddRights)
    //                 .input('EditRights', EditRights)
    //                 .input('DeleteRights', DeleteRights)
    //                 .input('PrintRights', PrintRights)
    //                 .query(insertQuery);

    //             if (result.rowsAffected[0] > 0) {
    //                 await transaction.commit();
    //                 return success(res, 'Changes saved successfully.');
    //             } else {
    //                 await transaction.rollback();
    //                 return failed(res, 'Failed to save changes.');
    //             }
    //         } catch (er) {
    //             await transaction.rollback();
    //             return servError(er, res)
    //         }
    //     } catch (e) {
    //         return servError(e, res)
    //     }
    // }

    // const getUserTypeRights = async (req, res) => {
    //     const { UserType } = req.query;

    //     if (!UserType) {
    //         return res.status(400).json({ MainMenu: [], SubMenu: [], message: 'Invalid UserType', success: false });
    //     }

    //     try {
    //         const request = new sql.Request();
    //         request.input('UserTypeId', UserType)

    //         const result = await request.execute('User_Rights_By_User_Type');
    //         if (result.recordsets.length > 0) {
    //             return res.status(200).json({ MainMenu: result.recordsets[0], SubMenu: result.recordsets[1], message: 'no Data', success: true });
    //         } else {
    //             return res.status(400).json({ MainMenu: [], SubMenu: [], message: 'no Data', success: true });
    //         }
    //     } catch (e) {
    //         return res.status(500).json({ MainMenu: [], SubMenu: [], message: 'Server Error', success: false });
    //     }
    // }

    // const modifyUserTypeRights = async (req, res) => {
    //     const { MenuId, MenuType, UserType, ReadRights, AddRights, EditRights, DeleteRights, PrintRights } = req.body;

    //     try {
    //         const transaction = new sql.Transaction();

    //         await transaction.begin();

    //         try {
    //             const deleteQuery = `DELETE FROM tbl_User_Type_Rights WHERE User_Type_Id = @UserTypeId AND Menu_Id = @MenuId AND Menu_Type = @MenuType`;
    //             await transaction.request()
    //                 .input('UserTypeId', UserType)
    //                 .input('MenuId', MenuId)
    //                 .input('MenuType', MenuType)
    //                 .query(deleteQuery);

    //             const insertQuery = `
    //                 INSERT INTO tbl_User_Type_Rights 
    //                     (User_Type_Id, Menu_Id, Menu_Type, Read_Rights, Add_Rights, Edit_Rights, Delete_Rights, Print_Rights) 
    //                 VALUES 
    //                     (@UserTypeId, @MenuId, @MenuType, @ReadRights, @AddRights, @EditRights, @DeleteRights, @PrintRights)`;
    //             const result = await transaction.request()
    //                 .input('UserTypeId', UserType)
    //                 .input('MenuId', MenuId)
    //                 .input('MenuType', MenuType)
    //                 .input('ReadRights', ReadRights)
    //                 .input('AddRights', AddRights)
    //                 .input('EditRights', EditRights)
    //                 .input('DeleteRights', DeleteRights)
    //                 .input('PrintRights', PrintRights)
    //                 .query(insertQuery);

    //             if (result.rowsAffected[0] > 0) {
    //                 await transaction.commit();
    //                 return success(res, 'Changes saved.')
    //             } else {
    //                 await transaction.rollback();
    //                 return failed(res, 'Failed to save changes');
    //             }
    //         } catch (er) {
    //             await transaction.rollback();
    //             return servError(er, res)
    //         }
    //     } catch (e) {
    //         return servError(e, res)
    //     }
    // }

    const menuMaster = async (req, res) => {

        try {
            const getAppMenuData = (await new sql.Request()
                .query(`
                    WITH SubMenuData AS (
                        SELECT * FROM tbl_Sub_Menu WHERE Id <> 60
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
                dataFound(res, getAppMenuData.map(o => ({ ...o, SubMenu: JSON.parse(o.SubMenu) })));
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
                // if (Number(Id) === 8) {
                //     return failed(res, 'You Cannot Update Authorization Menu');
                // }
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

    // const getSubRoutes = (menuArray, subRouteArray) => {
    //     for (let subRoute = 0; subRoute < subRouteArray.length; subRoute++) {

    //         for (let MainMenu = 0; MainMenu < menuArray.length; MainMenu++) {

    //             if (isEqualNumber(menuArray[MainMenu].id, subRouteArray[subRoute].parent_id)) {
    //                 menuArray[MainMenu] = {
    //                     ...menuArray[MainMenu],
    //                     SubRoute: menuArray[MainMenu].SubRouting.push(subRouteArray[subRoute])
    //                 } 
    //             }

    //             // for (let oo of o.SubMenu || []) {
    //             //     if (isEqualNumber(oo.Read_Rights, 1) && oo.url !== '') {
    //             //         navigateToPage(oo);
    //             //         return true;
    //             //     }

    //             //     for (let ooo of oo.ChildMenu || []) {
    //             //         if (isEqualNumber(ooo.Read_Rights, 1) && ooo.url !== '') {
    //             //             navigateToPage(ooo);
    //             //             return true;
    //             //         }
    //             //     }
    //             // }
    //         }
    //         return false;
    //     }
    // }

    const newAppMenu = async (req, res) => {
        const Auth = req.header('Authorization');

        try {
            const userRights = await getUserMenuRights(Auth);

            if (Array.isArray(userRights)) {
                const mainMenu = userRights.filter(menu => isEqualNumber(menu.menu_type, 1)).sort((a, b) => a.display_order - b.display_order);
                const subMenu = userRights.filter(menu => isEqualNumber(menu.menu_type, 2)).sort((a, b) => a.display_order - b.display_order);
                const childMenu = userRights.filter(menu => isEqualNumber(menu.menu_type, 3)).sort((a, b) => a.display_order - b.display_order);

                const subRoutings = userRights
                    .filter(menu => isEqualNumber(menu.menu_type, 0))
                    .sort((a, b) => a.parent_id - b.parent_id);

                const nestedRoutes = buildRoutesTree(subRoutings);

                const menuStrucre = mainMenu.map(main => ({
                    ...main,
                    SubMenu: subMenu.filter(sub => isEqualNumber(sub.parent_id, main.id)).map(sub => ({
                        ...sub,
                        ChildMenu: childMenu.filter(child => isEqualNumber(child.parent_id, sub.id)).map(child => ({
                            ...child,
                            SubRoutes: buildRoutesTree(subRoutings, child.id)
                        })),
                        SubRoutes: buildRoutesTree(subRoutings, sub.id)
                    })),
                    SubRoutes: buildRoutesTree(subRoutings, main.id)
                }));

                dataFound(res, menuStrucre, 'data Found', { subRoutings, nestedRoutes })
            } else {
                failed(res);
            }
        } catch (e) {
            servError(e, res);
        }
    }

    const getNewUserBasedRights = async (req, res) => {
        const Auth = req.header('Authorization');

        try {
            const userid = await getUserIdByAuth(Auth);
            const result = await getUserBasedRights(userid);

            if (Array.isArray(result)) {
                const mainMenu = result.filter(menu => isEqualNumber(menu.menu_type, 1)).sort((a, b) => a.display_order - b.display_order);
                const subMenu = result.filter(menu => isEqualNumber(menu.menu_type, 2)).sort((a, b) => a.display_order - b.display_order);
                const childMenu = result.filter(menu => isEqualNumber(menu.menu_type, 3)).sort((a, b) => a.display_order - b.display_order);
                const subRoutings = result
                    .filter(menu => isEqualNumber(menu.menu_type, 0))
                    .sort((a, b) => a.parent_id - b.parent_id);

                const nestedRoutes = buildRoutesTree(subRoutings);

                const menuStrucre = mainMenu.map(main => ({
                    ...main,
                    SubMenu: subMenu.filter(sub => isEqualNumber(sub.parent_id, main.id)).map(sub => ({
                        ...sub,
                        ChildMenu: childMenu.filter(child => isEqualNumber(child.parent_id, sub.id)).map(child => ({
                            ...child,
                            SubRoutes: buildRoutesTree(subRoutings, child.id)
                        })),
                        SubRoutes: buildRoutesTree(subRoutings, sub.id)
                    })),
                    SubRoutes: buildRoutesTree(subRoutings, main.id)
                }));

                dataFound(res, menuStrucre, 'data Found', { subRoutings, nestedRoutes })
            } else {
                failed(res);
            }
        } catch (e) {
            console.log(e)
            servError(e, res)
        }
    }

    const newModifyUserRights = async (req, res) => {
        const { MenuId, User, ReadRights, AddRights, EditRights, DeleteRights, PrintRights } = req.body;

        const transaction = new sql.Transaction();

        try {
            await transaction.begin();
            await new sql.Request(transaction)
                .input('UserId', User)
                .input('MenuId', MenuId)
                .query(`DELETE FROM tbl_AppMenu_UserRights WHERE UserId = @UserId AND MenuId = @MenuId`);

            const result = await new sql.Request(transaction)
                .input('UserId', User)
                .input('MenuId', MenuId)
                .input('ReadRights', ReadRights)
                .input('AddRights', AddRights)
                .input('EditRights', EditRights)
                .input('DeleteRights', DeleteRights)
                .input('PrintRights', PrintRights)
                .query(`
                    INSERT INTO tbl_AppMenu_UserRights 
                        (UserId, MenuId, Read_Rights, Add_Rights, Edit_Rights, Delete_Rights, Print_Rights) 
                    VALUES 
                        (@UserId, @MenuId, @ReadRights, @AddRights, @EditRights, @DeleteRights, @PrintRights)`
                );

            if (result.rowsAffected[0] > 0) {
                await transaction.commit();
                return success(res, 'Changes saved successfully.');
            } else {
                throw new Error('Failed to save changes.')
            }
        } catch (e) {
            await transaction.rollback();
            return servError(e, res)
        }
    }

    const getNewUserTypeBasedRights = async (req, res) => {
        const { UserType } = req.query;

        if (!UserType) {
            return invalidInput(res, 'UserType is required');
        }

        try {
            const result = await getUserTypeBasedRights(UserType);

            if (Array.isArray(result)) {
                const mainMenu = result.filter(menu => isEqualNumber(menu.menu_type, 1)).sort((a, b) => a.display_order - b.display_order);
                const subMenu = result.filter(menu => isEqualNumber(menu.menu_type, 2)).sort((a, b) => a.display_order - b.display_order);
                const childMenu = result.filter(menu => isEqualNumber(menu.menu_type, 3)).sort((a, b) => a.display_order - b.display_order);
                const subRoutings = result
                    .filter(menu => isEqualNumber(menu.menu_type, 0))
                    .sort((a, b) => a.parent_id - b.parent_id);

                const nestedRoutes = buildRoutesTree(subRoutings);

                const menuStrucre = mainMenu.map(main => ({
                    ...main,
                    SubMenu: subMenu.filter(sub => isEqualNumber(sub.parent_id, main.id)).map(sub => ({
                        ...sub,
                        ChildMenu: childMenu.filter(child => isEqualNumber(child.parent_id, sub.id)).map(child => ({
                            ...child,
                            SubRoutes: buildRoutesTree(subRoutings, child.id)
                        })),
                        SubRoutes: buildRoutesTree(subRoutings, sub.id)
                    })),
                    SubRoutes: buildRoutesTree(subRoutings, main.id)
                }));

                dataFound(res, menuStrucre, 'data Found', { subRoutings, nestedRoutes })
            } else {
                failed(res);
            }
        } catch (e) {
            console.log(e)
            servError(e, res)
        }
    }

    const newModifyUserTypeRights = async (req, res) => {
        const { MenuId, UserType, ReadRights, AddRights, EditRights, DeleteRights, PrintRights } = req.body;

        const transaction = new sql.Transaction();

        try {
            await transaction.begin();
            await new sql.Request(transaction)
                .input('UserType', UserType)
                .input('MenuId', MenuId)
                .query(`DELETE FROM tbl_AppMenu_UserTypeRights WHERE UserTypeId = @UserType AND MenuId = @MenuId`);

            const result = await new sql.Request(transaction)
                .input('UserType', UserType)
                .input('MenuId', MenuId)
                .input('ReadRights', ReadRights)
                .input('AddRights', AddRights)
                .input('EditRights', EditRights)
                .input('DeleteRights', DeleteRights)
                .input('PrintRights', PrintRights)
                .query(`
                    INSERT INTO tbl_AppMenu_UserTypeRights 
                        (UserTypeId, MenuId, Read_Rights, Add_Rights, Edit_Rights, Delete_Rights, Print_Rights) 
                    VALUES 
                        (@UserType, @MenuId, @ReadRights, @AddRights, @EditRights, @DeleteRights, @PrintRights)`
                );

            if (result.rowsAffected[0] > 0) {
                await transaction.commit();
                return success(res, 'Changes saved successfully.');
            } else {
                throw new Error('Failed to save changes.')
            }
        } catch (e) {
            await transaction.rollback();
            return servError(e, res)
        }
    }

    return {
        getMenu,
        // getUserRights,
        // modifyUserRights,
        // getUserTypeRights,
        // modifyUserTypeRights,
        menuMaster,
        createMenu,
        updateMenu,
        newAppMenu,
        getNewUserBasedRights,
        newModifyUserRights,
        getNewUserTypeBasedRights,
        newModifyUserTypeRights,
    }
}

export default appMenu();