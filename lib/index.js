let Response = require('../src/express/Response'),
    {
        getView
    } = require('./view'),
    {
        getIconsUrl
    } = require('../lib/util/Utilities');

module.exports.reqHandler = (req, res) => {
    module.exports.baseUrl = req.protocol + '://' + req.get('host');
    Response.send(res, getView());
}

module.exports.sendIconUrl = (req, res) => {
    Response.sendIconUrl(res, {
        url: getIconsUrl()
    });
}