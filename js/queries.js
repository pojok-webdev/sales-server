var visits = 'select createuser sales,clientname,address from visits ',
    checkOtp = (otp)=>{
        return 'select * from visits where otp="'+otp+'"'
    };
    confirmOtp = (otp)=>{
        return 'update visits set otpconfirmed="1" where otp="'+otp+'"'
    }
    saveRequest = (clientname,address,phone,createuser)=>{
        sql = 'insert into visits ';
        sql+= '(clientname,address,phone,createuser)';
        sql+= 'values ';
        sql+= '("'+clientname+'","'+address+'","'+phone+'","'+createuser+'")';
        return sql;
    }
module.exports = {
    visits: visits,
    checkOtp: checkOtp,
    confirmOtp: confirmOtp,
    saveRequest:saveRequest
}