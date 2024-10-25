

import sql from 'mssql';
import { checkIsNumber } from '../../helper_functions.mjs';
import { dataFound, noData, invalidInput, servError, success, failed } from '../../res.mjs'
const employeesTasks = () => {

    const getusersDropDown = async (req, res) => {
        const { Company_id } = req.query;

        if (!checkIsNumber(Company_id)) {
            return invalidInput(res, 'Company_id is required');
        }

        try {
            const result = await new sql.Request()
                .input('comp', Company_id)
                .query(`
                    SELECT 
                        UserId, Name 
                    FROM 
                        tbl_Users 
                    WHERE 
                        (UserTypeId = 6 OR UserTypeId = 3) 
                        AND UDel_Flag = 0 
                      AND Company_id = @comp 
                `);

            if (result.recordset.length > 0) {
                return dataFound(res, result.recordset);
            } else {
                return noData(res);
            }
        } catch (e) {
            return servError(e, res);
        }
    };



    const getUsersProjectId = async (req, res) => {
        const { Project_Id } = req.query;

        if (!checkIsNumber(Project_Id)) {
            return invalidInput(res, 'Project_Id is required and must be a number');
        }

        try {
            const result = await new sql.Request()
                .input('Project_Id', sql.Int, Project_Id)
                .query(`
                   SELECT 
                     pe.[Id],
                     pe.[Project_Id],
                     u.[UserId],
                     u.[Name]
                 FROM 
                     [dbo].[tbl_Project_Employee] AS pe
                 JOIN 
                [dbo].[tbl_Users] AS u
                 ON 
                 pe.[User_Id] = u.[UserId]
                 WHERE 
                 pe.[Project_Id] = @Project_Id 
                 ORDER BY 
                 pe.[Project_Id];

                `);

            // Check for results
            if (result.recordset.length > 0) {

                return dataFound(res, result.recordset);
            } else {
                return noData(res);
            }
        } catch (e) {
            return servError(e, res);
        }
    };


    const getEmployeeTasks = async (req, res) => {
        const { Project_Id } = req.query;

        if (!Project_Id) {
            return invalidInput(res, 'Project_Id is required');
        }

        try {
            const result = await new sql.Request()
                .input('Project_Id', sql.Int, Project_Id)
                .query(`
                     SELECT 
                        e.UserId,
                        e.Name,
                        COALESCE(d.Designation, 'NOT FOUND') AS Designation_Name, 
                        COALESCE(b.BranchName, 'NOT FOUND') AS BranchName
                       
                    FROM 
                        tbl_Project_Employee AS pe
                    JOIN 
                        tbl_Users AS e ON pe.User_Id = e.UserId
                    LEFT JOIN 
                        tbl_Employee_Designation AS d ON e.UserTypeId = d.Designation_Id
                 
                    LEFT JOIN 
                        tbl_Branch_Master AS b ON e.BranchId = b.BranchId
                    WHERE 
                        pe.Project_Id = @Project_Id
                    ORDER BY 
                        e.Name
                        
                `);

            if (result.recordset.length > 0) {
                return dataFound(res, result.recordset);
            } else {
                return noData(res);
            }
        } catch (err) {
            return servError(err, res);
        }
    };



    const postEmployeesProjects = async (req, res) => {
        const { Project_Id, UserIds } = req.body;

        if (!Project_Id) {
            return invalidInput(res, 'Project_Id is required');
        }

        try {

            const deleteQuery = `DELETE FROM tbl_Project_Employee WHERE Project_Id = @projectId`;
            const deleteRequest = new sql.Request();
            deleteRequest.input('projectId', Project_Id);
            await deleteRequest.query(deleteQuery);

            const insertQuery = `INSERT INTO tbl_Project_Employee (Project_Id, User_Id) VALUES (@projectId, @userId)`;
            const insertRequests = UserIds.map(async userId => {
                const insertRequest = new sql.Request();
                insertRequest.input('projectId', Project_Id);
                insertRequest.input('userId', userId);
                return insertRequest.query(insertQuery);
            });

            await Promise.all(insertRequests);

            return dataFound(res, [], 'Changes Saved');
        } catch (e) {
            console.error('Error saving project employees:', e);
            return servError(e, res);
        }
    };


    const assignTaskForEmployee = async (req, res) => {
        const {
            Project_Id, Sch_Id, Task_Levl_Id, Task_Id, Assigned_Emp_Id, Emp_Id, Sch_Period, Sch_Time,
            EN_Time, Est_Start_Dt, Est_End_Dt, Ord_By, Timer_Based
        } = req.body;

        if (!Project_Id || !Sch_Id || !Task_Levl_Id || !Task_Id || !Assigned_Emp_Id || !Emp_Id || !Sch_Period || !Sch_Time
            || !EN_Time || !Est_Start_Dt || !Est_End_Dt) {
            return invalidInput(res, `All Field must be defined`)
        }

        try {
            const request = new sql.Request();
            request.input('Mode', 1);
            request.input('AN_No', '');
            request.input('Project_Id', Project_Id);
            request.input('Sch_Id', Sch_Id);
            request.input('Task_Levl_Id', Task_Levl_Id);
            request.input('Task_Id', Task_Id);
            request.input('Assigned_Emp_Id', Assigned_Emp_Id);
            request.input('Emp_Id', Emp_Id);
            request.input('Task_Assign_dt', new Date().toISOString().split('T')[0]);
            request.input('Sch_Period', Sch_Period);
            request.input('Sch_Time', Sch_Time);
            request.input('EN_Time', EN_Time);
            request.input('Est_Start_Dt', Est_Start_Dt);
            request.input('Est_End_Dt', Est_End_Dt);
            request.input('Ord_By', Number(Ord_By) || 1);
            request.input('Timer_Based', Boolean(Number(Timer_Based)) ? 1 : 0);
            request.input('Invovled_Stat', 1);

            const result = await request.execute('Task_Assign_SP');

            if (result.rowsAffected[0] > 0) {


                return success(res, 'Task Assigned Successfully');
            } else {
                return failed(res, 'Failed to assign task');
            }

        } catch (e) {
            servError(e, res);
        }
    };



    return {
        getEmployeeTasks,
        getusersDropDown,
        postEmployeesProjects,
        getUsersProjectId,
        assignTaskForEmployee
    };
};

export default employeesTasks();
