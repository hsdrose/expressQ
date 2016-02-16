var log4js = require('log4js');
/*
* 如何使用
* var log = require('当前文件')
* log.fatal('数据库连接异常');
* log.error('数据库连接异常');
* 日志目录一定要存在
*
* */
log4js.configure({
    appenders: [
        { type: 'console' }, {
            type: 'dateFile',
            filename: '../logs/log', //日志保存位置
            pattern: "_yyyy-MM-dd",
            maxLogSize: 1024,
            alwaysIncludePattern: false,
            backups: 4,
            category: 'trace'
        }
    ],
    replaceConsole: true
});
module.exports = log4js.getLogger("trace");

////log4js的输出级别6个: trace, debug, info, warn, error, fatal
//
//logger.trace(‘Entering cheese testing’);
//
//logger.debug(‘Got cheese.’);
//
//logger.info(‘Cheese is Gouda.’);
//
//logger.warn(‘Cheese is quite smelly.’);
//
//logger.error(‘Cheese is too ripe!’);
//
//logger.fatal(‘Cheese was breeding ground for listeria.’);