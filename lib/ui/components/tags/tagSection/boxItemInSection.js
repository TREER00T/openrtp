let {
    isDefined
} = require('../../../../util/Utilities');


module.exports.boxItemInSection = (items) => {

    if (!isDefined(items))
        return '';

    return '<div class="box-tag margin-top-1 vertical-list">\n' +
        items +
        '</div>\n';
}