let yaml = require('yaml'),
    {
        isArray,
        isString,
        isTagsUsed,
        makeObject,
        isJsonObject,
        isAuthInAllRequest
    } = require('../util/Utils'),
    {
        isDefined
    } = require('../../lib/util/Utilities');


let yamlObject;

let isRefInComponent = (data, type) => isReferenceIntoComponentObjectForParameter(isString(data) ? data : data['$ref'], type);
let isUsedReference = (item) => item === '$ref';
let isRef = (object) => isUsedReference(Object.keys(object)[0]);

const COMPONENTS_FOR_PARAMETERS_OBJECT_NAME = 'parameters',
    COMPONENTS_FOR_EVENTS_OBJECT_NAME = 'events';

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

        item.aliasName = key;
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


                let newParameterArr = [];
                object?.parameters?.forEach((itemForParameter, index, arr) => {
                    let args = itemForParameter?.args;
                    let isUsedArgs = args !== undefined;


                    if (isArray(itemForParameter?.$ref)) {
                        itemForParameter.$ref.forEach(item => {

                            let isRefObject = isRefInComponent(item, COMPONENTS_FOR_PARAMETERS_OBJECT_NAME);
                            if (isRefObject)
                                newParameterArr = newParameterArr.concat(isRefObject);

                        });
                        return;
                    }

                    let isRefObject = isRefInComponent(itemForParameter, COMPONENTS_FOR_PARAMETERS_OBJECT_NAME);
                    if (isRefObject)
                        newParameterArr = newParameterArr.concat(isRefObject);


                    if (!isRef(itemForParameter))
                        newParameterArr = newParameterArr.concat(itemForParameter);


                    if (isUsedArgs)
                        args?.forEach(argItem => {

                            if (isArray(argItem?.$ref)) {
                                argItem.$ref.forEach(item => {

                                    let isRefObject = isRefInComponent(item, COMPONENTS_FOR_PARAMETERS_OBJECT_NAME);
                                    if (isRefObject)
                                        newParameterArr = newParameterArr.concat(isRefObject);

                                });
                                return;
                            }

                            let isRefObject = isRefInComponent(argItem, COMPONENTS_FOR_PARAMETERS_OBJECT_NAME);
                            if (isRefObject)
                                newParameterArr = newParameterArr.concat(isRefObject);

                            if (!isRef(argItem))
                                newParameterArr = newParameterArr.concat(argItem);

                        });

                });

                if (isDefined(object?.parameters)) {
                    object.parameters = newParameterArr;
                }

                console.log(object?.parameters)

                let newEventArr = [];

                object?.events?.forEach(eventObject => {

                    if (isArray(eventObject?.$ref))
                        eventObject.$ref.forEach(item => {
                            let isRefObject = isRefInComponent(item, COMPONENTS_FOR_EVENTS_OBJECT_NAME);
                            if (isRefObject)
                                newEventArr = newEventArr.concat(isRefObject);
                        });


                    if (isRef(eventObject) && isString(eventObject)) {
                        let isRefObject = isRefInComponent(eventObject, COMPONENTS_FOR_EVENTS_OBJECT_NAME);
                        if (isRefObject) {
                            newEventArr = newEventArr.concat(isRefObject);
                        }
                    }

                    if (!isRef(eventObject))
                        newEventArr = newEventArr.concat(eventObject);

                });

                if (isDefined(object?.events)) {
                    object.events = newEventArr;
                }

            });

        }

}

function pushDataParameter(data) {
    if (isRef(data.itemForObject) && isRefInComponent(data.itemForObject, COMPONENTS_FOR_PARAMETERS_OBJECT_NAME)) {
        remove(data.arr, data.itemForObject);
        data.object[data.objectType] = isRefInComponent(data.itemForObject, COMPONENTS_FOR_PARAMETERS_OBJECT_NAME).concat(data.arr);
    }
}

function remove(arr, item) {
    arr.splice(arr.indexOf(item), 1);
}


function getRefName(str) {
    return str?.split('/')[1];
}

function isReferenceIntoComponentObjectForParameter(key, type) {
    let parameters = yamlObject?.components[type],
        parameterObject = parameters?.[getRefName(key)];

    return parameterObject === undefined ? false : parameterObject;
}


module.exports.parse = (yamlDataObject) => {
    yamlObject = yaml.parseDocument(yamlDataObject).toJSON();
    securityDefinitions();
    paths();
    module.exports.data = yamlObject;
}
