import sql from 'mssql';
import { dataFound, failed, invalidInput, noData, servError, success } from '../../res.mjs'

const retailerRoutes = () => {

    const getRoutes = async (req, res) => {
        
        try {
            const result = await sql.query('SELECT * FROM tbl_Route_Master');
            
            if (result.recordset.length) {
                dataFound(res, result.recordset);
            } else {
                noData(res)
            }
        } catch (e) {
            servError(e, res)
        }
    } 

    const addRoutes = async (req, res) => {
        const { Route_Name } = req.body;

        if (!Route_Name) {
            return invalidInput(res, 'Route_Name is required')
        }

        try {
            const request = new sql.Request()
                .input('route', Route_Name)
                .query(`
                    INSERT INTO tbl_Route_Master
                        (Route_Name)
                    VALUES
                        (@route)`)

            const result = await request;

            if(result.rowsAffected[0] && result.rowsAffected[0] > 0) {
                success(res, 'new Route Created')
            } else {
                failed(res, 'Failed to create Route')
            }
            
        } catch (e) {
            servError(e, res)
        }
    }

    return {
        getRoutes,
        addRoutes
    }
}

export default retailerRoutes();