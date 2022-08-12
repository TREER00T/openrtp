let yaml = require('yaml'),
    {
        isObjectUndefined
    } = require('../util/Utils'),
    InfoObject = require('../obj/Info'),
    SecurityDefinitionsObject = require('../obj/SecurityDefinitions'),
    PathsObject = require('../obj/PathsObject');

let data;

let yamlObject = () => yaml.parseDocument(data).toJSON();

function info() {
    let info = yamlObject()?.info;
    if (!isObjectUndefined(info))
        return InfoObject.parse(info);
    return false;
}

function securityDefinitions() {
    let securityDefinitions = yamlObject()?.securityDefinitions;
    if (!isObjectUndefined(securityDefinitions))
        return SecurityDefinitionsObject.parse(securityDefinitions);
    return false;
}

function paths() {
    let paths = yamlObject()?.paths;
    if (!isObjectUndefined(paths))
        return PathsObject.parse(paths);
    return false;
}


module.exports = {

    parse(yamlDataObject) {
        data = yamlDataObject;
        info();
        securityDefinitions();
        paths();
    },

    baseUrl() {
        let baseUrl = yamlObject()?.baseUrl;
        if (!isObjectUndefined(baseUrl))
            return baseUrl;
        return false;
    },

    tags() {
        let arrayOfTags = yamlObject()?.tags;
        if (!isObjectUndefined(arrayOfTags))
            return arrayOfTags;
        return false;
    }

}