let initExpress = require('./src/express/index'),
    File = require('./src/fs/File'),
    yamlDocs = require('./src/obj/ObjectValidation');


module.exports = (data) => {
    yamlDocs.parse(File.read(data?.fileLocation));
    initExpress(data?.express, data?.route, data?.publicRoute);
}