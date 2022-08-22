let yamlDataObject = require('../../src/obj/ObjectValidation'),
    {
        isDefined,
        arrToString
    } = require('../util/Utilities'),
    {
        isString,
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
    infoView = require('../ui/components/tags/info/infoItem');

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

    if (!isDefined(pathObject))
        return '';

    let groupOfObjectWithTagKey = {},
        pushInObject = (key, data) => {
            let item = groupOfObjectWithTagKey[key],
                isUndefined = !isDefined(item);

            if (isUndefined) {
                groupOfObjectWithTagKey[key] = [];
                groupOfObjectWithTagKey[key].push(data);
            }

            if (!isUndefined)
                groupOfObjectWithTagKey[key].push(data);

        };

    for (let route in pathObject) {
        let pathItem = pathObject[route];


        pathItem.forEach(object => {
            let tags = object?.tags;
            let isTagUsed = isDefined(object?.tags);

            if (!isTagUsed) {
                pushInObject('default', object);
                return;
            }

            if (isString(tags)) {
                pushInObject(tags, object);
                return;
            }

            if (isArray(tags)) {
                tags?.forEach(item => {
                    pushInObject(item, object);
                });
            }


        });


    }


}

function result() {
    validationInfoObject();
    validationPathObject();

    let data = dataHtmlResult.join(' ');
    arrToEmpty();
    return data;
}


module.exports.data = () => result();
