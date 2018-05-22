var nodemailer = require('nodemailer'),
config = require("./configs.js");
transporter = nodemailer.createTransport({
    host:'smtp.padi.net.id',
    secure:false,
    auth:{
        user:config.mail.user,
        pass:config.mail.pass
    }
}),
mailOptions = {
    from:'puji@padi.net.id',
    to:'628813272107@sms.padinet.com,6282231384002@sms.padinet.com',
    cc:'puji@padi.net.id',
    subject:'otp',
    text:'Sending otp by nodejs'
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
