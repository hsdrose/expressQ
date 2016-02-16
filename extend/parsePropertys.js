/**
 * Created by 桥下红药 on 2015/7/23 0023.
 * 同步解析 propertys 文件
 */
var fs = require('fs');
exports.parse = function (uri, encoding) {

    try {
        var encoding = encoding == null ? 'UTF-8' : encoding;
        var content = fs.readFileSync(uri, encoding);
        var regexjing = /\s*(#+)/;
        var regexkong = /\s*=\s*/;
        var keyvalue = {};
        var arr_case = null;
        var regexline = /.+/g;
        while (arr_case = regexline.exec(content)) {
            if (!regexjing.test(arr_case)) {
                keyvalue[arr_case.toString().split(regexkong)[0]] = arr_case.toString().split(regexkong)[1];
            }
        }
    } catch (e) {
        return null;
    }
    return keyvalue;
};