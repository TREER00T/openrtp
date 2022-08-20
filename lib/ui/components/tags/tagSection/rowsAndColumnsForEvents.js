let {
    isDefined
} = require('../../../../../lib/util/Utilities');


module.exports.rowsAndColumnsForArgs = (data) => {

    return '             <tr>\n' +
    isDefined(data?.name) ?
        '                    <td>' + data.name + '</td>\n' : '-' +
        isDefined(data?.description) ?
            '                    <td>' + data.description + '</td>\n' : '-' +
            '                </tr>\n';

}