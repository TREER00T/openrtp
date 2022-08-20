let {
    isDefined,
    getIconsUrl
} = require('../../../../util/Utilities');


module.exports.itemInSection = (name, isLastItem, id, isUsedAuth, details) => {

    return isDefined(details) ?
        '<div class="tag-item div-parent p-parent img-parent" ' +
        'id="div-vertical-item-tag-' + id + '" onclick="tagItemVerticalBackgroundVisibility(this)">' :
        '<div class="tag-item div-parent p-parent img-parent">\n' +
        '        <p class="rectangle">ON</p>\n' +
        '        <p class="horizontal-txt">' + name + '</p>\n' +
        isDefined(details) ?
            '        <img class="horizontal-img" src="' + getIconsUrl() + 'arrow-right.svg"/>\n' : '' +
        isDefined(isUsedAuth) ?
            '  <img class="resize-img-auth" id="openAuthDialog-' + id + '" onclick="dialog(this.id)" src="' + getIconsUrl() + 'auth.svg"/>\n' : '' +
            '</div>\n' +
            isLastItem ?
                '<hr>\n' : '\n' +
                isDefined(details) ? details : '\n';

}