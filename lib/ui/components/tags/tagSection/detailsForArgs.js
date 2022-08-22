let {
    isDefined
} = require('../../../../util/Utilities');


module.exports.detailsForArgs = (id, data) => {
    let isFirstNumber = id === 0,
        sectionName = 'Args ' + 2,
        base = '            <div class="div-span">\n';

    if (isFirstNumber)
        sectionName = 'Parameters';

    if (!isDefined(data))
        return '';

    if (!isFirstNumber)
        base += '                <span class="horizontal-txt">' + sectionName + '</span>\n';

    if (isFirstNumber)
        base += '                <span class="horizontal-txt left">' + sectionName + '</span>\n';

    return base + '   </div>\n' +
        '            <table>\n' +
        '               <tr>\n' +
        '                    <th>Name</th>\n' +
        '                    <th>In</th>\n' +
        '                    <th>Type</th>\n' +
        '                    <th>Required</th>\n' +
        '                    <th>Description</th>\n' +
        '               </tr>\n' +
        data + '\n' +
        '            </table>\n';
}