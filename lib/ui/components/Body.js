let {
        getScriptsUrl
    } = require('../../util/Utilities'),
    {
        content
    } = require('./');

module.exports.body = () => {
    return '<body>\n' +
        content() + '\n' +
        '<script src="' + getScriptsUrl() + '"></script>\n' +
        '</body>\n';
}