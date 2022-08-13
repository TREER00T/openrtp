module.exports = {

    isObjectUndefined(key) {
        return key === undefined;
    },

    isAuthInAllRequest(item) {
        return item === 'all';
    },

    isJsonObject(data) {
        return data?.constructor === ({}).constructor;
    },

    isArray(data) {
        return Array.isArray(data);
    },

    isString(object) {
        return typeof object === 'string';
    },

    isTagsUsed(object) {
        return object !== undefined;
    },

    makeObject(key, value) {
        let object = {};
        object[key] = value;
        return object;
    }

}