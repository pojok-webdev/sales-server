mysql = require("promise-mysql"),
config = require("./configs.js");
getdata = function(sql,callback){
    con = mysql.createConnection({
        host:config.mysql.host,
        database:config.mysql.database,
        user:config.mysql.user,
        password:config.mysql.password
    })
    .then(function(cn){
        var result = cn.query(sql);
        cn.end();
        return result;
    })
    .then(function(rows){
        callback(rows);
    })
    .error(function(err){
        console.log('Connection error',err);
    })
};
module.exports = {
    getdata: getdata
};