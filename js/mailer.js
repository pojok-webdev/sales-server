var nodemailer = require('nodemailer'),
config = require("./configs.js");
transporter = nodemailer.createTransport({
    host:config.mail.host,
    port:config.mail.port,
    secure:true,
    auth:{
        user:config.mail.auth.user,
        pass:config.mail.auth.pass
    }
}),
mailOptions = {
    from:config.otp.from,
    to:config.otp.to,
    cc:config.otp.cc,
    subject:config.otp.subject,
    text:config.otp.text
};
sendmail = function(mail,callback){
    mailOptions.text = mail.msg;
    mailOptions.to = mail.to+'@sms.padinet.com';
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    transporter.sendMail(mailOptions,function(err,res){
        if(err){
            console.log('Error kirim mail',err);
        }else{
            console.log('Mail sent',res);
        }
    });
    callback(mail.msg);
}
module.exports = {
    sendmail: sendmail
}
