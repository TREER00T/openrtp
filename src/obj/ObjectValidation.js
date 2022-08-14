let yaml = require('yaml'),
    {
        isArray,
        isString,
        isTagsUsed,
        makeObject,
        isJsonObject,
        isAuthInAllRequest
    } = require('../util/Utils');


let yamlObject;


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

function securityDefinitions() {
    let securityDefinitionsObject = yamlObject?.securityDefinitions;
    module.exports.arrayOfKeyForAddAuthInAllRequest = [];
    module.exports.securityDefinitions = [];
    for (let key in securityDefinitionsObject) {
        let item = securityDefinitionsObject[key];
        module.exports.securityDefinitions.push(item);
        if (isAuthInAllRequest(item?.schema))
            module.exports.arrayOfKeyForAddAuthInAllRequest.push(key);
    }
}

function paths() {
    let data = [];
    let pathsObject = yamlObject?.paths;
    if (isArray(pathsObject)) {
        pathsObject.forEach(item => {
            data.push(item);
        });
        return yamlObject.paths = makeObject('/', data);
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

                if (isString(tagsInsidePaths))
                    addTagsIntoArray(tagsInsidePaths, object, key);


                object?.parameters?.forEach((itemForParameter, index, arr) => {
                    let args = itemForParameter?.args;
                    let isUsedArgs = args !== undefined;
                    let isUsedReference = (item) => item === '$ref';
                    let isRef = isUsedReference(Object.keys(itemForParameter)[0]);
                    let isRefInComponent = (data) => isReferenceIntoComponentObjectForParameter(data['$ref']);

                    if (isRef && isRefInComponent(itemForParameter)) {
                        arr.splice(index, 1);
                        object.parameters = isRefInComponent(itemForParameter).concat(arr);
                    }

                    if (isUsedArgs)
                        args?.forEach((argItem, index, arr) => {
                            let isRef = isUsedReference(Object.keys(argItem)[0]);

                            if (isRef && isRefInComponent(argItem)) {
                                arr.splice(index, 1);
                                itemForParameter.args = isRefInComponent(argItem).concat(arr);
                            }

                        });

                });

            });

        }

}

function getRefName(str) {
    return str?.split('/')[1];
}

function isReferenceIntoComponentObjectForParameter(key) {
    let parameters = yamlObject?.components?.parameters,
        parameterObject = parameters?.[getRefName(key)];

    return parameterObject === undefined ? false : parameterObject;
}


module.exports.parse = (yamlDataObject) => {
    yamlObject = yaml.parseDocument(yamlDataObject).toJSON();
    securityDefinitions();
    paths();
    module.exports.data = yamlObject;
}
