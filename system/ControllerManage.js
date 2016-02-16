/**
 * Controller 自动加载
 * 规定格式都是约定的
 * 使用首页或过滤器，请将路由文件名定义为 filter.js
 * 其余路由格式都是以 {文件夹}/{文件件...}/{文件名}的格式加载，类似于.net mvc
 *
 * app.js 调用
 * controller.loadController(app);
 *
 */
var fs = require('fs');
var path = require('path');
/*路由目录，一般不需要修改，直接在项目根目录下*/
var controllerDir = 'routes';
/*目录前缀，如果你的路由目录不在根目录下需要修改
* 这里的 ../ 是相对于bin 下的www.js 来说的，也就是 当前运行js
* */
var pref = '../';
var filter = 'filter';
/*
* 路由规则
* {文件夹}/{文件名}
* */
exports.loadController = function (app) {
    var routeDir = path.resolve(pref + controllerDir);
    load(app,routeDir);
};
function load(app,routeDir){
    var routes = fs.readdirSync(routeDir);
    for(var i = 0;i < routes.length;i++){
        var route =  routeDir + '/' + routes[i];
        var stat = fs.lstatSync(route);
        if(stat.isDirectory()){
            load(app,route)
        }else{
            var startPos = route.indexOf(controllerDir)+controllerDir.length+1;
            var routeName = route.substr(startPos).replace(/.js$/g,'').replace(/\\/g,'/');
            if(routeName==filter){
                routeName = '';
            }
            app.use('/'+routeName, require(route));
            console.log('Loading Routes.../'+routeName)
        }
    }
}