import sql from 'mssql'
import { servError, dataFound, noData, invalidInput, success, failed } from '../../res.mjs';
import { checkIsNumber } from '../../helper_functions.mjs';
import { getUserType } from '../../middleware/miniAPIs.mjs';
import uploadFile from '../../middleware/uploadMiddleware.mjs';
import path from "path";
import fs from 'fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const domain = process.env.domain

const newAttendance = () => {

    const addAttendance = async (req, res) => {

        try {
            await uploadFile(req, res, 2, 'Start_KM_Pic');

            const fileName = req?.file?.filename;
            const filePath = req?.file?.path;

            const { UserId, Start_KM, Latitude, Longitude } = req.body;

            if (!checkIsNumber(UserId)) {
                return invalidInput(res, 'UserId is required');
            }

            const isSalesPerson = (await getUserType(UserId)) === 6 ? 1 : 0;

            const request = new sql.Request()
                .input('user', UserId)
                .input('date', new Date())
                .input('startkm', Start_KM)
                .input('latitude', Latitude)
                .input('longitude', Longitude)
                .input('imgname', fileName)
                .input('imgpath', filePath)
                .input('salesPerson', isSalesPerson)
                .input('status', 1)
                .query(`
                    INSERT INTO tbl_Attendance_Staff 
                        (UserId, Start_Date, Start_KM, Latitude, Longitude, Start_KM_ImageName, Start_KM_ImagePath, IsSalesPerson, Active_Status)
                    VALUES 
                        (@user, @date, @startkm, @latitude, @longitude, @imgname, @imgpath, @salesPerson, @status)`)

            const result = await request;

            if (result.rowsAffected[0] && result.rowsAffected[0] > 0) {
                success(res, 'Attendance Noted!')
            } else {
                failed(res, 'Failed to Add Attendance')
            }
        } catch (e) {
            servError(e, res);
        }
    }

    const getMyLastAttendance = async (req, res) => {
        const { UserId } = req.query;

        if (!checkIsNumber(UserId)) {
            return invalidInput(res, 'UserId is required')
        }

        try {
            const request = new sql.Request()
                .input('user', UserId)
                .query(`
                    SELECT 
                        TOP (1) * 
                    FROM 
                        tbl_Attendance_Staff 
                    WHERE 
                        UserId = @user
                        AND
                        Active_Status = 1`);
                        
            const result = await request;

            if (result.recordset.length > 0) {
                const defaultImageUrl = domain + '/imageURL/imageNotFound.jpg';
                const withImg = result.recordset.map(o => {
                    const startImageUrl = domain + '/imageURL/attendance/' + o?.Start_KM_ImageName;
                    const endImageUrl = domain + '/imageURL/attendance/' + o?.End_KM_ImageName;
                    const startImagePath = path.join(__dirname, '..', '..', 'uploads', 'attendance', o?.Start_KM_ImageName ? o?.Start_KM_ImageName : '');
                    const endImagePath = path.join(__dirname, '..', 'uploads', 'attendance', o?.End_KM_ImageName ? o?.End_KM_ImageName : '');
                    return {
                        ...o,
                        startKmImageUrl:
                            o.Start_KM_ImageName
                                ? fs.existsSync(startImagePath)
                                    ? startImageUrl
                                    : defaultImageUrl
                                : defaultImageUrl,
                        endKmImageUrl:
                            o.End_KM_ImageName
                                ? fs.existsSync(endImagePath)
                                    ? endImageUrl
                                    : defaultImageUrl
                                : defaultImageUrl,
                    }
                });
                dataFound(res, withImg)
            } else {
                noData(res)
            }
        } catch (e) {
            servError(e, res);
        }
    }

    return {
        addAttendance,
    }
}

export default newAttendance()