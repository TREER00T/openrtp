let {
    isDefined
} = require('../../../../util/Utilities');


module.exports.detailsForArgs = (id, isArgs, data) => {
    let sectionName = 'Parameters',
        base = '            <div class="div-span">\n';

    if (isArgs)
        sectionName = 'Args';

    if (!isDefined(data))
        return '';

    if (!isArgs)
        base += '                <span class="horizontal-txt">' + sectionName + '</span>\n';

    if (isArgs)
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
        data +
        '            \n</table>\n';
}