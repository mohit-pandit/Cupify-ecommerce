const express = require("express");
const orderController = require('../controllers/orderController')


const router = express.Router();

router.get('/GetCupifyOrders',orderController.getCupifyOrderDetails);
// router.post('/BookItemOrder',orderController.BookCupifyOrder)
router.get('/TrackItemOrder',orderController.TrackCupifyOrder)

module.exports = router