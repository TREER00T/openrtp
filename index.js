let initExpress = require('./src/express/index'),
    File = require('./src/fs/File'),
    yamlDocs = require('./src/obj/YamlDataObject');


module.exports = (app, fileLocation, route) => {
    initExpress(app, route);
    yamlDocs.parse(File.read(fileLocation));
}