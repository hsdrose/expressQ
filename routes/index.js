
var express = require('express');
var router = express.Router();

var db = require('../db/mysql/DBHelper');
var redis = require('../db/redis/redisHelper');
//var mongo = require('../test').initCollection();
/* GET home page. */
router.get('/', function(req, res) {
    //db.exQuery([20,10],'select * from userinfo where id limit ?,?', function (err,result) {
    //    res.send(result)
    //})

    //req.models.userinfo.get(2, function (err,ret) {
    //    res.send(ret)
    //})

    //redis.setString("myobj",'我是值');
    //redis.getString('myobj', function (ret) {
    //    res.send(ret)
    //});
    //require('../test').find2(function (result) {
    //    res.send(result)
    //})



});

module.exports = router;
