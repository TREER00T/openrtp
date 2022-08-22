let {
    isDefined,
    isUnDefined
} = require('../../../../util/Utilities');


module.exports.rowsAndColumnsForModels = (data) => {

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