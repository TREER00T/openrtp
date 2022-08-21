let {
    getIconsUrl,
    isDefined,
    isJsonObject
} = require('../../../../util/Utilities');

module.exports.item = (data, iconName) => {

    if (!isDefined(data))
        return '';

    let base = '<div class="grid-item">\n' +
        '                <div class="circle-red-back-icon">\n' +
        '                    <img class="resize-img" src="' + getIconsUrl() + iconName + '.png">\n' +
        '                </div>\n';

    if (isJsonObject(data))
        return `${base}                <a class="black link" href="${data.url}">${data.name}</a> </div>\n`;


    return base + '                <p class="black">' + data + '</p>\n </div>\n';
}