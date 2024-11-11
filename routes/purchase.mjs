import express from 'express';
import purchaseOrder from '../controller/Purchase/purchaseOrder.mjs';

const PurchaseRoute = express.Router();

PurchaseRoute.get('/purchaseOrder', purchaseOrder.getPurchaseOrder);
PurchaseRoute.post('/purchaseOrder', purchaseOrder.purchaseOrderCreation);
PurchaseRoute.put('/purchaseOrder', purchaseOrder.editPurchaseOrder);


export default PurchaseRoute;