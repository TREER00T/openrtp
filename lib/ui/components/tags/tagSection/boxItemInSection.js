let {
    isDefined
} = require('../../../../util/Utilities');


module.exports.boxItemInSection = (items) => {
    return '<div class="box-tag margin-top-1 vertical-list">\n' +
    isDefined(items) ? items + '\n' : '' +
        '</div>\n';
}