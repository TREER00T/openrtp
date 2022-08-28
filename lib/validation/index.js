let yamlDataObject = require('../../src/obj/ObjectValidation'),
    {
        isDefined,
        arrToString,
        getRandomViewId
    } = require('../util/Utilities'),
    {
        isArray
    } = require('../../src/util/Utils'),
    {
        header
    } = require('../ui/components/tags/header'),
    {
        boxInfo
    } = require('../ui/components/tags/info/boxInfo'),
    {
        infoDetails
    } = require('../ui/components/tags/info/infoDetails'),
    infoView = require('../ui/components/tags/info/infoItem'),
    {
        boxSection
    } = require('../ui/components/tags/tagSection/boxSection'),
    {
        dialog
    } = require('../ui/components/tags/Dialog'),
    {
        rowsAndColumnsForArgs
    } = require('../ui/components/tags/tagSection/rowsAndColumnsForArgs'),
    {
        desc
    } = require('../ui/components/tags/tagSection/boxDescriptionSection'),
    {
        boxItemInSection
    } = require('../ui/components/tags/tagSection/boxItemInSection'),
    {
        itemInSection
    } = require('../ui/components/tags/tagSection/itemInSection'),
    {
        detailsForArgs
    } = require('../ui/components/tags/tagSection/detailsForArgs'),
    {
        detailsForEvents
    } = require('../ui/components/tags/tagSection/detailsForEvents'),
    {
        modelSection
    } = require('../ui/components/tags/modelSection/modelSection'),
    {
        modelItemInSection
    } = require('../ui/components/tags/modelSection/modelItemInSection'),
    {
        rowsAndColumnsForModels
    } = require('../ui/components/tags/modelSection/rowsAndColumnsForModels'),
    {
        rowsAndColumnsForEvents
    } = require('../ui/components/tags/tagSection/rowsAndColumnsForEvents'),
    tag = require('../ui/components/tags/tagSection/detailItem');

let dataHtmlResult = [];

function push(data) {
    dataHtmlResult.push(data);
}

function arrToEmpty() {
    dataHtmlResult = [];
}

function validationInfoObject() {
    let info = yamlDataObject.data?.info;
    let baseUrl = yamlDataObject.data?.baseUrl;

    if (!isDefined(info))
        return;

    let {title, version, description} = info,
        email = info?.contact?.email,
        license = info?.license,
        phone = info?.contact?.phone;

    push(header(version));
    push(boxInfo(title, description, infoDetails(arrToString([
        infoView.item(email, 'email'),
        infoView.item(license, 'license'),
        infoView.item(phone, 'phone'),
        infoView.item(baseUrl, 'hyperlink')
    ]))));

}

function validationPathObject() {
    let pathObject = yamlDataObject.data?.paths;
    let tagsObjectInRootObject = yamlDataObject.data?.tags;

    if (!isDefined(pathObject))
        return '';

    let groupOfObjectWithTagKey = {},
        pushInObject = (key, data,) => {
            groupOfObjectWithTagKey[key].data.push(data);
        };

    for (let route in pathObject) {
        let pathItem = pathObject[route];


        pathItem.forEach(object => {

            let tags = object?.tags,
                isTagUsed = isDefined(tags),
                tagValidation = (tag) => {
                    let initObject = (description) => {
                            let isInitDataObject = isDefined(groupOfObjectWithTagKey[tag]?.data);

                            if (!isInitDataObject) {
                                groupOfObjectWithTagKey[tag] = {};
                                groupOfObjectWithTagKey[tag].data = [];
                            }

                            if (!isDefined(groupOfObjectWithTagKey[tag]?.description) && isDefined(description) && !isInitDataObject)
                                groupOfObjectWithTagKey[tag].description = description;

                        },
                        isDefaultTag = 'Default' === tag;

                    if (isDefaultTag) {
                        initObject();
                        object.route = route;
                        pushInObject(tag, object);
                        return;
                    }

                    tagsObjectInRootObject?.forEach(item => {

                        let isValidTag = item?.name === tag,
                            description = item?.description;

                        object.route = route;

                        if (isValidTag) {
                            initObject(description);
                            pushInObject(tag, object, description);
                        }

                    });

                };

            if (!isTagUsed) {
                tagValidation('Default');
                return;
            }


            tags.forEach(tagIntoPathObject => {

                tagValidation(tagIntoPathObject);

            });


        });


    }


    let index = 0;
    let authAllArr = yamlDataObject?.arrayOfKeyForAddAuthInAllRequest;
    for (let tag in groupOfObjectWithTagKey) {
        let tagItem = groupOfObjectWithTagKey[tag],
            isFirstIndex = index === 0,
            arrowTagViewId = getRandomViewId(),
            isItemInAuthAll = authAllArr?.length > 0 && isFirstIndex,
            descriptionForTag = tagItem?.description,
            isUsedDescription = isDefined(descriptionForTag);


        push(boxSection(tag, arrowTagViewId, isUsedDescription, isItemInAuthAll));
        if (isItemInAuthAll)
            push(dialog(null, isItemInAuthAll, rowsAndColumnsForArgs(searchInSecurityDefinitions(authAllArr))));
        push(desc(descriptionForTag, arrowTagViewId));
        push(boxItemInSection(getBoxItem(tagItem)));

        index++;
    }

}


