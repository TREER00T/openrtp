let {
    isDefined,
    isUnDefined
} = require('../../../../util/Utilities');


module.exports.boxInfo = (appName, appDescription, details) => {

    if (isUnDefined([appName, appDescription, details]))
        return '';

    let base = '<div class="box-info margin-top-4">\n' +
        '    <div class="info-back-color center">\n' +
        '        <a class="white bold">i</a>\n' +
        '    </div>\n';


    if (isDefined(appName))
        base += '    <div class="margin-left-5">\n' +
            '        <h1 class="title-color">' + appName + '</h1>\n' +
            '    </div>\n';


    if (isDefined(appDescription))
        base += '    <div class="margin-left-2">\n' +
            '        <p class="txt-desc">\n' +
            '           ' + appDescription +
            '        \n</p>\n' +
            '    </div>\n';


    if (isDefined(details))
        base += details;


    return base + '</div>\n';
}