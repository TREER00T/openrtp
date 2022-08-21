let {
    isDefined
} = require('../../../../util/Utilities');

module.exports.infoDetails = (data) => {
    if (!isDefined(data))
        return '';

    return '<div class="gray-box-info">\n' +
        '        <div class="grid-container white">\n' +
        '        ' + data +
        '        \n</div>\n' +
        '</div>\n';
}