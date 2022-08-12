let yaml = require('yaml'),
    File = require('../File');


module.exports = {

    toJson() {
        return yaml.parseDocument(File.read()).toJSON();
    }

}