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
    saveMobileDevice = (imei,user,email)=>{
        sql = 'insert into mobiledevices ';
        sql+= '(imei,user,email)';
        sql+= 'values ';
        sql+= '("'+imei+'","'+user+'","'+email+'")';
        sql+= 'on duplicate key update ';
        sql+= 'user="'+user+'",';
        sql+= 'email="'+email+'"'
        return sql;
    }
    checkClient = data=>{
        sql = 'select a.id,a.name,a.address,b.username sales from clients a ';
        sql+= 'left outer join users b on b.id=a.sale_id ';
        sql+= 'where a.name like "%'+data+'%"';
        sql+= 'or a.address like "'+data+'"';
        return sql;
    }
module.exports = {
    visits: visits,
    checkOtp: checkOtp,
    confirmOtp: confirmOtp,
    saveRequest:saveRequest,
    checkClient: checkClient,
    saveMobileDevice: saveMobileDevice
}