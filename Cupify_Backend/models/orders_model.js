const db = require('../config/dbconnect');

const getOrderById = (orderId, callback) => {
    const query = `SELECT * FROM cupify_orders_status_table where order_no="${orderId}"`
    db.query(query, (err, result) => {
        if (err) {
            return callback(err, null)
        }
        callback(null, result)
    })
}

module.exports = { getOrderById};