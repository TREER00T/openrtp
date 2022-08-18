let lib = require('../../lib/index');


module.exports = (expressApp, route) => {
    expressApp?.get(route === undefined ? '/socket-docs' : `/${route}`, lib.reqHandler);
}