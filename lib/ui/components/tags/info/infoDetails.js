let {
    isDefined
} = require('../../../../util/Utilities');

module.exports.infoDetails = (data) => {
    return '<div class="gray-box-info">\n' +
    '        <div class="grid-container white">\n' +
    '        ' + isDefined(data) ? data + '\n' : '' +
        '        </div>\n' +
        '</div>';
}