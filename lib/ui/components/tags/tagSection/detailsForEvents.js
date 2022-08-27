let {
    isDefined
} = require('../../../../util/Utilities');


module.exports.detailsForEvents = (data) => {

    if (!isDefined(data)|| data === '')
        return '';

    return '            <div class="div-span margin-top-2">\n' +
        '                <span class="horizontal-txt">Events</span>\n' +
        '            </div>\n' +
        '            <table>\n' +
        '               <tr>\n' +
        '                    <th>Name</th>\n' +
        '                    <th>Description</th>\n' +
        '               </tr>\n' +
        data + '\n' +
        '            </table>\n';
}