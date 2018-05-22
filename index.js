var express = require('express'),
app = express(),
con = require('./js/connections.js'),
query = require('./js/queries.js'),
mailer = require('./js/mailer.js');

app.get('/visits',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    console.log("Visits invoked");
    con.getdata(query.visits,function(result){
        console.log('Result', result);
        res.send(result);
    })
});
app.get('/askotp/:msg',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    var msg = req.params.msg
    mailer.sendmail(msg,function(content){
        res.send("Email telah terkirim : "+content);
    });
});
app.get('/checkotp/:otp',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    var otp = req.params.otp;
    con.getdata(query.checkOtp(otp),function(result){
        res.send(result);
    });
});
app.get('/confirmotp/:otp',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    var otp = req.params.otp;
    con.getdata(query.confirmOtp(otp),function(result){
        res.send(result);
    })
})
app.listen(process.env.PORT || 1946);