let baseUrl = require('../index');
let publicEndPoint = '/public';


module.exports = {

    getCssUrl() {
        return baseUrl.baseUrl + publicEndPoint + '/style.css';
    },

    getIconsUrl() {
        return baseUrl.baseUrl + publicEndPoint + '/icons/';
    },

    getScriptsUrl() {
        return baseUrl.baseUrl + publicEndPoint + '/script.js';
    },

    isDefined(data) {
        return data !== undefined || null || '';
    }

}