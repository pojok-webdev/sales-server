mysql = require("promise-mysql"),
config = require("./configs.js");
getdata = function(sql,callback){
    con = mysql.createConnection({
        host:config.host,
        database:config.database,
        user:config.user,
        password:config.password
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