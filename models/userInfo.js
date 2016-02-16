/**
 * Created by 桥下红药 on 2016/2/2 0002.
 * 数据库模型实例
 */
module.exports = function (db, cb) {
    db.define('userinfo', {
        id:Number,
        age:Number,
        name : String
    });
    return cb();
};