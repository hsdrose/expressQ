/**
 * Created by 桥下红药 on 2016/2/5 0005.
 */
var mongojs = require('mongojs');
var connect = require('./db/config/connect');
var db = mongojs(connect.mongo_dev.connStr);
exports.initCollection = function (){
    db.getCollectionNames(function (err,colls) {
        for(var i=0;i<colls.length;i++){
            db[colls[i]] = db.collection(colls[i]);
        }
    });
};

exports.db = db;

db.on('error', function (err) {
    console.log('database error', err)
});

db.on('connect', function () {
    console.log('mongodb connected')
});





