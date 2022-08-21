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


function result() {
    validationInfoObject();


    let data = dataHtmlResult.join(' ');
    arrToEmpty();
    return data;
}


module.exports.data = () => result();
