let {
    isDefined
} = require('../../../../util/Utilities');


module.exports.detailsForArgs = (id, data) => {
    let isFirstNumber = id === 0,
        sectionName = 'Args ' + 2;

    if (isFirstNumber)
        sectionName = 'Parameters';

    return isDefined(data) ?
        '            <div class="div-span">\n' +
        !isFirstNumber ?
            '                <span class="horizontal-txt">' + sectionName + '</span>\n' :
            '                <span class="horizontal-txt left">' + sectionName + '</span>\n' +
            '            </div>\n' +
            '            <table>\n' +
            '               <tr>\n' +
            '                    <th>Name</th>\n' +
            '                    <th>In</th>\n' +
            '                    <th>Type</th>\n' +
            '                    <th>Required</th>\n' +
            '                    <th>Description</th>\n' +
            '               </tr>\n' +
            data + '\n' +
            '            </table>\n' : '\n';
}