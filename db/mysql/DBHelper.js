var db=require('../mysql/pool');
var _ = require('underscore');
/*
 * 执行查询操作
 *
 */
exports.exQuery =function(param, sql, callback) {
    db.pool().getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        connection.query(sql,param, function(err, results) {
            connection.release();
            if (err) {
                callback(true);
                return;
            }
            if(results.length>1){
                callback(false, results);
                return;
            }
            if(results.length==0){
                callback(false, null);
                return;
            }
            callback(false, results[0]);
        });

    });
};

/*
 * 执行插入、更新,删除操作
 * 如：exUpdate(['张三',1],'insert info table(name,id) values(?,?)')
 * 返回格式：
 * {"fieldCount":0,"affectedRows":1,"insertId":4,"serverStatus":2,"warningCount":0,"message":"","protocol41":true,"changedRows":0}
 *
 */
exports.exUpdate =function(param, sql, callback) {
    db.pool().getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        connection.query(sql,param, function(err, results) {
            connection.release();
            if (err) {
                callback(true);
                return;
            }
            callback(false, results);
        });

    });
};
