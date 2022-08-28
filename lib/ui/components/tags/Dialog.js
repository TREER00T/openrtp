let {
    isDefined
} = require('../../../util/Utilities');


module.exports.dialog = (id, isCommonAuth, data) => {

    let base = '<p class="left caption">Authorizations</p>' +
        '<table class="margin-bottom-3">\n' +
        '        <tr>\n' +
        '            <th>Name</th>\n' +
        '            <th>In</th>\n' +
        '            <th>Type</th>\n' +
        '            <th>Required</th>\n' +
        '            <th>Description</th>\n' +
        '        </tr>\n' +
        data +
        '</table>\n';

    if (!isDefined(data))
        return '';

    if (isCommonAuth) {
        return '<dialog id="commonAuthDialog">' + base  +
            '\n<div class="close-btn" onclick="closeDialog(this.id)" id="closeCommonAuthDialog">\n' +
            '        Close\n' +
            '</div>\n' +
            '</dialog>';
    }


    return '<dialog id="authDialog-' + id + '">' + base  +
        '\n<div class="close-btn" onclick="closeDialog(this.id)" id="closeAuthDialog-' + id + '">\n' +
        '        Close\n' +
        '</div>\n' +
        '</dialog>';
}