let {
    isDefined
} = require('../../../util/Utilities');

module.exports.header = (appVersion) => {
    return '<div class="box margin-top-2">\n' +
    '    <div class="left">\n' +
    '        <p class="text-in-box box-border"><b>OpenRTP</b></p>\n' +
    '    </div>\n' +
    isDefined(appVersion) ?
        '    <div class="right">\n' +
        '        <p class="text-in-box box-border"><b>' + appVersion + '</b></p>\n' +
        '    </div>\n' : '' +
        '</div>\n';
}