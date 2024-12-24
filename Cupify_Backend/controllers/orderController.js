const { getOrderById } = require("../models/orders_model");

const getCupifyOrderDetails = (req, res) => {
    const orderId = req.query.orderId;

    if (!orderId) {
        return res.status(400).json({
            status: false,
            data: '',
            message: 'Order Id is Required'
        });
    }

    getOrderById(orderId, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                status: false,
                data: '',
                message: 'Database Error : Something went wrong',
            });
        }

        if (result.length === 0) {
            return res.status(404).json({
                status: false,
                data: '',
                message: 'Order not found'
            });
        }

        res.status(200).json({
            status: true,
            data: result,
            message: 'Order Details Found'
        });
    });
};

const TrackCupifyOrder = (req, res) => {
    const orderId = req.query.orderId;

    if (!orderId) {
        return res.status(400).json({
            status: false,
            data: '',
            message: 'Order Id is Required'
        });
    }

    getOrderById(orderId, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                status: false,
                data: '',
                message: 'Database Error : Something went wrong',
            });
        }

        if (result.length === 0) {
            return res.status(404).json({
                status: false,
                data: '',
                message: 'Order not found'
            });
        }

        const {
            id,
            item_name,
            discounted_price: price,
            quantity,
            address,
            city,
            pincode,
            mobile,
            order_no,
            order_date,
            order_status
        } = result[0];

        res.status(200).json({
            status: true,
            data: { id, item_name, price, quantity, address, city, pincode, mobile, order_no, order_date, order_status },
            message: 'Order Details Found'
        });
    });
};

// Export both functions
module.exports = { getCupifyOrderDetails, TrackCupifyOrder };
