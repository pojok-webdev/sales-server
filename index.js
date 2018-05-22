var express = require('express'),
app = express(),
con = require('./js/connections.js'),
query = require('./js/queries.js');

app.get('/visits',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    console.log("Visits invoked");
    con.getdata(query.visits,function(result){
        console.log('Result', result);
        res.send(result);
    })
});
app.listen(process.env.PORT || 1946);