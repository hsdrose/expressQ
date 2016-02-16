/**
 * Created by 桥下红药 on 2016/2/2 0002.
 */
var Redis = require('ioredis');
var connect = require('../config/connect');

exports.setString = function (key,value,time) {
    var redis = new Redis(connect.redis_dev);
    if(typeof value === Object){
        value = JSON.stringify(value);
    }
    redis.set(key,value);
    if(time!=undefined&&time!=null&&isNaN(time)){
        redis.expires(key,time);
    }
    redis.quit();
};

/* 存一个对象 */
exports.setMap = function (map) {
    var redis = new Redis(connect.redis_dev);
    redis.pipeline().mset(map).exec();
    redis.quit();
};

/*设置key过期时间*/
exports.setTime = function (key,time) {
    var redis = new Redis(connect.redis_dev);
    if(time!=undefined&&time!=null&&isNaN(time)){
        redis.expires(key,time);
    }
    redis.quit();
};

exports.getMap = function (key,cb) {
    var redis = new Redis(connect.redis_dev);
    redis.get(key,function (err,result) {
        redis.quit();
        if(err){
            console.log(key + '获取失败');
            return cb(null);
        }

        cb(JSON.parse(result));
    })
};

exports.getString = function (key,cb) {
    var redis = new Redis(connect.redis_dev);
    redis.get(key,function (err,result) {
        redis.quit();
        if(err){
            console.log(key + '获取失败');
            return cb(null);
        }

        cb(result);
    })
};

exports.delKey = function (key) {
    var redis = new Redis(connect.redis_dev);
    redis.del(key);
    redis.quit();
};

