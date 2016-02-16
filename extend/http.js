/**
 * Created by ���º�ҩ on 2016/1/30 0030.
 */
var iconv = require("iconv-lite");
iconv.extendNodeEncodings();
var cheerio = require('cheerio');
var http = require('request');
exports.get = function (url, encoding, cb) {
    var opt = {
        url: url,
        encoding: encoding,
        headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Referer':url,
            'Accept-Language': 'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',
            'content-encoding': encoding,
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:42.0) Gecko/20100101 Firefox/42.0'
        }
    };
    http(opt, function (error, response, body) {


        if (response.statusCode == 200) {
            return cb(body);
        }
        return null;
    });
};