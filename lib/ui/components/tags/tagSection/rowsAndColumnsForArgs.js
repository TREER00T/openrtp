let {
    isDefined
} = require('../../../../util/Utilities');


module.exports.rowsAndColumnsForArgs = (data) => {

    return '             <tr>\n' +
    isDefined(data?.name) ?
        '                    <td>' + data.name + '</td>\n' : '-' +
        isDefined(data?.in) ?
            '                    <td>' + data.in + '</td>\n' : 'param' +
            isDefined(data?.type) ?
                '                    <td>' + data.type + '</td>\n' : 'string' +
                isDefined(data?.required) ?
                    '                    <td>' + data.required + '</td>\n' : false +
                    isDefined(data?.description) ?
                        '                    <td>' + data.description + '</td>\n' : '-' +
                        '                </tr>\n';

}