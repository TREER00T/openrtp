let Response = require('../src/express/Response'),
    {
        getView
    } = require('./view');

module.exports.reqHandler = (req, res) => {
    Response.send(res, getView);
}