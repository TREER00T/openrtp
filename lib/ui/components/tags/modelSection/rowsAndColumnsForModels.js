let {
    isDefined,
    isUnDefined,
    getObjectValidationForModels
} = require('../../../../util/Utilities');
const {isArray} = require("../../../../../src/util/Utils");

function generateHtmlTag(dataObject) {
    let data = getObjectValidationForModels(dataObject);
    let base = '             <tr>\n';

    if (isUnDefined([data?.name, data?.type, data?.description]))
        return '';

    if (isDefined(data?.name))
        base += '                    <td>' + data.name + '</td>\n';

    if (isDefined(data?.type))
        base += '                    <td>' + data.type + '</td>\n';

    if (isDefined(data?.description))
        base += '                    <td>' + data.description + '</td>\n';

    return base + '                </tr>\n';
}


module.exports.rowsAndColumnsForModels = (data) => {

    let arr = [];

    if (isArray(data)) {
        data.forEach(item => {
            arr.push(generateHtmlTag(item));
        });
        return arr.join(' ');
    }

    return generateHtmlTag(data);
}