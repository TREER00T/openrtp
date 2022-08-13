let initExpress = require('./src/express/index'),
    File = require('./src/fs/File'),
    yamlDocs = require('./src/obj/ObjectValidation');


module.exports = (app, fileLocation, route) => {
    yamlDocs.parse(File.read(fileLocation));
    initExpress(app, route);
    //console.log(yamlDocs.data)
}
module.exports(undefined, 'asyncapi.yaml')