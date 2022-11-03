let {
        reqHandler,
        sendIconUrl
    } = require('../../lib/index'),
    express = require('express'),
    app = express();


module.exports = (port, host, route) => {
    let hostName = !host ? '127.0.0.1' : host,
        portNumber = !port ? 17892 : port,
        viewRoute = !route ? '/socket-docs' : route,
        path = __dirname + '/../../lib/ui/public';
    app.use('/public', express.static(path));
    app.get(viewRoute, reqHandler);
    app.get('/iconUrl', sendIconUrl);
    app.listen(portNumber, hostName, () => {
        console.log(`OpenRTP Listen On ${hostName}:${portNumber} ...`);
    });
}