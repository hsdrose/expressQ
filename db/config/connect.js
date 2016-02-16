/**
 * Created by 桥下红药 on 2016/1/30 0030.
 *
 * 数据库连接配置
 *
 */
/*
 * 更多数据库参数
 * port 端口 默认：3306
 * charset：连接字符集（默认：'UTF8_GENERAL_CI'，注意字符集的字母都要大写）
 * localAddress：此IP用于TCP连接（可选）
 * socketPath：连接到unix域路径，当使用 host 和 port 时会被忽略
 * timezone：时区（默认：'local'）
 * connectTimeout：连接超时（默认：不限制；单位：毫秒）
 * stringifyObjects：是否序列化对象（默认：'false' ；与安全相关https://github.com/felixge/node-mysql/issues/501）
 * typeCast：是否将列值转化为本地JavaScript类型值 （默认：true）
 * supportBigNumbers：数据库支持bigint或decimal类型列时，需要设此option为true （默认：false）
 * bigNumberStrings：supportBigNumbers和bigNumberStrings启用 强制bigint或decimal列以JavaScript字符串类型返回（默认：false）
 * dateStrings：强制timestamp,datetime,data类型以字符串类型返回，而不是JavaScript Date类型（默认：false）
 * debug：开启调试（默认：false）
 * multipleStatements：是否许一个query中有多个MySQL语句 （默认：false）
 * */
exports.mysql_dev = {
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:'root',
    database:'abc',
    connectionLimit:'100',
    supportBigNumbers:'true'

};

/*
* Redis 数据库配置
*
*/
exports.redis_dev = {
    host: '127.0.0.1',   // Redis host
    port: 6379,          // Redis port
    family: 4,       // 4 (IPv4) or 6 (IPv6)
    password:'123456' //pass 如果redis 未开启密码验证 这里随意填
};

/*
* Mongodb 数据库配置
* 连接字符串
* username:password@example.com/mydb
* username:password@example.com:port/mydb
* username:password@example.com/mydb?authSource=authdb
* username:password@example.com/mydb?authMechanism=SCRAM-SHA-1
*/
exports.mongo_dev = {

    connStr : 'mongodb://node.lmcw.cn:10086/myproject'
};