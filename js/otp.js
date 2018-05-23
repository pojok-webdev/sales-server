var numbers = [0,1,2,3,4,5,6,7,8,9],
    shuffle = (o)=>{
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    },
    random4digit = ()=>{
        return shuffle("0123456789".split('')).join('').substring(0,4);
    },
    shuffleArray = (array) => {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    },
    randarray = () =>{
        return shuffleArray(numbers).slice(0,4).join('');
    }
;
module.exports = {
    get: randarray
}