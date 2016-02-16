/**
 * Created by 桥下红药 on 2016/1/30 0030.
 */

var express = require('express');
var router = express.Router();

router.get('/', function(req, res,next) {

    console.log('come in filter');
    next();
});

router.get('/', function (req,res) {
    res.render('index',{title:'欢迎使用Express'})
});

module.exports = router;