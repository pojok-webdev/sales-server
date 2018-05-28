var express = require('express'),
app = express(),
con = require('./js/connections.js'),
query = require('./js/queries.js'),
bodyParser = require('body-parser'),
mailer = require('./js/mailer.js'),
otp = require('./js/otp.js');
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.post('/reqotp',function(req,res){
    clientname = req.body.clientname;
    address = req.body.address;
    phone = req.body.phone;
    latitude = req.body.latitude;
    longitude = req.body.longitude;
    sender = req.body.sender;
    _otp = otp.get();
    con.getdata(query.saveRequest(clientname,address,phone,latitude,longitude,_otp,sender),function(result){
        console.log("Save Result",result);
        mail = {
            to : phone,
            msg : "OTP PadiNET : "+_otp
        }
        mailer.sendmail(mail,function(content){
            res.send("OTP PadiNET : "+_otp);
        });
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
console.log("Receive OTP",otp);
    con.getdata(query.confirmOtp(otp),function(result){
console.log("Query invoked",query.confirmOtp(otp));
        res.send(result);
    })
})
app.post('/checkclient',function(req,res){
    par = req.body.par;
    con.getdata(query.checkClient(par),function(result){
        console.log("Pelanggan",result);
res.send(result);
    });
})
app.get('/checkclientexist/:par',function(req,res){
    par = req.params.par;
    con.getdata(query.checkClient(par),function(result){
        console.log("Pelanggan",result);
        res.send(result);
    });
})
app.post('/savedevice',function(req,res){
    imei = req.body.imei;
    user = req.body.user;
    email = req.body.email;
console.log("post data",req.body);
    res.send(req.body)
})
app.listen(process.env.PORT || 1946);
