var mysql = require('mysql');
var connect = require('../config/connect');
var pool = null;
exports.pool = function () {
    if(pool!=null){
        return pool;
    }
    pool = mysql.createPool(connect.mysql_dev);
    return pool;
};

