let {
    isAuthInAllRequest
} = require('../util/Utils');

let securityDefinitionsObject = {};

module.exports = {

    arrayOfKeyForAddAuthInAllRequest: [],

    parse(obj) {
        securityDefinitionsObject = obj;
    },

    toArray() {
        let newArr = [];
        for (let key in securityDefinitionsObject) {
            let item = securityDefinitionsObject[key];
            newArr.push(item);
            if (isAuthInAllRequest(item?.schema))
                module.exports.arrayOfKeyForAddAuthInAllRequest.push(key);
        }
        if (newArr.length !== 0)
            return newArr;
    },


}