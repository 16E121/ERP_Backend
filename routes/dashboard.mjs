import express from 'express';
import DashboardController from '../controller/Dashboard/counts.mjs' 
const DashboardRouter = express.Router();
import dbconnect from '../middleware/otherDB.mjs';

DashboardRouter.get('/dashboardData', DashboardController.getDashboardData);
DashboardRouter.get('/getTallyData', DashboardController.getTallyWorkDetails);
DashboardRouter.get('/employeeAbstract', DashboardController.getEmployeeAbstract);
DashboardRouter.get('/erp/dashboardData', DashboardController.getERPDashboardData);
DashboardRouter.get('/salesInfo', dbconnect, DashboardController.getSalesInfo);



export default DashboardRouter;