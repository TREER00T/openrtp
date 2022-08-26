let {
        isDefined,
        isUnDefined,
        getObjectValidationForEvent
    } = require('../../../../util/Utilities'),
    {
        isArray
    } = require('../../../../../src/util/Utils');

function generateHtmlTag(dataObject) {
    let data = getObjectValidationForEvent(dataObject);
    let base = '             <tr>\n';

    if (isUnDefined([data?.name, data?.description]))
        return '';

    if (isDefined(data?.name))
        base += '                    <td>' + data.name + '</td>\n';

    if (isDefined(data?.description))
        base += '                    <td>' + data.description + '</td>\n';

    return base + '                </tr>\n';
}

module.exports.rowsAndColumnsForEvents = (data) => {

    let arr = [];

    if (isArray(data)) {
        data.forEach(item => {
            arr.push(generateHtmlTag(item));
        });
        return arr.join(' ');
    }

    return '';

}