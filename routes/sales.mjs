import express from 'express';
import salesOrder from '../controller/Sales/salesOrder.mjs';

const SalesRouter = express.Router();

SalesRouter.get('/saleOrder', salesOrder.getSaleOrder);
SalesRouter.get('/saleOrder/areaBased', salesOrder.salerOrderAreaWiseReport);
SalesRouter.post('/saleOrder', salesOrder.saleOrderCreation);
SalesRouter.put('/saleOrder', salesOrder.editSaleOrder);


export default SalesRouter;