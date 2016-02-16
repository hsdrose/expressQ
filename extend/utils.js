/*
 * 常用工具类
 *
 * */

var crypto = require('crypto');

exports.MD5 = function (str) {
    return crypto.createHash('md5').update(str).digest('hex');
};

//随机函数
exports.randomStrByLength = function (length) {
    return randomStr(length);
};
/*拼接当前时间MD5*/
exports.cryptoStrByTime = function (str) {
    return this.MD5(str + new Date().getTime() + str);
};

/* Unicode &#x编码转换中文代码  */
exports.unicodeDecode = function (str) {
    var textUTF8 = unescape(str.replace(/&#x/g,'%u').replace(/;/g,'').replace(/%uA0/g,' '));
    return textUTF8;
};

/* 格式化时常 00:00:00 */
exports.formatDuring = function (long) {
    var days = long / (1000 * 60 * 60 * 24);
    var hours = (long % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
    var  minutes = (long % (1000 * 60 * 60)) / (1000 * 60);
    var seconds = (long % (1000 * 60)) / 1000;
    var map = {};
    map["days"] = Math.round(days);
    map["hours"] = Math.round(hours);
    map["minutes"] = Math.round(minutes);
    map["seconds"] = Math.round(seconds);
    return map;
};

function randomStr(length) {
    var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var rand = "";
    for (var i = 0; i < length; i++) {
        var id = Math.ceil(Math.random() * 35);
        rand += chars[id];
    }
    return rand;
}

exports.randomNumber =function (length){
    var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var rand = "";
    for (var i = 0; i < length; i++) {
        var id = Math.ceil(Math.random() * 35);
        rand += chars[id];
    }
    return rand;
};