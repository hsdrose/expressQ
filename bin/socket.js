/**
 * Created by ���º�ҩ on 2015/9/23 0023.
 * socket.io 伴随 http 启动
 */
var www = require('./www');
var io = require('socket.io')(www.Server);
io.on('connection', function (socket) {
    console.log('连接上socket.io');
    socket.on('msg', function (obj) {
        console.log(obj)
    })
});

exports.io = io;


////�����û�
//var onlineUsers = {};
//var sk = {};
////��ǰ��������
//var onlineCount = 0;
//io.on('connection', function(socket){
//
//    //�������û�����
//    socket.on('login', function(obj){
//        //console.log('�µ����Ӽ���'+obj)
//        //sk[obj.username]=socket;
//        ////���¼����û���Ψһ��ʶ����socket�����ƣ������˳���ʱ����õ�
//        //socket.name = obj.userid;
//        ////��������б������������ͼ���
//        //if(!onlineUsers.hasOwnProperty(obj.userid)) {
//        //    onlineUsers[obj.userid] = obj.username;
//        //    //��������+1
//        //    onlineCount++;
//        //}
//        //socket.broadcast.emit('login', {onlineUsers:onlineUsers, onlineCount:onlineCount, user:obj});
//        console.log(encodeURI("����"))
//        socket.broadcast.emit('login', "%EF%BF%BD%EF%BF%BD%EF%BF%BD%EF%BF%BD");
//    });
//
//    //�����û��˳�
//    socket.on('disconnect', function(){
//        //���˳����û��������б���ɾ��
//        if(onlineUsers.hasOwnProperty(socket.name)) {
//            //�˳��û�����Ϣ
//            var obj = {userid:socket.name, username:onlineUsers[socket.name]};
//
//            //ɾ��
//            delete onlineUsers[socket.name];
//            //��������-1
//            onlineCount--;
//
//            //�����пͻ��˹㲥�û��˳�
//            io.emit('logout', {onlineUsers:onlineUsers, onlineCount:onlineCount, user:obj});
//            console.log(obj.username+'�˳���������');
//        }
//    });
//
//    //�����û�������������
//    socket.on('message', function(obj){
//        //�����пͻ��˹㲥��������Ϣ
//        console.log(obj.content)
//        var star = obj.content.indexOf('@');
//        var end = obj.content.indexOf('/');
//        var u;//Ҫ@���û�
//        var t=false;
//        if(star==0||end>0&&end!=-1){
//            u=obj.content.substring(star+1,end);
//
//
//            if(sk[u]==undefined){
//
//            }else{
//                obj.content=obj.content.substring(end+1,obj.content.length);
//                t=true;
//
//            }
//
//        }
//        //console.log(star+'  '+end+'  '+u);
//        if(t){
//            //console.log('=============================================================================');
//            //console.log(sk[u]);
//            var num = Math.random()*100 + 10000;
//            sk[obj.username].join(num);//�������һ������
//            sk[u].join(num);
//            io.sockets.in(num).emit('message',obj);
//        }else{
//            io.emit('message', obj);
//        }
//
//        //console.log(obj.username+'˵��'+obj.content);
//    });
//
//});
