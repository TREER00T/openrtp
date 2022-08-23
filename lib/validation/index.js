let yamlDataObject = require('../../src/obj/ObjectValidation'),
    {
        isDefined,
        arrToString
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
    } = require('../ui/components/tags/tagSection/rowsAndColumnsForArgs');

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
        pushInObject = (key, data, tagDescription) => {

            let obj = {data: []};

            if (!isDefined(tagDescription)) {
                groupOfObjectWithTagKey[key] = obj.data.push(data);
                groupOfObjectWithTagKey[key] = obj;
                return;
            }

            groupOfObjectWithTagKey[key] = obj.data.push(data);
            groupOfObjectWithTagKey[key] = obj.description = tagDescription;
            groupOfObjectWithTagKey[key] = obj;

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
                            isDefaultTag = 'Default' === tag;

                        object.route = route;


                        if (isValidTag && (!isDefaultTag || isDefaultTag))
                            pushInObject(tag, object, description);


                    });
                };

            if (!isTagUsed) {
                pushInObject('Default', object);
                tagValidation('Default');
                return;
            }

            tags.forEach(tagIntoPathObject => {

                tagValidation(tagIntoPathObject);

            });


        });


    }


    let arrowViewId = 0;
    let authAllArr = yamlDataObject?.arrayOfKeyForAddAuthInAllRequest;
    for (let tag in groupOfObjectWithTagKey) {
        let pathItem = groupOfObjectWithTagKey[tag],
            isFirstIndex = arrowViewId === 0,
            isItemInAuthAll = authAllArr?.length > 0 && isFirstIndex,
            descriptionForTag = pathItem?.description,
            isUsedDescription = isDefined(descriptionForTag);


        push(boxSection(tag, arrowViewId, isUsedDescription, isItemInAuthAll));
        if (isItemInAuthAll)
            push(dialog(arrowViewId, isItemInAuthAll, rowsAndColumnsForArgs(searchInSecurityDefinitions(authAllArr))));


        arrowViewId++;
    }

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
