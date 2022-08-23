let {
        isDefined,
        isUnDefined
    } = require('../../../../util/Utilities'),
    {
        isArray
    } = require('../../../../../src/util/Utils');


function generateHtmlTag(data) {
    let base = '             <tr>\n';

    if (isUnDefined([data?.name, data?.in, data?.type, data?.required, data?.description]))
        return '';

    if (isDefined(data?.name))
        base += '                    <td>' + data.name + '</td>\n';

    if (isDefined(data?.in))
        base += '                    <td>' + data.in + '</td>\n';

    if (isDefined(data?.type))
        base += '                    <td>' + data.type + '</td>\n';

    if (isDefined(data?.required))
        base += '                    <td>' + data.required + '</td>\n';

    if (isDefined(data?.description))
        base += '                    <td>' + data.description + '</td>\n';

    return base + '                </tr>\n';
}


module.exports.rowsAndColumnsForArgs = (data) => {

    let arr = [];

    if (isArray(data)) {
        data.forEach(item => {
            arr.push(generateHtmlTag(item));
        });
        return arr;
    }

    return generateHtmlTag(data);
}