let yaml = require('../fs/yaml/Yaml'),
    {
        isObjectUndefined
    } = require('../util/Utils'),
    InfoObject = require('../obj/Info'),
    SecurityDefinitionsObject = require('../obj/SecurityDefinitions'),
    PathsObject = require('../obj/PathsObject');

let yamlObject = yaml.toJson();

module.exports = {

    info() {
        let info = yamlObject?.info;
        if (!isObjectUndefined(info))
            return InfoObject.parse(info);
    },

    baseUrl() {
        let baseUrl = yamlObject?.baseUrl;
        if (!isObjectUndefined(baseUrl))
            return baseUrl;
    },

    tags() {
        let arrayOfTags = yamlObject?.tags;
        if (!isObjectUndefined(arrayOfTags))
            return arrayOfTags;
    },

    securityDefinitions() {
        let securityDefinitions = yamlObject?.securityDefinitions;
        if (!isObjectUndefined(securityDefinitions))
            return SecurityDefinitionsObject.parse(securityDefinitions);
    },

    paths() {
        let paths = yamlObject?.paths;
        if (!isObjectUndefined(paths))
            return PathsObject.parse(paths);
    }

}