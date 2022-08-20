let {
    isDefined
} = require('../../../../../lib/util/Utilities');


module.exports.detailsForEvents = (data) => {

    return isDefined(data) ?
        '            <div class="div-span margin-top-2">\n' +
        '                <span class="horizontal-txt">Events</span>\n' +
        '            </div>\n' +
        '            <table>\n' +
        '               <tr>\n' +
        '                    <th>Name</th>\n' +
        '                    <th>Description</th>\n' +
        '               </tr>\n' +
        data + '\n' +
        '            </table>\n' : '\n';
}