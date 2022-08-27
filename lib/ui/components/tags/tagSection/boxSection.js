let {
    getIconsUrl
} = require('../../../../util/Utilities');

module.exports.boxSection = (name, arrowId, haveDescription, isCommonAuth) => {
    let baseDiv = '',
        base = '<div class="div-parent">\n' +
            '    <div class="tag green margin-top-4 green-shadow">\n' +
            '        <p class="p white">' + name + '</p>\n' +
            '    </div>\n';

    if (haveDescription)
        baseDiv = '    <img class="arrow-tag" id="arrow-tag-' + arrowId + '" onclick="arrowTagVisibility(this)" src="' + getIconsUrl() + 'arrow-right.svg"/>\n';

    if (isCommonAuth && !haveDescription)
        return base + baseDiv +
            '    <img class="common-auth img-auth" id="openCommonAuthDialog" onclick="dialog(this.id)" src="' + getIconsUrl() + 'auth.svg"/>\n </div>\n';

    if (isCommonAuth && haveDescription)
        return base + baseDiv +
            '    <img class="common-auth right" id="openCommonAuthDialog" onclick="dialog(this.id)" src="' + getIconsUrl() + 'auth.svg"/>\n </div>\n';

    return base + baseDiv + '</div>\n';
}