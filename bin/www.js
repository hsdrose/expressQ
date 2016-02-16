var app = require('../app');
var os = require('os');
//if (cluster.isMaster) {
//    for (var i = 0, n = os.cpus().length; i < n; i += 1){
//        var worker = cluster.fork();
//    }
//    cluster.on('listening', function(worker, address) {
//        console.log("node.js "+worker.id+" 线程已启动");
//        if(worker.id==os.cpus().length){
//            console.log("=====本程序采用 "+os.cpus().length+" 线程强力驱动=====")
//        }
//    });
//} else {
//    app.listen(3000, function() {
//    });
//}
var server = app.listen(3000, function() {
    console.log('网站启动成功')
});
exports.Server = server;



