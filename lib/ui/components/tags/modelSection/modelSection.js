let {
    isDefined
} = require('../../../../util/Utilities');


module.exports.modelSection = (data) => {


    if (!isDefined(data))
        return '';


    return '<div class="tag red margin-top-4 red-shadow">\n' +
        '    <p class="p white">Models</p>\n' +
        '</div>\n' +
        '<div class="box-tag margin-top-4 vertical-list">\n' +
        data +
        '\n</div>\n';
}