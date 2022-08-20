let Response = require('../src/express/Response'),
    {
        getView
    } = require('./view');

module.exports.reqHandler = (req, res) => {
    module.exports.baseUrl = req.protocol + '://' + req.get('host');
    Response.send(res, getView());
}