function validationModelObject() {

    let modelObject = yamlDataObject.data?.definitions;


    if (!isDefined(modelObject))
        return;

    let newModelArr = [];

    for (let key in modelObject) {
        let modelViewId = getRandomViewId(),
            dataModelObject = modelObject[key];

        newModelArr.push(modelItemInSection(key, modelViewId, rowsAndColumnsForModels(dataModelObject)));
    }

    push(modelSection(newModelArr.join(' ')));
}


function getBoxItem(tagItem) {
    let arrayOfHtmlTags = [];

    tagItem.data.forEach((object, index) => {
        let on = object?.on,
            parameters = object?.parameters,
            security = object?.security,
            viewId = getRandomViewId(),
            route = object?.route,
            isLastIndex = tagItem.data.length === index + 1,
            events = object?.events,
            isNotCommonAuth = false,
            description = object?.description;


        if (!isDefined(on))
            return;


        arrayOfHtmlTags.push(itemInSection(on, isLastIndex, viewId, isDefined(security),
            tag.detailItem(route, description, viewId, getNumberForListOfItem([route, description, parameters, events]),
                arrToString([parametersAndArgsObjectValidation(parameters, viewId),
                    detailsForEvents(rowsAndColumnsForEvents(events))]))));

        if (isDefined(security))
            push(dialog(viewId, isNotCommonAuth, rowsAndColumnsForArgs(searchInSecurityDefinitions(security))));

    });
    return arrayOfHtmlTags.join(' ');
}


function parametersAndArgsObjectValidation(data, viewId) {
    let parameters = [],
        dataParametersObject = () => parameters.join(' '),
        isUsedParameter = () => parameters.length !== 0,
        arrayOfHtmlTag = [];
    data?.forEach(item => {
        let argsItem = item?.args,
            isArgsUsed = isDefined(argsItem);

        if (isArgsUsed)
            return arrayOfHtmlTag.push(detailsForArgs(viewId, isArgsUsed, rowsAndColumnsForArgs(argsItem)));

        return parameters.push(rowsAndColumnsForArgs(item));
    });

    if (isUsedParameter())
        arrayOfHtmlTag.push(detailsForArgs(viewId, false, dataParametersObject()));


    return arrayOfHtmlTag.join(' ');
}


function getNumberForListOfItem(arr) {
    let arrayOBoolean = [],
        lengthOfItem = () => arrayOBoolean.length;

    arr.forEach(item => {
        if (item?.length !== 0 && item !== '' && (typeof item !== 'undefined' && item !== undefined && item !== 'undefined'))
            arrayOBoolean.push(true);
    });

    return lengthOfItem();
}

function searchInSecurityDefinitions(item) {
    let securityDefinitionsArr = yamlDataObject.securityDefinitions;
    let arrayPfDataDefined = [];
    item?.forEach(item => {
        securityDefinitionsArr.forEach(object => {

            let isDefinedObject = item === object.aliasName;
            let isCommonAuth = item === object?.schema;

            if (isDefinedObject || isCommonAuth)
                arrayPfDataDefined.push(object);
        });
    });

    return arrayPfDataDefined;
}

function result() {
    validationInfoObject();
    validationPathObject();
    validationModelObject();

    let data = dataHtmlResult.join(' ');
    arrToEmpty();
    return data;
}


module.exports.data = () => result();
