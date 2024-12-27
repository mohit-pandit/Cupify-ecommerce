const logger = require("express-logger");
const { getOrderById } = require("../models/orders_model");

const BookCupifyOrder = (req, res) => {
    try {
        logger.info("Cupify Item Order payload", req.body)
        const bodyPayload = req?.body
        if (bodyPayload?.length === 0) {
            return res.status(400).json({
                status: false,
                code: 400,
                data: '',
                message: "Missing params"
            })
        }

        InsertOrderInDB(bodyPayload, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    status: false,
                    code: 500,
                    data: '',
                    message: 'Database Error : Something went wrong',
                });
            }
            res.status(200).json({
                status: true,
                code: 200,
                data: '',
                message: 'Order Received Inserted Successfully'
            });
        })

    } catch (err) {
        logger.info("Cupify Item Order payload error", err)
    }
}

const getCupifyOrderDetails = (req, res) => {
    const orderId = req.query.orderId;

    if (!orderId) {
        return res.status(400).json({
            status: false,
            code: 400,
            data: '',
            message: 'Order Id is Required'
        });
    }

    getOrderById(orderId, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                status: false,
                code: 500,
                data: '',
                message: 'Database Error : Something went wrong',
            });
        }

        if (result.length === 0) {
            return res.status(404).json({
                status: false,
                code: 404,
                data: '',
                message: 'Order not found'
            });
        }

        res.status(200).json({
            status: true,
            code: 200,
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
            code: 400,
            data: '',
            message: 'Order Id is Required'
        });
    }

    getOrderById(orderId, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                status: false,
                code: 500,
                data: '',
                message: 'Database Error : Something went wrong',
            });
        }

        if (result.length === 0) {
            return res.status(404).json({
                status: false,
                code: 404,
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
            code: 200,
            data: { id, item_name, price, quantity, address, city, pincode, mobile, order_no, order_date, order_status },
            message: 'Order Details Found'
        });
    });
};


module.exports = { BookCupifyOrder, getCupifyOrderDetails, TrackCupifyOrder };
