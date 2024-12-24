const express = require('express');
// const auth = require('./auth');
// const itemListing = require('./Items_listing');
const ItemOrders = require('./orders');
// const payment = require('./payment');

const router = express.Router();

// router.use('/auth',auth)
// router.use('/Items',itemListing)
router.use('/Orders',ItemOrders)
// router.use('/Payment',payment)

module.exports = router;