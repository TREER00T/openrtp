let {
    isDefined,
    getIconsUrl
} = require('../../../../util/Utilities');


module.exports.modelItemInSection = (name, id, data) => {

    return isDefined(name) && isDefined(data) ? '<div class="models-item div-parent p-parent img-parent" id="div-vertical-item-model-' + id + '" onclick="modelItemVerticalBackgroundVisibility(this)">\n' +
        '        <p class="horizontal-txt">' + name + '</p>\n' +
        '        <img class="horizontal-img" src="' + getIconsUrl() + 'arrow-right.svg" id="arrow-vertical-item-model-' + id + '"/>\n' +
        '        <table class="margin-bottom-3 tbl-status" id="table-model-' + id + '">\n' +
        '            <tr>\n' +
        '                <th>Name</th>\n' +
        '                <th>Type</th>\n' +
        '                <th>Description</th>\n' +
        '            </tr>\n' +
        data + '\n' +
        '        </table>' +
        '    </div>' : '';

}