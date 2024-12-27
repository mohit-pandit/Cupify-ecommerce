const db = require('../config/dbconnect');

const InsertOrderInDB = (bodypayload,callback)=>{
    console.log("line 4 bodypayload",bodypayload)
    const query = `INSERT INTO cupify_orders_table set `
    db.query(query,bodypayload,(err,result)=>{
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

module.exports = { InsertOrderInDB, getOrderById};