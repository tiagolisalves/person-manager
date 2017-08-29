function parseObject(obj){
    return _.keys(obj).reduce((result, key, index) => {
        if(index === _.keys(obj).length - 1){
            return result.concat(`${key}=${_.values(obj)[index]}`);
        } else {
            return result.concat(`${key}=${_.values(obj)[index]}&`);
        }
    }, '');
}

