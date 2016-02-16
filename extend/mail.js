/**
 * Created by Administrator on 2015/5/5 0005.
 * 发送邮件类
 */
var nodemailer  = require("nodemailer");
//配置在线发送邮件账户

var transporter = null;

exports.send=function(sendToEmail,title,text,callback){
    if(transporter  === null){
        transporter = nodemailer.createTransport({
            service: 'QQ',
            auth:{
                user: '1121744186@qq.com',
                pass: ''
            }
        });
    }
    transporter.sendMail({
        from: '1121744186@qq.com',
        to: sendToEmail,
        subject: title,
        html: text
    },function(err){
        callback(err)
    });

};