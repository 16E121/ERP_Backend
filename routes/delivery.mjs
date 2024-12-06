import express from 'express';

import dbconnect from '../middleware/otherDB.mjs';

import deliverOrder from '../controller/Delivery/deliveryOrder.mjs'

const DeliveryRouter = express.Router();

DeliveryRouter.get('/deliveryOrder', deliverOrder.getSaleOrder);
DeliveryRouter.post('/deliveryOrder', deliverOrder.salesDeliveryCreation);
DeliveryRouter.put('/deliveryOrder', deliverOrder.editDeliveryOrder);
DeliveryRouter.get('/deliveryOrderList', deliverOrder.getDeliveryorder);
DeliveryRouter.delete('/deliveryOrder', deliverOrder.deleteDeliveryOrder);
DeliveryRouter.put('/deliveryOrderMobile', deliverOrder.editmobileApi);


// DeliveryRouter.get('/deliveryOrder', deliverOrder.getSaleOrder);

export default DeliveryRouter;