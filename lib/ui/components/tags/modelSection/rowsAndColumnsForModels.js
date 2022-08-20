let {
    isDefined
} = require('../../../../util/Utilities');


module.exports.rowsAndColumnsForModels = (data) => {

    return '             <tr>\n' +
    isDefined(data?.name) ?
        '                    <td>' + data.name + '</td>\n' : '-' +
    isDefined(data?.type) ?
        '                    <td>' + data.type + '</td>\n' : 'string' +
        isDefined(data?.description) ?
            '                    <td>' + data.description + '</td>\n' : '-' +
            '                </tr>\n';

}