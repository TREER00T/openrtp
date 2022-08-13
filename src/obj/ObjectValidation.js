let yaml = require('yaml'),
    {
        isObjectUndefined
    } = require('../util/Utils'),
    SecurityDefinitionsObject = require('./SecurityDefinitions'),
    PathsObject = require('./PathsObject');


let yamlObject;


function securityDefinitions() {
    let securityDefinitions = yamlObject?.securityDefinitions;
    if (!isObjectUndefined(securityDefinitions))
        return SecurityDefinitionsObject.parse(securityDefinitions);
    return false;
}

function paths() {
    let paths = yamlObject?.paths;
    if (!isObjectUndefined(paths)) {
        return PathsObject.parse(paths);
    }
    return false;
}

function tags() {
    let arrayOfTags = yamlObject?.tags;
    if (!isObjectUndefined(arrayOfTags))
        return arrayOfTags;
    return false;
}

module.exports.parse = (yamlDataObject) => {
    yamlObject = yaml.parseDocument(yamlDataObject).toJSON();
    securityDefinitions();
    paths();
    tags();
    module.exports.data = yamlObject;
}
