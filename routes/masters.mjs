import express from 'express';
import company from '../controller/Masters/company.mjs';
import branch from '../controller/Masters/branch.mjs';
import user from '../controller/Masters/user.mjs';
import userType from '../controller/Masters/userType.mjs';
import taskType from '../controller/Masters/taskType.mjs';
import baseGroup from '../controller/Masters/baseGroup.mjs';
import retailers from '../controller/Masters/retailers.mjs';
import products from '../controller/Masters/products.mjs';
import salesAppMasters from '../controller/Masters/salesAppMasters.mjs';
import retailerRoutes from '../controller/Masters/retailerRoutes.mjs';
import retailerClosingStock from '../controller/Masters/retailerClosingStock.mjs';

const MastersRouter = express.Router();

MastersRouter.get('/company', company.getCompany);
MastersRouter.post('/company', company.postCompany);
MastersRouter.put('/company', company.putCompany);
MastersRouter.delete('/company', company.deleteCompany);
MastersRouter.get('/company/dropDown', company.getCompanyDrowDown);


MastersRouter.get('/branch', branch.getBranch);
MastersRouter.post('/branch', branch.postBranch);
MastersRouter.put('/branch', branch.putBranch);
MastersRouter.delete('/branch', branch.deleteBranch);
MastersRouter.get('/branch/dropDown', branch.getBranchDrowDown);


MastersRouter.get('/users', user.getUsers);
MastersRouter.post('/users', user.postUser);
MastersRouter.put('/users', user.editUser);
MastersRouter.delete('/users', user.deleteUser);
MastersRouter.get('/user/dropDown', user.userDropdown);
MastersRouter.get('/users/customUsers', user.customUserGet);
MastersRouter.get('/users/employee/dropDown', user.employeeDropDown);
MastersRouter.get('/users/salesPerson/dropDown', user.getSalesPersonDropdown);
MastersRouter.put('/users/changePassword', user.changePassword);


MastersRouter.get('/userType', userType.getUserType);
MastersRouter.post('/userType', userType.postUserType);
MastersRouter.put('/userType', userType.editUserType);
MastersRouter.delete('/userType', userType.deleteUserType);


MastersRouter.get('/taskType', taskType.getTaskTyepe)
MastersRouter.get('/taskType/dropDown', taskType.TaskTypeDropDown)
MastersRouter.post('/taskType', taskType.postTaskType);
MastersRouter.put('/taskType', taskType.editTaskType);
MastersRouter.delete('/taskType', taskType.deleteTaskType);


MastersRouter.get('/baseGroup', baseGroup.getBaseGroup);
MastersRouter.post('/baseGroup', baseGroup.postBaseGroup);
MastersRouter.put('/baseGroup', baseGroup.editBaseGroup);
MastersRouter.delete('/baseGroup', baseGroup.deleteBaseGroup);


MastersRouter.get('/retailers', retailers.getSFCustomers);
MastersRouter.get('/retailers/dropDown', retailers.getRetailerDropDown);
MastersRouter.get('/retailers/areaRetailers', retailers.getAreaRetailers);
MastersRouter.get('/retailers/info', retailers.getRetailerInfo);
MastersRouter.post('/retailers', retailers.addRetailers);
MastersRouter.put('/retailers', retailers.putRetailers);
MastersRouter.post('/retailers/location', retailers.postLocationForCustomer);
MastersRouter.put('/retailers/location', retailers.verifyLocation);
MastersRouter.put('/retailers/visitLogToRetailer', retailers.convertVisitLogToRetailer);
MastersRouter.get('retailers/closingStock', retailerClosingStock.getClosingStockValues);
MastersRouter.get('/retailers/closingStock/productBased', retailerClosingStock.getRetailerPreviousClosingStock);
MastersRouter.get('/retailers/closingStock/myEntry', retailerClosingStock.getSalesPersonEnteredClosingStock);
MastersRouter.post('/retailers/closingStock', retailerClosingStock.closeingStock);
MastersRouter.put('/retailers/closingStock', retailerClosingStock.closeingStockUpdate);


MastersRouter.get('/products', products.getProducts);
MastersRouter.get('/products/grouped', products.getGroupedProducts);
MastersRouter.get('/products/productGroups', products.getProductGroups);
MastersRouter.get('/products/packs', products.getProductPacks);
MastersRouter.post('/products', products.postProductsWithImage);
MastersRouter.post('/products/withoutImage', products.postProductsWithImage);
MastersRouter.put('/products', products.updateProduct);
MastersRouter.put('/products/productImage', products.updateProductImages);


MastersRouter.get('/routes', retailerRoutes.getRoutes);
MastersRouter.post('/routes', retailerRoutes.addRoutes);


MastersRouter.get('/state', salesAppMasters.getStates);
MastersRouter.get('/district', salesAppMasters.getDistricts);
MastersRouter.get('/areas', salesAppMasters.getAreas);
MastersRouter.get('/outlets', salesAppMasters.getOutlet);
MastersRouter.get('/distributors', salesAppMasters.getDistributors);



export default MastersRouter;

