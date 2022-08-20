let {
    getIconsUrl
} = require('../../../../util/Utilities');

module.exports.item = (data, iconName) => {
    return '<div class="grid-item">\n' +
        '                <div class="circle-red-back-icon">\n' +
        '                    <img class="resize-img" src="' + getIconsUrl() + iconName + '.png">\n' +
        '                </div>\n' +
        '                <p class="black">' + data + '</p>\n' +
        '</div>';
}