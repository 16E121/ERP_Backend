import sql from 'mssql';
import { dataFound, noData, servError, invalidInput, failed, success } from '../../res.mjs';
import { checkIsNumber, isEqualNumber } from '../../helper_functions.mjs';

const taskModule = () => {

    const getTaskDropDown = async (req, res) => {
        const { Company_id } = req.query;

        // if (!checkIsNumber(Company_id)) {
        //     return invalidInput(res, 'Company_id is required');
        // }

        try {
            const request = new sql.Request()
                .input('comp', Company_id)
                .query(`SELECT Task_Id, Task_Name FROM tbl_Task ORDER BY Task_Name`)
                // WHERE Company_id = @comp

            const result = await request;

            if (result.recordset.length > 0) {
                dataFound(res, result.recordset)
            } else {
                noData(res)
            }
        } catch (e) {
            servError(e, res)
        }
    }

    const getTasks = async (req, res) => {
        const { Company_id } = req.query;

        if (!checkIsNumber(Company_id)) {
            return invalidInput(res, 'Company_id is required');
        }

        try {
            const result = await new sql.Request()
                .input('comp', Company_id)
                .query(`
                    SELECT 
	                    t.*,
		                COALESCE((
		            	    SELECT 
		            	    	Task_Type
		            	    FROM
		            	    	tbl_Task_Type
		            	    WHERE
		            	    	Task_Type_Id = t.Task_Group_Id
		                ), 'Unknown') AS Task_Group,
	                    COALESCE((
	                    	SELECT 
                                param.PA_Id,
                                param.Task_Id,
                                param.Param_Id AS Paramet_Id,
                                param.Default_Value,
                                pm.Paramet_Name,
                                pm.Paramet_Data_Type
	                    	FROM
	                    		tbl_Task_Paramet_DT AS param
                                LEFT JOIN tbl_Paramet_Master AS pm
                                ON pm.Paramet_Id = param.Param_Id
	                    	WHERE
	                    		Task_Id = t.Task_Id
	                    	FOR JSON PATH
	                    ), '[]') AS Task_Parameters
                    FROM 
                        tbl_Task AS t
                    ORDER BY 
                        CONVERT(DATE, t.Entry_Date) DESC`)
                        
                    // WHERE
                    // t.Company_id = @comp

            if (result.recordset.length > 0) {
                const parsed = result.recordset.map(o => ({
                    ...o,
                    Task_Parameters: JSON.parse(o?.Task_Parameters)
                }))
                return dataFound(res, parsed)
            } else {
                return noData(res)
            }
        } catch (err) {
            return servError(err, res)
        }
    }

    const createTask = async (req, res) => {
        const { Task_Name, Task_Desc, Task_Group_Id, Entry_By, Task_Parameters, Company_id } = req.body;

        if (!Task_Name || !Task_Desc || !checkIsNumber(Task_Group_Id) || !checkIsNumber(Entry_By) || !checkIsNumber(Company_id)) {
            return invalidInput(res, 'Task_Name, Task_Desc, Under_Task_Id, Task_Group_Id, Entry_By, Company_id is required')
        }

        try {
            const transaction = new sql.Transaction();
            await transaction.begin();

            try {
                const request = new sql.Request(transaction)
                    .input('Task_Name', Task_Name)
                    .input('Task_Desc', Task_Desc)
                    .input('Task_Group_Id', Task_Group_Id)
                    .input('Company_id', Company_id)
                    .input('Entry_By', Entry_By)
                    .query(`
                        INSERT INTO tbl_Task 
                            (Task_Name, Task_Desc, Task_Group_Id, Company_id, Entry_By, Entry_Date)
                        VALUES
                            (@Task_Name, @Task_Desc, @Task_Group_Id, @Company_id, @Entry_By, GETDATE());

                        SELECT SCOPE_IDENTITY() AS Task_Id;
                        `)

                const result = await request;

                if (result.rowsAffected.length > 0 && result.recordset[0].Task_Id) {

                    if (Array.isArray(Task_Parameters) && Task_Parameters.length > 0) {
                        for (let i = 0; i < Task_Parameters.length; i++) {
                            const insertParameters = (await new sql.Request(transaction)
                                .input('Task_Id', result.recordset[0].Task_Id)
                                .input('Param_Id', Task_Parameters[i]?.Param_Id)
                                .input('Default_Value', Task_Parameters[i]?.Default_Value)
                                .query(`
                                    INSERT INTO tbl_Task_Paramet_DT
                                        (Task_Id, Param_Id, Default_Value)
                                    VALUES
                                        (@Task_Id, @Param_Id, @Default_Value)
                                    `)
                            ).rowsAffected[0]

                            if (isEqualNumber(insertParameters, 0)) {
                                await transaction.rollback();
                                return failed(res, 'Failed to save Paramerters')
                            }
                        }
                    }

                    await transaction.commit();
                    return success(res, 'Task Created');

                } else {
                    await transaction.rollback();
                    return failed(res, 'Failed to create Task')
                }
            } catch (e) {
                await transaction.rollback();
                return servError(e, res);
            }

        } catch (e) {
            return servError(e, res)
        }
    };

    const editTask = async (req, res) => {
        const { Task_Id, Task_Name, Task_Desc, Task_Group_Id, Entry_By, Task_Parameters } = req.body;

        if (!checkIsNumber(Task_Id) || !Task_Name || !Task_Desc || !checkIsNumber(Task_Group_Id) || !checkIsNumber(Entry_By)) {
            return invalidInput(res, 'Task_Id, Task_Name, Task_Desc, Task_Group_Id, Entry_By is required');
        }

        try {
            const transaction = new sql.Transaction();
            await transaction.begin();

            try {
                const request = new sql.Request(transaction)
                    .input('Task_Id', Task_Id)
                    .input('Task_Name', Task_Name)
                    .input('Task_Desc', Task_Desc)
                    .input('Task_Group_Id', Task_Group_Id)
                    .input('Entry_By', Entry_By)
                    .query(`
                        UPDATE tbl_Task
                        SET Task_Name = @Task_Name,
                            Task_Desc = @Task_Desc,
                            Task_Group_Id = @Task_Group_Id,
                            Update_By = @Entry_By,
                            Update_Date = GETDATE()
                        WHERE 
                            Task_Id = @Task_Id;
                        `);

                const result = await request;

                if (result.rowsAffected[0] > 0) {
                    const deleteParamsRequest = new sql.Request(transaction)
                        .input('Task_Id', Task_Id)
                        .query(`
                            DELETE FROM tbl_Task_Paramet_DT
                            WHERE Task_Id = @Task_Id;
                        `);

                    await deleteParamsRequest;

                    if (Array.isArray(Task_Parameters) && Task_Parameters.length > 0) {
                        for (let i = 0; i < Task_Parameters.length; i++) {
                            const insertParameters = (await new sql.Request(transaction)
                                .input('Task_Id', Task_Id)
                                .input('Param_Id', Task_Parameters[i]?.Param_Id)
                                .input('Default_Value', Task_Parameters[i]?.Default_Value)
                                .query(`
                                    INSERT INTO tbl_Task_Paramet_DT
                                        (Task_Id, Param_Id, Default_Value)
                                    VALUES
                                        (@Task_Id, @Param_Id, @Default_Value);
                                `)
                            ).rowsAffected[0];

                            if (isEqualNumber(insertParameters, 0)) {
                                await transaction.rollback();
                                return failed(res, 'Failed to save Parameters');
                            }
                        }
                    }

                    await transaction.commit();
                    return success(res, 'Task Updated');

                } else {
                    await transaction.rollback();
                    return failed(res, 'Failed to update Task');
                }
            } catch (e) {
                await transaction.rollback();
                return servError(e, res);
            }

        } catch (e) {
            return servError(e, res);
        }
    };

    const deleteTask = async (req, res) => {
        const { Task_Id } = req.body;

        if (!Task_Id) {
            return invalidInput(res, 'Task_Id is required')
        }

        try {
            const request = (await new sql.Request()
                .input('Task_Id', Task_Id)
                .query(`
                    DELETE FROM tbl_Task WHERE Task_Id = @Task_Id;
                    DELETE FROM tbl_Task_Details WHERE Task_Id = @Task_Id;
                    DELETE FROM tbl_Task_Paramet_DT WHERE Task_Id = @Task_Id;
                    DELETE FROM tbl_Work_Master WHERE Task_Id = @Task_Id;
                    `)
                ).rowsAffected[0]

            if (request > 0) {
                return dataFound(res, [], 'One Task Deleted');
            } else {
                return failed(res, 'Failed to Delete Task')
            }

        } catch (e) {
            return servError(e, res)
        }
    }


    return {
        getTaskDropDown,
        getTasks,
        editTask,
        createTask,
        deleteTask
    }
}

export default taskModule();