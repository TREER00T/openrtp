let {
    isDefined
} = require('../../../../util/Utilities');


module.exports.boxInfo = (appName, appDescription, details) => {
    return '<div class="box-info margin-top-4">\n' +
    '    <div class="info-back-color center">\n' +
    '        <a class="white bold">i</a>\n' +
    '    </div>\n' +
    isDefined(appName) ?
        '    <div class="margin-left-5">\n' +
        '        <h1 class="title-color">' + appName + '</h1>\n' +
        '    </div>\n' : '' +
        isDefined(appDescription) ?
            '    <div class="margin-left-2">\n' +
            '        <p class="txt-desc">\n' +
            '           ' + appDescription + '\n' : '' +
            '        </p>\n' +
            '    </div>\n' +
            '   ' + isDefined(details) ? details + '\n' : '' +
                '</div>';
}