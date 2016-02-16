/**
 * Created by ÇÅÏÂºìÒ© on 2016/1/30 0030.
 * express cookie ²Ù×÷
 */
//Ìí¼Ócookie
exports.addCookie= function (req,res,time,key,value) {
    if(typeof time != 'number'){
        time = 60 * 60 * 24 * 1000
    }
    res.cookie(key,encodeURIComponent(value),{ maxAge: time,httpOnly:true});
};
//É¾³ýcookie
exports.delCookie= function (req,res,key) {
    res.cookie(key,"",{ maxAge: 0,httpOnly:true});
};
exports.findCookie= function (req,key) {
    return req.cookies[key];
};
