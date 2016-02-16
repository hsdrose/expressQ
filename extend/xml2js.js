/**
 * Created by Administrator on 2015/6/9 0009.
 */

var fs = require('fs'),
    xml2js = require('xml2js');

//保存为xml
exports.buildXml= function (obj,toPath) {
    var builder = new xml2js.Builder();
    var xml = builder.buildObject(obj);
    fs.writeFile(toPath,xml, function (err) {
        if (err) throw err;
    });
};
//读取xml
exports.buildJson= function (xmlPath,callback) {
    var parseString = xml2js.parseString;
    fs.readFile(xmlPath, function (err,data) {
        var xml = data.toString('utf-8',0,data.length);
        parseString(xml, function (err, result) {
            callback(result);
        });
    });
};
