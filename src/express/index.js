let {
        reqHandler
    } = require('../../lib/index'),
    express = require('express'),
    app = express();


module.exports = (expressApp, route, publicRoute) => {
    if (expressApp !== undefined || null) {
        let app = expressApp();
        app.use(publicRoute === undefined ? '/public' : publicRoute, expressApp.static(__dirname + '/ui/public'));
        app.get(route === undefined ? '/socket-docs' : route, reqHandler);
        return;
    }
    app.use(publicRoute === undefined ? '/public' : publicRoute, express.static(__dirname + '/ui/public'));
    app.get(route === undefined ? '/socket-docs' : route, reqHandler);
    app.listen(17892, () => {
        console.log(`OpenRTP Listen On 17892 ...`);
    });
}

module.exports();