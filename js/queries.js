var visits = 'select createuser sales,clientname,address from visits ',
    checkOtp = (otp)=>{
        return 'select * from visits where otp="'+otp+'"'
    };
    confirmOtp = (otp)=>{
        return 'update visits set otpconfirmed="1" where otp="'+otp+'"'
    }
module.exports = {
    visits: visits,
    checkOtp: checkOtp,
    confirmOtp: confirmOtp
}