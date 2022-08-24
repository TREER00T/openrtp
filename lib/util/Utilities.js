let baseUrl = require('../index');
let publicEndPoint = '/public';


module.exports = {

    getCssUrl() {
        return baseUrl.baseUrl + publicEndPoint + '/style.css';
    },

    isJsonObject(data) {
        if (!module.exports.isDefined(data))
            return false;
        return data.constructor === ({}).constructor;
    },

    getIconsUrl() {
        return baseUrl.baseUrl + publicEndPoint + '/icons/';
    },

    getScriptsUrl() {
        return baseUrl.baseUrl + publicEndPoint + '/script.js';
    },

    getJqueryUrl() {
        return baseUrl.baseUrl + publicEndPoint + '/jquery.js';
    },

    isDefined(data) {
        return typeof data !== 'undefined' || data !== undefined;
    },

    isUnDefined(arr) {
        let lengthOfDefinedObject = 0;
        arr.forEach(item => {
            let isUndefined = typeof item === 'undefined' || item === undefined;
            if (!isUndefined)
                lengthOfDefinedObject++;
        });
        let isAllItemInArrUndefined = lengthOfDefinedObject === 0;
        return isAllItemInArrUndefined;
    },

    arrToString(arr) {
        return arr.join(' ');
    },

    getRandomViewId() {
        const MAX_RANDOM_RANGE = 999999999999999999999;
        return Math.floor(Math.random() * MAX_RANDOM_RANGE);
    }

}