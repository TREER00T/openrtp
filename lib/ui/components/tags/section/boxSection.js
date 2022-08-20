let {
    getIconsUrl
} = require('../../../../../lib/util/Utilities');

module.exports.boxSection = (name, arrowId, haveDescription, isCommonAuth) => {
    let baseDiv;
    haveDescription ?
        baseDiv = '    <img class="arrow-tag" id="arrow-tag-' + arrowId + '" onclick="arrowTagVisibility(this)" src="' + getIconsUrl() + 'arrow-right.svg"/>\n'
        : baseDiv = '';
    return '<div class="div-parent">\n' +
    '    <div class="tag green margin-top-4 green-shadow">\n' +
    '        <p class="p white">' + name + '</p>\n' +
    '    </div>\n' +
    !isCommonAuth ? baseDiv :
        baseDiv +
        '    <img class="common-auth right" id="openCommonAuthDialog" onclick="dialog(this.id)" src="' + getIconsUrl() + 'auth.svg"/>\n' +
        '</div>\n';
}