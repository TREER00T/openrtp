let {
    isDefined
} = require('../../../util/Utilities');


module.exports.dialog = (id, isCommonAuth, data) => {

    return isDefined(data) ?
        isCommonAuth ?
            '<dialog id="commonAuthDialog">' :
            '<dialog id="authDialog-' + id + '">' +
            '<p class="left caption">Authorizations</p>' +
            '<table class="margin-bottom-3">\n' +
            '        <tr>\n' +
            '            <th>Name</th>\n' +
            '            <th>In</th>\n' +
            '            <th>Type</th>\n' +
            '            <th>Required</th>\n' +
            '            <th>Description</th>\n' +
            '        </tr>\n' +
            '</table>\n' +
            data + '\n' +
            isCommonAuth ?
                '<div class="close-btn" id="closeCommonAuthDialog">\n' :
                '<div class="close-btn" id="closeAuthDialog-' + id + '">\n' +
                '        Close\n' +
                '</div>\n' +
                '</dialog>' : '';

}