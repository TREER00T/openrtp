let {
        getScriptsUrl,
        getJqueryUrl
    } = require('../../util/Utilities'),
    {
        content
    } = require('../../content');

module.exports.body = () => {
    return '<body>\n' +
        content() + '\n' +
        '<script src="' + getJqueryUrl() + '"></script>' +
        '<script src="' + getScriptsUrl() + '"></script>\n' +
        '</body>\n';
}