let yamlDataObject = require('../../src/obj/ObjectValidation'),
    {
        isDefined,
        arrToString,
        getRandomViewId
    } = require('../util/Utilities'),
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
    } = require('../ui/components/tags/tagSection/itemInSection');

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
                    tagsObjectInRootObject?.forEach(item => {

                        let isValidTag = item?.name === tag,
                            description = item?.description,
                            initObject = () => {
                                let isInitDataObject = isDefined(groupOfObjectWithTagKey[tag]?.data);

                                if (!isInitDataObject) {
                                    groupOfObjectWithTagKey[tag] = {};
                                    groupOfObjectWithTagKey[tag].data = [];
                                }

                                if (!isDefined(groupOfObjectWithTagKey[tag]?.description) && isDefined(description) && !isInitDataObject)
                                    groupOfObjectWithTagKey[tag].description = description;

                            },
                            isDefaultTag = 'Default' === tag;

                        object.route = route;

                        if (isValidTag && !isDefaultTag) {
                            initObject();
                            pushInObject(tag, object, description);
                            return;
                        }

                        if (isDefaultTag && isValidTag) {
                            initObject();
                            pushInObject(tag, object, description);
                            return;
                        }

                        if (isDefaultTag && !isValidTag) {
                            initObject();
                            pushInObject(tag, object);
                            return;
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
    let viewId = getRandomViewId();

    let authAllArr = yamlDataObject?.arrayOfKeyForAddAuthInAllRequest;
    for (let tag in groupOfObjectWithTagKey) {
        let tagItem = groupOfObjectWithTagKey[tag],
            isFirstIndex = index === 0,
            isItemInAuthAll = authAllArr?.length > 0 && isFirstIndex,
            descriptionForTag = tagItem?.description,
            isUsedDescription = isDefined(descriptionForTag);


        push(boxSection(tag, viewId, isUsedDescription, isItemInAuthAll));
        if (isItemInAuthAll)
            push(dialog(viewId, isItemInAuthAll, rowsAndColumnsForArgs(searchInSecurityDefinitions(authAllArr))));
        push(desc(descriptionForTag, viewId));
        push(boxItemInSection(getBoxItem(tagItem)));

        index++;
    }

}


function getBoxItem(tagItem, viewId) {
    let arrayOfHtmlTags = [];

    tagItem.data.forEach((object, index) => {
        let on = object?.on,
            parameters = object?.parameters,
            security = object?.security,
            route = object?.route,
            isLastIndex = tagItem.data.length === index + 1,
            emits = object?.emits,
            description = object?.description;

        if (!isDefined(on))
            return;

        arrayOfHtmlTags.push(itemInSection(on, isLastIndex, viewId, isDefined(security)));
    });
    return arrayOfHtmlTags.join(' ');
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

    let data = dataHtmlResult.join(' ');
    arrToEmpty();
    return data;
}


module.exports.data = () => result();
