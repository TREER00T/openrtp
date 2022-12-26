let initExpress = require('./src/express/index'),
    File = require('./src/fs/File'),
    yamlDocs = require('./src/obj/ObjectValidation');


module.exports = {
    setup(data) {
        yamlDocs.parse(File.read(data?.fileLocation));
        initExpress(data?.port, data?.host, data?.route);
    }
}