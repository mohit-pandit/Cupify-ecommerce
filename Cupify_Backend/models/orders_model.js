const moment = require('moment');
const db = require('../config/dbconnect');

const InsertOrderInDB = (bodypayload, callback) => {
    let date = new Date();
    let OrderDate = moment(date).format('DD-MM-YYYY HH:MM:SS')
    console.log("line 4 bodypayload", bodypayload)
    let { item_name, description, total_price, discounted_price, any_discount, quantity, address, city, pincode, mobile,
        order_no, payment_amount, payment_method, Transaction_id
    } = bodypayload;
    const query = `INSERT INTO cupify_orders_table 
    (item_name,description,total_price,discounted_price,any_discount,quantity,address,city,pincode,mobile,order_no,order_date,order_status,payment_amount,payment_method,Transaction_id)
         VALUES
     ('${item_name}','${description}','${total_price}','${discounted_price}','${any_discount}','${quantity}','${address}','${city}','${pincode}','${mobile}','${order_no}','${OrderDate}','${'order_received'}','${payment_amount}','${payment_method}','${Transaction_id}')`

    db.query(query, bodypayload, (err, result) => {
        if (err) {
            return callback(err, null)
        }
        callback(null, result)
    })
}

const getOrderById = (orderId, callback) => {
    const query = `SELECT * FROM cupify_orders_status_table where order_no="${orderId}"`
    db.query(query, (err, result) => {
        if (err) {
            return callback(err, null)
        }
        callback(null, result)
    })
}

module.exports = { InsertOrderInDB, getOrderById };