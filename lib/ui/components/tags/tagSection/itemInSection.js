let {
    isDefined,
    getIconsUrl
} = require('../../../../util/Utilities');


module.exports.itemInSection = (name, isLastItem, id, isUsedAuth, details) => {

    let base = '<div class="tag-item div-parent p-parent img-parent">\n';

    if (isDefined(details))
        base = '<div class="tag-item div-parent p-parent img-parent" ' +
            'id="div-vertical-item-tag-' + id + '" onclick="tagItemVerticalBackgroundVisibility(this)">';

    base += '        <p class="rectangle">ON</p>\n' +
        '        <p class="horizontal-txt">' + name + '</p>\n';

    if (isDefined(details))
        base += '        <img class="horizontal-img" id="arrow-vertical-item-tag-' + id + '" src="' + getIconsUrl() + 'arrow-right.svg"/>\n';

    if (isDefined(isUsedAuth))
        base += '  <img class="resize-img-auth" id="openAuthDialog-' + id + '" onclick="dialog(this.id)" src="' + getIconsUrl() + 'auth.svg"/>\n';

    base += '</div>\n';

    if (!isLastItem)
        base += '<hr>\n';

    if (isDefined(details))
        base += details;

    return base;
}