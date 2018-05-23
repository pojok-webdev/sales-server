var shuffle = (o)=>{
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    },
    random4digit = ()=>{
        return shuffle("0123456789".split('')).join('').substring(0,4);
    }
;
module.exports = {
    get: random4digit
}