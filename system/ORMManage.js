/**
 * Created by 桥下红药 on 2016/2/2 0002.
 *
 * 该类自动从 模型目录 加载模型
 *
 * 1)约定协议是 模型文件要与 其代码 里的 模型名称 一样
 * 2)代码里模型名称只允许小写
 * 如：db.define('admin', {......}
 * 3)模型目录下如果存在目录并不会被加载
 * 4)文件名称不区分大小写，全都自动转换小写，所有注意重复覆盖
 */
var orm = require('orm');
var fs = require('fs');
var path = require('path');
var mysql_conf = require('../db/config/connect');
/*模型目录*/
var m = 'models';
/*目录前缀，如果你的模型目录不在根目录下需要修改*/
var pref = '../';
exports.loadModels = function (app) {
    var dataBaseURI = "mysql://" + mysql_conf.mysql_dev.user + ":" +
        mysql_conf.mysql_dev.password + "@" + mysql_conf.mysql_dev.host + ":" +
        mysql_conf.mysql_dev.port + "/" + mysql_conf.mysql_dev.database;

    app.use(orm.express( dataBaseURI, {
        define: function (db, models, next) {
            //加载文件
            loadFile(db,models);
            next();
        }
    }));

};
//自动查找数据库映射模型加载
function loadFile (db,models) {
    var modelsDir = path.resolve(pref + m);
    var files = fs.readdirSync(modelsDir);
    for(var i = 0;i < files.length;i++){
        var filePath =  modelsDir + '/' + files[i];
        var stat = fs.lstatSync(filePath);
        if(stat.isDirectory()){
            continue;
        }else{
            var startPos = filePath.indexOf(m)+m.length+1;
            var fileName = filePath.substr(startPos).replace(/.js$/g,'').replace(/\\/g,'/');
            db.load(pref + m+'/'+fileName, function (err) {
                if (err) {
                    console.log('加载数据模型失败。'+filePath);
                    return;
                }
                models[fileName.toLowerCase()] = db.models[fileName.toLowerCase()];
                console.log('装载数据库模型:'+fileName.toLowerCase());
            });
        }
    }
}


