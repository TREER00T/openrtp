let yaml = require('yaml'),
    File = require('src/fs/File');


module.exports = {

    toJson() {
        return yaml.parseDocument(File.read()).toJSON();
    }

}