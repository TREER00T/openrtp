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
    },

    getObjectValidationForEvent(item){
        let newObject = item,
            name = newObject?.name,
            description = newObject?.description;

        if (!module.exports.isDefined(name))
            newObject.name = '-';

        if (!module.exports.isDefined(description))
            newObject.description = '-';

        return newObject;
    },

    getObjectValidationForModels(item){
        let newObject = item,
            name = newObject?.name,
            type = newObject?.type,
            description = newObject?.description;

        if (!module.exports.isDefined(name))
            newObject.name = '-';

        if (!module.exports.isDefined(type))
            newObject.type = 'string';

        if (!module.exports.isDefined(description))
            newObject.description = '-';

        return newObject;
    },

    getObjectValidationForParameterOrArgAndSecurityObject(item) {
        let newObject = item,
            name = newObject?.name,
            inObject = newObject?.in,
            type = newObject?.type,
            description = newObject?.description,
            required = newObject?.required;


        if (!module.exports.isDefined(name))
            newObject.name = '-';

        if (!module.exports.isDefined(inObject))
            newObject.in = 'param';

        if (!module.exports.isDefined(type))
            newObject.type = 'string';

        if (!module.exports.isDefined(description))
            newObject.description = '-';

        if (!module.exports.isDefined(required))
            newObject.required = false;

        return newObject;
    }

}