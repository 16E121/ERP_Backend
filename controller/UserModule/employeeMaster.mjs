import sql from 'mssql';
import { dataFound, noData, servError, invalidInput, failed, success } from '../../res.mjs';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const domain = process.env.domain;

const EmployeeController = () => {

    const emp_designation = async (req, res) => {
        try {
            const result = await sql.query(`
                SELECT 
                    Designation_Id as id, 
                    Designation 
                FROM 
                    tbl_Employee_Designation 
                WHERE 
                    Designation_Id != 0`);

            if (result.recordset.length > 0) {
                dataFound(res, result.recordset)
            } else {
                noData(res)
            }
        } catch (e) {
            servError(e, res)
        }
    }

    const employeeGet = async (req, res) => {
        try {
            const getEmp = `
            SELECT 
                e.*, 
                d.Designation AS Designation_Name, 
                b.BranchName, 
                u.Name AS CreaterName
            FROM 
                tbl_Employee_Master AS e
            JOIN 
                tbl_Employee_Designation as d
                ON e.Designation = d.Designation_Id
            JOIN 
                tbl_Users as u
                ON e.Entry_By = u.UserId
            JOIN 
                tbl_Branch_Master as b
                ON e.Branch = b.BranchId
            ORDER BY 
                e.Emp_Id`;

            const result = await sql.query(getEmp);

            if (result.recordset.length > 0) {
                dataFound(res, result.recordset)
            } else {
                noData(res)
            }

        } catch (e) {
            servError(e, res)
        }
    }

    const employeePost = async (req, res) => {
        const {
            branch, mobile, empname, designation, dob, doj,
            address1, address2, city, pincode, education,
            father, mother, spouse, gender, religion, salary, total_loan,
            salary_advance, due_loan, enter_by, fingerPrintEmpId
        } = req.body.data;
        let userId = '';
        let empcode = '';
        let zeros = 0;
        let maxId = 0;
        let Company_id;

        const transaction = new sql.Transaction();

        try {

            const getBranchCode = new sql.Request()
                .input('branch', branch)
                .query(`SELECT BranchCode, Company_id FROM tbl_Branch_Master WHERE BranchId = @branch`);

            const branchResult = await getBranchCode;

            if (branchResult.recordset.length > 0) {
                empcode = branchResult.recordset[0]?.BranchCode;
                Company_id = branchResult.recordset[0]?.Company_id;
            } else {
                return invalidInput(res, 'Branch not Found')
            }

            const checkResult = (await new sql.Request()
                .input('mobile', mobile)
                .query(`SELECT UserName FROM tbl_Users WHERE UserName = @mobile AND UDel_Flag = 0`)).recordset

            if (checkResult.length > 0) {
                return invalidInput(res, 'Mobile or UserName is Already Exists')
            }

            const result = await sql.query('SELECT COALESCE(MAX(Emp_Id), 0) AS MaxValue FROM tbl_Employee_Master');
            maxId = parseInt(result.recordset[0]['MaxValue']) + 1;

            zeros = String(maxId).padStart(4, '0');

            await transaction.begin();

            const request = await fetch(`${domain}api/masters/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Name: empname,
                    UserName: mobile,
                    UserTypeId: 3,
                    Password: '123456',
                    BranchId: parseInt(branch)
                })
            });

            const response = await request.json();

            if (response.success) {
                userId = Number(response?.others?.UserId)
            } else {
                await transaction.rollback();
                return failed(res, 'Error while Creating User', response);
            }

            const empCreation = new sql.Request(transaction)
                .input('Emp_Id', maxId)
                .input('Branch', branch)
                .input('fingerPrintEmpId', fingerPrintEmpId)
                .input('Emp_Code', `${empcode}${zeros}`)
                .input('Emp_Name', empname)
                .input('Designation', designation)
                .input('DOB', dob ? new Date(dob) : '')
                .input('DOJ', doj ? new Date(doj) : '')
                .input('Address_1', address1)
                .input('Address_2', address2)
                .input('City', city)
                .input('Country', 'India')
                .input('Pincode', pincode)
                .input('Mobile_No', mobile)
                .input('Education', education)
                .input('Fathers_Name', father)
                .input('Mothers_Name', mother)
                .input('Spouse_Name', spouse)
                .input('Sex', gender)
                .input('Emp_Religion', religion)
                .input('Salary', salary)
                .input('Total_Loan', total_loan)
                .input('Salary_Advance', salary_advance)
                .input('Due_Loan', due_loan)
                .input('User_Mgt_Id', userId)
                .input('Entry_By', enter_by)
                .query(`
                    INSERT INTO tbl_Employee_Master (
                        Emp_Id, fingerPrintEmpId, Branch, Emp_Code, Emp_Name, Designation, DOB, DOJ, Address_1, Address_2, City,
                        Country, Pincode, Mobile_No, Education, Fathers_Name, Mothers_Name, Spouse_Name,
                        Sex, Emp_Religion, Salary, Total_Loan, Salary_Advance, Due_Loan, User_Mgt_Id, Entry_By, Entry_Date
                    ) VALUES(
                        @Emp_Id, @fingerPrintEmpId, @Branch, @Emp_Code, @Emp_Name, @Designation, @DOB, @DOJ, @Address_1, @Address_2, @City,
                        @Country, @Pincode, @Mobile_No, @Education, @Fathers_Name, @Mothers_Name, @Spouse_Name,
                        @Sex, @Emp_Religion, @Salary, @Total_Loan, @Salary_Advance, @Due_Loan, @User_Mgt_Id, @Entry_By, GETDATE()
                    ) `
                )

            if ((await empCreation).rowsAffected[0] > 0) {
                await transaction.commit();
                return success(res, 'New Employee Created')
            } else {
                await transaction.rollback();
                return failed(res, 'Employee Creation Failed')
            }

        } catch (e) {
            await transaction.rollback();
            return servError(e, res)
        }
    }

    const employeePut = async (req, res) => {
        const { data, ID } = req.body;
        const {
            branch, mobile, empname, designation,
            address1, address2, city, pincode, education,
            father, mother, spouse, gender, religion, salary, total_loan,
            salary_advance, due_loan, enter_by, fingerPrintEmpId, user_manage_id
        } = data;
        const dob = data.dob ? data.dob : null;
        const doj = data.doj ? data.doj : null;

        try {
            const getBranchCode = new sql.Request()
                .input('branch', branch)
                .query(`SELECT BranchCode, Company_id FROM tbl_Branch_Master WHERE BranchId = @branch`);
            const branchResult = await getBranchCode;

            if (branchResult.recordset.length === 0) {
                return invalidInput(res, 'Branch not Found')
            }

            const checkResult = new sql.Request()
                .input('mobile', mobile)
                .input('empId', user_manage_id)
                .query(`SELECT UserName FROM tbl_Users WHERE UserName = @mobile AND UDel_Flag = 0 AND UserId != @empId`);

            if ((await checkResult).recordset.length > 0) {
                return invalidInput(res, 'Mobile or UserName is Already Exists')
            }

            const transaction = new sql.Transaction();

            try {
                await transaction.begin();

                const request = await fetch(`${domain}api/masters/users`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        UserId: user_manage_id,
                        Name: empname,
                        UserName: mobile,
                        UserTypeId: 3,
                        Password: '123456',
                        BranchId: parseInt(branch)
                    })
                });

                const response = await request.json();

                if (!response.success) {
                    await transaction.rollback();
                    return failed(res, 'Error while Update User', response);
                }

                const empUpdate = new sql.Request(transaction)
                    .input('Emp_Id', ID)
                    .input('Branch', branch)
                    .input('Emp_Name', empname)
                    .input('Designation', designation)
                    .input('DOB', dob ? new Date(dob) : new Date())
                    .input('DOJ', doj ? new Date(doj) : new Date())
                    .input('Address_1', address1)
                    .input('Address_2', address2)
                    .input('City', city)
                    .input('Pincode', pincode)
                    .input('Mobile_No', mobile)
                    .input('Education', education)
                    .input('Total_Loan', total_loan)
                    .input('Salary_Advance', salary_advance)
                    .input('Due_Loan', due_loan)
                    .input('Father_Name', father)
                    .input('Mother_Name', mother)
                    .input('Spouse_Name', spouse)
                    .input('Sex', gender)
                    .input('Emp_Religion', religion)
                    .input('Salary', salary)
                    .input('Entry_By', enter_by)
                    .input('fingerPrintEmpId', fingerPrintEmpId)
                    .query(`
                        UPDATE 
                            tbl_Employee_Master 
                        SET 
                            Branch = @Branch,
                            Emp_Name = @Emp_Name,
                            Designation = @Designation,
                            ${dob ? `DOB = CONVERT(DATE, @DOB),` : ''}
                            ${doj ? `DOJ = CONVERT(DATE, @DOJ),` : ''}  
                            Address_1 = @Address_1, 
                            Address_2 = @Address_2, 
                            City = @City, 
                            Pincode = @Pincode,
                            Mobile_No = @Mobile_No, 
                            Education = @Education,
                            Total_Loan = @Total_Loan,
                            Salary_Advance = @Salary_Advance,
                            Due_Loan = @Due_Loan, 
                            Fathers_Name = @Father_Name, 
                            Mothers_Name = @Mother_Name,
                            Spouse_Name = @Spouse_Name, 
                            Sex = @Sex, 
                            Emp_Religion = @Emp_Religion, 
                            Salary = @Salary,
                            Entry_By = @Entry_By,
                            fingerPrintEmpId = @fingerPrintEmpId
                        WHERE 
                            Emp_Id = @Emp_Id`
                    )

                if ((await empUpdate).rowsAffected[0] > 0) {
                    await transaction.commit();
                    return success(res, 'Changes Saved')
                } else {
                    await transaction.rollback();
                    return failed(res, 'Failed to save in user')
                }

            } catch (ee) {
                await transaction.rollback();
                return servError(ee, res)
            }

        } catch (e) {
            servError(e, res)
        }
    }

    return {
        emp_designation,
        employeeGet,
        employeePost,
        employeePut,
    }
}


export default EmployeeController();