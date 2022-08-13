let yaml = require('yaml'),
    {
        isArray,
        isString,
        isTagsUsed,
        makeObject,
        isJsonObject,
        isObjectUndefined
    } = require('../util/Utils'),
    SecurityDefinitionsObject = require('./SecurityDefinitions');


let yamlObject;


function securityDefinitions() {
    let securityDefinitions = yamlObject?.securityDefinitions;
    if (!isObjectUndefined(securityDefinitions))
        return SecurityDefinitionsObject.parse(securityDefinitions);
    return false;
}

let arrayOfItemWithTags = [];

function addTagsIntoArray(tagsInsidePaths, object, route) {
    let tags = yamlObject?.tags;

    tags?.forEach(itemInTagObject => {
        let tagName = itemInTagObject?.name;
        if (tagsInsidePaths !== tagName)
            return;

        arrayOfItemWithTags.push({tags: tagName, data: object, route: route});
    });
}

function paths() {
    let data = [];
    let pathsObject = yamlObject?.paths;
    if (isArray(pathsObject)) {
        pathsObject.forEach(item => {
            data.push(item);
        });
        return [{data: data, route: '/'}];
    }

    if (isJsonObject(pathsObject))
        for (let key in pathsObject) {
            let item = pathsObject[key];

            item?.forEach(object => {
                let tagsInsidePaths = object?.tags,
                    isTagsUsedInsidePaths = isTagsUsed(tagsInsidePaths);

                if (!isTagsUsedInsidePaths) {
                    data.push(makeObject(key, object));
                    return;
                }

                if (isArray(tagsInsidePaths))
                    tagsInsidePaths?.forEach(tagItem => {
                        addTagsIntoArray(tagItem, object, key);
                    });

                if (isString(tagsInsidePaths)) {
                    addTagsIntoArray(tagsInsidePaths, object, key);
                }

            });


        }

    return data;
}

function getPaths() {

}

module.exports.parse = (yamlDataObject) => {
    yamlObject = yaml.parseDocument(yamlDataObject).toJSON();
    securityDefinitions();
    paths();
    module.exports.data = yamlObject;
}
