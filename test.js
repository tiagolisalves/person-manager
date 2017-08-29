const _ = require('lodash');

var obj = {
    a : 4,
    b : 2,
    w : 3,
    q : "hahaha",
    a1 : 4,
    b1 : 2,
    w1 : 3,
    q1 : "hahaha",
    a2 : 4,
    b3 : 2,
    w3 : 3,
    q3 : "hahaha"
}

_.keysTest = (obj) => {
    console.time('keys');
    var returnFromLodash = _.keys(obj);
    console.timeEnd('keys');
    return returnFromLodash;
}

function parseObject(obj){
    return _.keys(obj).reduce((result, key, index) => {
        if(index === _.keys(obj).length - 1){
            return result.concat(`${key}=${_.values(obj)[index]}`);
        } else {
            return result.concat(`${key}=${_.values(obj)[index]}&`);
        }
    }, '');
}
console.time('timer');
console.log(parseObject(obj));
console.timeEnd('timer');