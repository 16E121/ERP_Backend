import sql from 'mssql';
import { dataFound, noData, success, failed, servError, invalidInput } from '../../res.mjs';
import { checkIsNumber } from '../../helper_functions.mjs';

const ProjectScheduler = () => {

    const getScheduleType = async (req, res) => {
        try {
            const result = (await sql.query(`SELECT * FROM tbl_Project_Sch_Type`)).recordset;

            if (result.length > 0) {
                dataFound(res, result)
            } else {
                noData(res)
            }

        } catch (e) {
            servError(e, res)
        }
    }

    const getSchedule = async (req, res) => {
        const { Project_Id } = req.query;

        if (!checkIsNumber(Project_Id)) {
            return invalidInput(res, 'Project_Id is required')
        }

        try {
            const getProjectScheduleQuery = `
            SELECT 
            	s.Sch_Id,
            	CONVERT(DATE, s.Sch_Date) AS Sch_Date,
            	s.Sch_By,
            	(SELECT Name FROM tbl_Users WHERE UserId = s.Sch_By) AS SchByGet,
            	s.Sch_Type_Id, 
            	(SELECT Sch_Type FROM tbl_Project_Sch_Type WHERE Sch_Type_Id = s.Sch_Type_Id) AS SchTypGet,
                (SELECT Sch_Days FROM tbl_Project_Sch_Type WHERE Sch_Type_Id = s.Sch_Type_Id) AS SchDays,
            	CONVERT(DATE, s.Sch_Est_Start_Date) AS Sch_Est_Start_Date,
            	CONVERT(DATE, s.Sch_Est_End_Date) AS Sch_Est_End_Date,
            	s.Sch_Status,
            	(SELECT Status FROM tbl_Status WHERE Status_Id = s.Sch_Status) AS SchStatusGet,
            	s.Entry_By,
            	(SELECT Name FROM tbl_Users WHERE UserId = s.Entry_By) AS EntryByGet,
            	s.Entry_Date,
            	s.Update_By,
            	s.Update_Date,

            	ISNULL((
                    SELECT 
                        tty.Task_Type_Id,
                        tty.Task_Type,
                        ISNULL((
                            SELECT 
                                pst.A_Id,
                                pst.Task_Levl_Id,
                                pst.Task_Id,
                                pst.Type_Task_Id,
                                pst.Task_Sch_Duaration,
                                pst.Task_Start_Time,
                                pst.Task_End_Time,
                                pst.Task_Est_Start_Date,
                                pst.Task_Est_End_Date,
                                pst.Task_Sch_Status,
                                (SELECT Task_Name FROM tbl_Task WHERE Task_Id = pst.Task_Id) AS TaskNameGet,
                                (SELECT Task_Type FROM tbl_Task_Type WHERE Task_Type_Id = pst.Type_Task_Id) AS TaskTypeGet,
                                (SELECT Status FROM tbl_Status WHERE Status_Id = pst.Task_Sch_Status) AS TaskSchStatusGet
                            FROM 
                                tbl_Project_Sch_Task_DT AS pst
                            WHERE 
                                pst.Sch_Id = s.Sch_Id
                                AND 
                                pst.Levl_Id = 1
                                AND 
                                pst.Task_Sch_Del_Flag = 0
                                AND
                                pst.Type_Task_Id = tty.Task_Type_Id
                            ORDER BY
                                pst.Task_Est_Start_Date
                            FOR JSON PATH
                        ), '[]') AS TaskGroup
                    FROM 
                        tbl_Task_Type AS tty
                    FOR JSON PATH
                ), '[]') AS LevelOneTasks,
                    
            	ISNULL((
                    SELECT 
                        tty.Task_Type_Id,
                        tty.Task_Type,
                        ISNULL((
                            SELECT 
                                pst.A_Id,
                                pst.Task_Levl_Id,
                                pst.Task_Id,
                                pst.Type_Task_Id,
                                pst.Task_Sch_Duaration,
                                pst.Task_Start_Time,
                                pst.Task_End_Time,
                                pst.Task_Est_Start_Date,
                                pst.Task_Est_End_Date,
                                pst.Task_Sch_Status,
                                (SELECT Task_Name FROM tbl_Task WHERE Task_Id = pst.Task_Id) AS TaskNameGet,
                                (SELECT Task_Type FROM tbl_Task_Type WHERE Task_Type_Id = pst.Type_Task_Id) AS TaskTypeGet,
                                (SELECT Status FROM tbl_Status WHERE Status_Id = pst.Task_Sch_Status) AS TaskSchStatusGet,
                                ISNULL((
                                    SELECT
                                        psdt.A_Id,
                                        psdt.Task_Levl_Id,
                                        psdt.Task_Depend_Level_Id,
                                        (SELECT Task_Name FROM tbl_Task WHERE Task_Id = tpstdt.Task_Id) AS TaskNameGet 
                                    FROM tbl_Project_Sch_Task_Depend_DT AS psdt
                                    JOIN tbl_Project_Sch_Task_DT AS tpstdt ON tpstdt.Task_Levl_Id = psdt.Task_Depend_Level_Id
                                    WHERE psdt.Task_Levl_Id = pst.Task_Levl_Id
                                    FOR JSON PATH
                                ), '[]') AS DependancyTasks
                            FROM 
                                tbl_Project_Sch_Task_DT AS pst
                            WHERE 
                                pst.Sch_Id = s.Sch_Id
                                AND 
                                pst.Levl_Id = 2
                                AND 
                                pst.Task_Sch_Del_Flag = 0
                                AND
                                pst.Type_Task_Id = tty.Task_Type_Id
                            ORDER BY
                                pst.Task_Est_Start_Date
                            FOR JSON PATH
                        ), '[]') AS TaskGroup
                    FROM 
                        tbl_Task_Type AS tty
                    FOR JSON PATH
                ), '[]') AS LevelTwoTasks,
                
                ISNULL((
                    SELECT 
                        tty.Task_Type_Id,
                        tty.Task_Type,
                        ISNULL((
                            SELECT 
                                pst.A_Id,
                                pst.Task_Levl_Id,
                                pst.Task_Id,
                                pst.Type_Task_Id,
                                pst.Task_Sch_Duaration,
                                pst.Task_Start_Time,
                                pst.Task_End_Time,
                                pst.Task_Est_Start_Date,
                                pst.Task_Est_End_Date,
                                pst.Task_Sch_Status,
                                (SELECT Task_Name FROM tbl_Task WHERE Task_Id = pst.Task_Id) AS TaskNameGet,
                                (SELECT Task_Type FROM tbl_Task_Type WHERE Task_Type_Id = pst.Type_Task_Id) AS TaskTypeGet,
                                (SELECT Status FROM tbl_Status WHERE Status_Id = pst.Task_Sch_Status) AS TaskSchStatusGet,
                                ISNULL((
                                    SELECT
                                        psdt.A_Id,
                                        psdt.Task_Levl_Id,
                                        psdt.Task_Depend_Level_Id,
                                        (SELECT Task_Name FROM tbl_Task WHERE Task_Id = tpstdt.Task_Id) AS TaskNameGet 
                                    FROM tbl_Project_Sch_Task_Depend_DT AS psdt
                                    JOIN tbl_Project_Sch_Task_DT AS tpstdt ON tpstdt.Task_Levl_Id = psdt.Task_Depend_Level_Id
                                    WHERE psdt.Task_Levl_Id = pst.Task_Levl_Id
                                    FOR JSON PATH
                                ), '[]') AS DependancyTasks
                            FROM 
                                tbl_Project_Sch_Task_DT AS pst
                            WHERE 
                                pst.Sch_Id = s.Sch_Id
                                AND 
                                pst.Levl_Id = 3
                                AND 
                                pst.Task_Sch_Del_Flag = 0
                                AND
                                pst.Type_Task_Id = tty.Task_Type_Id
                            ORDER BY
                                pst.Task_Est_Start_Date
                            FOR JSON PATH
                        ), '[]') AS TaskGroup
                    FROM 
                        tbl_Task_Type AS tty
                    FOR JSON PATH
                ), '[]') AS LevelThreeTasks
                                                   
            FROM 
            	tbl_Project_Schedule AS s
            WHERE 
            	s.Sch_Del_Flag = 0
            	AND
            	s.Project_Id = @proid
            ORDER BY 
                s.Sch_Est_Start_Date`;

            const request = new sql.Request();
            request.input('proid', Project_Id);

            const result = await request.query(getProjectScheduleQuery);

            if (result.recordset.length > 0) {

                for (let obj of result.recordset) {
                    obj.LevelOneTasks = JSON.parse(obj.LevelOneTasks)
                    obj.LevelTwoTasks = JSON.parse(obj.LevelTwoTasks)
                    obj.LevelThreeTasks = JSON.parse(obj.LevelThreeTasks)
                }

                dataFound(res, result.recordset)
            } else {
                noData(res)
            }

        } catch (e) {
            servError(e, res)
        }
    }

    const createSchedule = async (req, res) => {
        const { Sch_Date, Project_Id, Sch_By, Sch_Type_Id, Sch_Est_Start_Date, Sch_Status, Entry_By, Sch_Est_End_Date } = req.body;

        if (!Sch_Date || !checkIsNumber(Project_Id) || !checkIsNumber(Sch_By) || !checkIsNumber(Sch_Type_Id) ||
            !Sch_Est_Start_Date || !checkIsNumber(Sch_Status) || !checkIsNumber(Entry_By)) {
            return invalidInput(res, 'Sch_Date, Project_Id, Sch_By, Sch_Type_Id, Sch_Est_Start_Date, Sch_Status, Entry_By is required');
        }

        try {
            const request = new sql.Request();
            request.input('Mode', 1)
            request.input('Sch_Id', 0);
            request.input('Sch_Date', Sch_Date)
            request.input('Project_Id', Project_Id)
            request.input('Sch_By', Sch_By)
            request.input('Sch_Type_Id', Sch_Type_Id)
            request.input('Sch_Est_Start_Date', Sch_Est_Start_Date)
            request.input('Sch_Est_End_Date', Sch_Est_End_Date)
            request.input('Sch_Status', Sch_Status)
            request.input('Entry_By', Entry_By)
            request.input('Entry_Date', new Date())

            const result = await request.execute('Project_Schedule_SP');

            if (result && result.rowsAffected && result.rowsAffected[0] > 0) {
                return success(res, 'Project Schedule Created')
            } else {
                return failed(res, 'Failed to create Schedule')
            }

        } catch (e) {
            servError(e, res)
        }
    }

    const putSchedule = async (req, res) => {
        const { Sch_Id, Sch_Date, Project_Id, Sch_By, Sch_Type_Id, Sch_Est_Start_Date, Sch_Status, Entry_By, Sch_Est_End_Date } = req.body;

        if (!checkIsNumber(Sch_Id) || !Sch_Date || !checkIsNumber(Project_Id) || !checkIsNumber(Sch_By) ||
            !checkIsNumber(Sch_Type_Id) || !Sch_Est_Start_Date || !checkIsNumber(Sch_Status) || !checkIsNumber(Entry_By)) {
            return invalidInput(res, 'Sch_Id, Sch_Date, Project_Id, Sch_By, Sch_Type_Id, Sch_Est_Start_Date, Sch_Status, Entry_By is required');
        }

        try {
            const request = new sql.Request();
            request.input('Mode', 2)
            request.input('Sch_Id', Sch_Id);
            request.input('Sch_Date', Sch_Date)
            request.input('Project_Id', Project_Id)
            request.input('Sch_By', Sch_By)
            request.input('Sch_Type_Id', Sch_Type_Id)
            request.input('Sch_Est_Start_Date', Sch_Est_Start_Date)
            request.input('Sch_Est_End_Date', Sch_Est_End_Date)
            request.input('Sch_Status', Sch_Status)
            request.input('Entry_By', Entry_By)
            request.input('Entry_Date', new Date())

            const result = await request.execute('Project_Schedule_SP');

            if (result && result.rowsAffected && result.rowsAffected[0] > 0) {
                return success(res, 'Changes Saved')
            } else {
                return failed(res, 'Failed to Save')
            }

        } catch (e) {
            servError(e, res)
        }
    }

    const deleteSchedule = async (req, res) => {
        const { Sch_Id } = req.body;

        if (!checkIsNumber(Sch_Id)) {
            return invalidInput(res, 'Sch_Id is required');
        }

        try {
            const request = new sql.Request();
            request.input('Mode', 3)
            request.input('Sch_Id', Sch_Id);
            request.input('Sch_Date', '')
            request.input('Project_Id', '')
            request.input('Sch_By', '')
            request.input('Sch_Type_Id', '')
            request.input('Sch_Est_Start_Date', '')
            request.input('Sch_Est_End_Date', '')
            request.input('Sch_Status', '')
            request.input('Entry_By', '')
            request.input('Entry_Date', '')

            const result = await request.execute('Project_Schedule_SP');

            if (result && result.rowsAffected && result.rowsAffected[0] > 0) {
                return success(res, 'Changes Saved')
            } else {
                return failed(res, 'Failed to Save')
            }

        } catch (e) {
            servError(e, res)
        }
    }

    const assignTaskInSchedule = async (req, res) => {
        const {
            Sch_Project_Id, Sch_Id, Task_Id, Task_Start_Time, Task_End_Time, Task_Sch_Duaration, Task_Est_Start_Date, Task_Est_End_Date,
            Task_Sch_Status, Levl_Id, Task_Depend_Level_Id, Type_Task_Id
        } = req.body;

        if (!checkIsNumber(Sch_Project_Id) || !checkIsNumber(Sch_Id) || !checkIsNumber(Task_Id) || !Task_Start_Time || !Task_End_Time ||
            !Task_Sch_Duaration || !Task_Est_Start_Date || !Task_Est_End_Date || !checkIsNumber(Task_Sch_Status) || !checkIsNumber(Type_Task_Id)) {
            return invalidInput(res, 'Sch_Project_Id, Sch_Id, Task_Id, Task_Start_Time, Task_End_Time, Task_Est_Start_Date, Task_Est_End_Date, Task_Sch_Status, Type_Task_Id is required')
        }

        try {
            const request = new sql.Request();
            request.input('Mode', 1)
            request.input('Sch_Project_Id', Sch_Project_Id)
            request.input('Sch_Id', Sch_Id)
            request.input('Task_Levl_Id', '')
            request.input('Task_Id', Task_Id)
            request.input('Type_Task_Id', Type_Task_Id)
            request.input('Task_Sch_Duaration', Task_Sch_Duaration)
            request.input('Task_Start_Time', Task_Start_Time)
            request.input('Task_End_Time', Task_End_Time)
            request.input('Task_Est_Start_Date', Task_Est_Start_Date)
            request.input('Task_Est_End_Date', Task_Est_End_Date)
            request.input('Task_Sch_Status', Task_Sch_Status)
            request.input('Levl_Id', Levl_Id)
            request.input('Task_Depend_Level_Id', Task_Depend_Level_Id)

            const result = await request.execute('Project_Sch_Task_DT_SP');

            if (result && result.rowsAffected && result.rowsAffected[0] > 0) {
                success(res, 'Task Scheduled')
            } else {
                failed(res, 'Failed to Schedule Task')
            }

        } catch (e) {
            servError(e, res)
        }
    }

    const modifyTaskInSchedule = async (req, res) => {
        const {
            Sch_Project_Id, Sch_Id, Task_Levl_Id, Task_Id, Task_Start_Time, Task_End_Time, Task_Sch_Duaration, Task_Est_Start_Date, Task_Est_End_Date,
            Task_Sch_Status, Levl_Id, Task_Depend_Level_Id, Type_Task_Id
        } = req.body;

        if (!checkIsNumber(Sch_Project_Id) || !checkIsNumber(Sch_Id) || !checkIsNumber(Task_Levl_Id) || !checkIsNumber(Task_Id) || !Task_Start_Time ||
            !Task_End_Time || !Task_Sch_Duaration || !Task_Est_Start_Date || !Task_Est_End_Date || !checkIsNumber(Task_Sch_Status) || !checkIsNumber(Type_Task_Id)) {
            return invalidInput(res, `Sch_Project_Id, Sch_Id, Task_Levl_Id, Task_Id, Task_Start_Time, Task_End_Time,
                 Task_Est_Start_Date, Task_Est_End_Date, Task_Sch_Status, Type_Task_Id is required`)
        }

        try {
            const request = new sql.Request();
            request.input('Mode', 2)
            request.input('Sch_Project_Id', Sch_Project_Id)
            request.input('Sch_Id', Sch_Id)
            request.input('Task_Levl_Id', Task_Levl_Id)
            request.input('Task_Id', Task_Id)
            request.input('Type_Task_Id', Type_Task_Id)
            request.input('Task_Sch_Duaration', Task_Sch_Duaration)
            request.input('Task_Start_Time', Task_Start_Time)
            request.input('Task_End_Time', Task_End_Time)
            request.input('Task_Est_Start_Date', Task_Est_Start_Date)
            request.input('Task_Est_End_Date', Task_Est_End_Date)
            request.input('Task_Sch_Status', Task_Sch_Status)
            request.input('Levl_Id', Levl_Id)
            request.input('Task_Depend_Level_Id', Task_Depend_Level_Id)

            const result = await request.execute('Project_Sch_Task_DT_SP');

            if (result && result.rowsAffected && result.rowsAffected[0] > 0) {
                success(res, 'Changes Saved')
            } else {
                failed(res, 'Failed to Save Changes')
            }

        } catch (e) {
            servError(e, res)
        }
    }

    const deleteTaskInSchedule = async (req, res) => {
        const { Task_Levl_Id } = req.body;

        if (!checkIsNumber(Task_Levl_Id)) {
            return invalidInput(res, 'Task_Levl_Id is required')
        }

        try {
            const request = new sql.Request();
            request.input('Mode', 3)
            request.input('Sch_Project_Id', '')
            request.input('Sch_Id', '')
            request.input('Task_Levl_Id', Task_Levl_Id)
            request.input('Task_Id', '')
            request.input('Type_Task_Id', '')
            request.input('Task_Sch_Duaration', '')
            request.input('Task_Start_Time', '')
            request.input('Task_End_Time', '')
            request.input('Task_Est_Start_Date', '')
            request.input('Task_Est_End_Date', '')
            request.input('Task_Sch_Status', '')
            request.input('Levl_Id', '')
            request.input('Task_Depend_Level_Id', '')

            const result = await request.execute('Project_Sch_Task_DT_SP');

            if (result && result.rowsAffected && result.rowsAffected[0] > 0) {
                success(res, 'Task Deleted')
            } else {
                failed(res, 'Failed to Delete Task')
            }

        } catch (e) {
            servError(e, res)
        }
    }

    const createNewTaskwithSchedule = async (req, res) => {
        const {
            Project_Id,
            entryBy,
            tasks = [],
            Sch_Type_Id = 1,
            Sch_Est_Start_Date = new Date(),
            Sch_Est_End_Date = new Date()
        } = req.body;
    
        const Sch_Date = new Date();
        const Sch_By = entryBy;
        const Sch_Status = 1;
        const Mode = 1;
        const Entry_Date = new Date();
    
        try {
            const existingScheduleRequest = new sql.Request();
            const existingScheduleResult = await existingScheduleRequest
                .input('Project_Id', sql.Int, Project_Id)
                .query('SELECT Sch_Id FROM dbo.tbl_Project_Schedule WHERE Project_Id = @Project_Id');
    
            let newScheduleId = existingScheduleResult.recordset.length > 0
                ? existingScheduleResult.recordset[0].Sch_Id
                : null;
    
            if (!newScheduleId) {
                const scheduleRequest = new sql.Request();
                await scheduleRequest
                    .input('Mode', sql.Int, Mode)
                    .input('Sch_Id', sql.Int, null)
                    .input('Sch_Date', sql.DateTime, Sch_Date)
                    .input('Project_Id', sql.Int, Project_Id)
                    .input('Sch_By', sql.BigInt, Sch_By)
                    .input('Sch_Type_Id', sql.Int, Sch_Type_Id)
                    .input('Sch_Est_Start_Date', sql.DateTime, Sch_Est_Start_Date)
                    .input('Sch_Est_End_Date', sql.DateTime, Sch_Est_End_Date)
                    .input('Sch_Status', sql.Int, Sch_Status)
                    .input('Entry_By', sql.BigInt, entryBy)
                    .input('Entry_Date', sql.DateTime, Entry_Date)
                    .execute('Project_Schedule_SP');
    
                const selectRequest = new sql.Request();
                const selectResult = await selectRequest.query('SELECT TOP 1 Sch_Id FROM dbo.tbl_Project_Schedule ORDER BY Sch_Id DESC');
                newScheduleId = selectResult.recordset[0]?.Sch_Id;
            }
    
            const taskInsertPromises = tasks.map(async (task) => {
                const existingTaskRequest = new sql.Request();
                const existingTaskResult = await existingTaskRequest
                    .input('Sch_Project_Id', sql.Int, Project_Id)
                    .input('Task_Id', sql.Int, task.Task_Id)
                    .query(`SELECT * FROM tbl_Project_Sch_Task_DT WHERE Sch_Project_Id = @Sch_Project_Id AND Task_Id = @Task_Id`);
    
                if (existingTaskResult.recordset.length > 0) {
                    return `Task with ID ${task.Task_Id} already exists for this project.`;
                }
                
                const taskStartTime = task.Task_Start_Time ? new Date(task.Task_Start_Time) : new Date();
                const taskEndTime = task.Task_End_Time ? new Date(task.Task_End_Time) : new Date();
                
                const formattedStartTime = taskStartTime.toTimeString().slice(0, 5);
                const formattedEndTime = taskEndTime.toTimeString().slice(0, 5); 


                const durationInMilliseconds = taskEndTime - taskStartTime;
                const durationInMinutes = Math.floor(durationInMilliseconds / 60000); 

                const hours = Math.floor(durationInMinutes / 60);
                const minutes = durationInMinutes % 60;
                const formattedDuration = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

                const taskRequest = new sql.Request();
                await taskRequest
                    .input('Mode', sql.Int, 1)
                    .input('Sch_Project_Id', sql.Int, Project_Id)
                    .input('Sch_Id', sql.Int, newScheduleId)
                    .input('Task_Levl_Id', sql.Int, 0)
                    .input('Task_Id', sql.Int, task.Task_Id)
                    .input('Type_Task_Id', sql.Int, task.Task_Group_Id)
                    .input('Task_Sch_Duaration', sql.VarChar, formattedDuration)
                    .input('Task_Start_Time', sql.NVarChar, formattedStartTime)
                    .input('Task_End_Time', sql.NVarChar, formattedEndTime)
                    .input('Task_Est_Start_Date', sql.DateTime, task.Task_Est_Start_Date)
                    .input('Task_Est_End_Date', sql.DateTime, task.Task_Est_End_Date)
                    .input('Task_Sch_Status', sql.Int, 1)
                    .input('Levl_Id', sql.Int, 1)
                    .input('Task_Depend_Level_Id', sql.NVarChar, '')
                    .execute('[Project_Sch_Task_DT_SP]');
                    
                return `Task with ID ${task.Task_Id} inserted successfully.`;
            });
    
            const results = await Promise.all(taskInsertPromises);
            const existingMessages = results.filter(res => typeof res === 'string');
    
            return res.status(200).send({
                success: true,
                message: existingMessages.length > 0 
                    ? existingMessages.join(', ')
                    : 'Schedule created and tasks inserted successfully',
                scheduleId: newScheduleId
            });
    
        } catch (error) {
            console.error('Error creating schedule:', error);
            return res.status(500).send({
                success: false,
                message: 'Failed to create schedule: ' + error.message
            });
        }
    };
    


    const getScheduleProjectid = async (req, res) => {
        const { Project_Id } = req.query;
    
        if (!checkIsNumber(Project_Id)) {
            return invalidInput(res, 'Project_Id is required');
        }
    
        const getProjectScheduleQuery = `
    
       
    
                         SELECT 
                            ps.[Sch_Id],
                            ps.[Sch_No],
                            ps.[Sch_Date],
                            ps.[Project_Id],
                            ps.[Sch_By],
                            ps.[Sch_Type_Id],
                            ps.[Sch_Est_Start_Date],
                            ps.[Sch_Est_End_Date],
                            pt.[A_Id],
                            pt.[Sch_Project_Id],
                            pt.[Task_Levl_Id],
                            pt.[Task_Id],
                            t.[Task_Group_Id],
                            pt.[Task_Sch_Duaration],
                            pt.[Task_Start_Time],
                            pt.[Task_End_Time],
                            pt.[Task_Est_Start_Date],
                            pt.[Task_Est_End_Date],
                            pt.[Task_Sch_Status],
                            pt.[Levl_Id],
                            pt.[Task_Sch_Del_Flag],
                            ps.[Sch_Status],
                            ps.[Entry_By],
                            ps.[Entry_Date],
                            ps.[Update_By],
                            ps.[Update_Date],
                            ps.[Sch_Del_Flag],
                            t.[Task_Name],
                            t.[Task_Desc],
                            tt.[Task_Type],
                            p.[Project_Name],
                            p.[Project_Desc],
                            s.[Status],
                            (
                                SELECT 
                                    DISTINCT td.Emp_Id AS User_Id, 
                                    u.Name
                                FROM 
                                    tbl_Task_Details td
                                JOIN 
                                    tbl_Users u ON td.Emp_Id = u.UserId
                                WHERE 
                                    td.Task_Id = pt.Task_Id
                                    AND td.Project_Id=pt.Sch_Project_Id
                                FOR JSON PATH
                            ) AS AssignedEmployees,
                            (
                                SELECT 
                                    tp.[Param_Id], 
                                    pm.[Paramet_Name], 
                                    pm.[Paramet_Data_Type], 
                                    tp.[Default_Value]
                                FROM 
                                    tbl_Task_Paramet_DT tp
                                JOIN 
                                    tbl_Paramet_Master pm ON tp.Param_Id = pm.Paramet_Id
                                WHERE 
                                    tp.Task_Id = pt.Task_Id
                                FOR JSON PATH
                            ) AS TaskParameters
                        FROM 
                            tbl_Project_Schedule ps
                        JOIN 
                            tbl_Project_Sch_Task_DT pt ON ps.[Sch_Id] = pt.[Sch_Id]
                        JOIN 
                            tbl_Task t ON pt.[Task_Id] = t.[Task_Id] 
                        JOIN 
                            tbl_Project_Master p ON ps.[Project_Id] = p.[Project_Id]
                        JOIN 
                            tbl_Status s ON ps.[Sch_Status] = s.[Status_Id]  
                        JOIN 
                            tbl_Task_Type tt ON t.[Task_Group_Id] = tt.[Task_Type_Id]
                        WHERE 
                            ps.[Project_Id] = @proid
                        ORDER BY 
                            ps.[Sch_Id] `;
    
        try {
            const request = new sql.Request();
            request.input('proid', sql.BigInt, Project_Id);
    
            const result = await request.query(getProjectScheduleQuery);
    
            if (result.recordset.length > 0) {
                dataFound(res, result.recordset);
            } else {
                noData(res);
            }
        } catch (error) {
            servError(error, res);
        }
    };
    


    return {
        getSchedule,
        getScheduleType,
        createSchedule,
        putSchedule,
        deleteSchedule,
        assignTaskInSchedule,
        modifyTaskInSchedule,
        deleteTaskInSchedule,
        createNewTaskwithSchedule,
        getScheduleProjectid
    }
}


export default ProjectScheduler();