let {
        reqHandler,
        sendIconUrl
    } = require('../../lib/index'),
    express = require('express'),
    app = express();


module.exports = (expressApp, route, publicRoute) => {
    let pubRoute = publicRoute === undefined ? '/public' : publicRoute,
        viewRoute = route === undefined ? '/socket-docs' : route,
        path = __dirname + '/../../lib/ui/public';
    if (expressApp !== undefined || null) {
        let app = expressApp();
        app.use(pubRoute, expressApp.static(path));
        app.get(viewRoute, reqHandler);
        app.get('/iconUrl', sendIconUrl);
        return;
    }
    app.use(pubRoute, express.static(path));
    app.get(viewRoute, reqHandler);
    app.get('/iconUrl', sendIconUrl);
    app.listen(17892, () => {
        console.log(`OpenRTP Listen On Port 17892 ...`);
    });
}