var nodemailer = require('nodemailer'),
config = require("./configs.js");
transporter = nodemailer.createTransport({
    host:config.mail.host,
    secure:false,
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
sendmail = function(msg){
    mailOptions.text = msg;
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    transporter.sendMail(mailOptions,function(err,res){
        if(err){
            console.log('Error kirim mail',err);
        }else{
            console.log('Mail sent',res);
        }
    });
}
module.exports = {
    sendmail: sendmail
}
