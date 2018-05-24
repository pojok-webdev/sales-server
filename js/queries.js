var visits = 'select createuser sales,clientname,address from visits ',
    checkOtp = (otp)=>{
        return 'select * from visits where otp="'+otp+'"'
    };
    confirmOtp = (otp)=>{
        return 'update visits set otpconfirmed="1" where otp="'+otp+'" and otpconfirmed="0" '
    }
    saveRequest = (clientname,address,phone,latitude, longitude,otp,createuser)=>{
        sql = 'insert into visits ';
        sql+= '(clientname,address,phone,latitude, longitude,otp,createuser)';
        sql+= 'values ';
        sql+= '("'+clientname+'","'+address+'","'+phone+'","'+latitude+'","'+longitude+'","'+otp+'","'+createuser+'")';
        return sql;
    }
module.exports = {
    visits: visits,
    checkOtp: checkOtp,
    confirmOtp: confirmOtp,
    saveRequest:saveRequest
}