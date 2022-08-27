let {
    isDefined,
    getIconsUrl
} = require('../../../../util/Utilities');


module.exports.itemInSection = (name, isLastItem, id, isUsedAuth, details) => {

    let base = '';

    base = '<div class="tag-item div-parent p-parent img-parent" ' +
        'id="div-vertical-item-tag-' + id + '" onclick="tagItemVerticalBackgroundVisibility(this)">' +
        '        <p class="rectangle">ON</p>\n' + '        <p class="horizontal-txt">' + name + '</p>\n';


    if (isUsedAuth)
        base = '<div class="tag-item div-parent p-parent img-parent">\n' + '        <p class="rectangle">ON</p>\n' + '<div class="flex-div margin-top-1" ' +
            'id="div-vertical-item-tag-' + id + '" onclick="tagItemVerticalBackgroundVisibility(this)">' +
            '        <p class="horizontal-txt">' + name + '</p>\n';


    if (isDefined(details))
        base += '        <img class="horizontal-img" id="arrow-vertical-item-tag-' + id + '" src="' + getIconsUrl() + 'arrow-right.svg"/>\n';

    if (isUsedAuth)
        base += '</div>\n';


    if (isUsedAuth)
        base += '  <img class="resize-img-auth" id="openAuthDialog-' + id + '" onclick="dialog(this.id)" src="' + getIconsUrl() + 'auth.svg"/>\n';

    base += '</div>\n';

    if (!isLastItem)
        base += '<hr>\n';

    if (isDefined(details))
        base += details;

    return base;
}