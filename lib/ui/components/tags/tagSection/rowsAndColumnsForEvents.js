let {
    isDefined,
    isUnDefined
} = require('../../../../util/Utilities');


module.exports.rowsAndColumnsForArgs = (data) => {

    let base = '             <tr>\n';

    if (isUnDefined([data?.name, data?.description]))
        return '';

    if (isDefined(data?.name))
        base += '                    <td>' + data.name + '</td>\n';

    if (isDefined(data?.description))
        base += '                    <td>' + data.description + '</td>\n';

    return base + '                </tr>\n';
}