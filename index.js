let File = require('./src/fs/File'),
    initExpress = require('./src/express/index');


module.exports = (app, fileLocation, route) => {
    initExpress(app, route);
    File.setLocation(fileLocation);
}