let {
    isDefined
} = require('../../../../util/Utilities');


module.exports.detailItem = (route, description, id, isLastItem, detailsForParametersOrArgsOrEvents) => {
    return '<div class="rectangle-box-border" id="rectangle-vertical-box-border-' + id + '">\n' +
    isDefined(route) ?
        '        <div class="p-parent">\n' +
        '            <p class="horizontal-txt">Route :</p>\n' +
        '            <p class="margin-left-3 font-simple">' + route + '</p>\n' +
        '        </div>\n' +
        '</div>\n' : '' +
        isDefined(description) ?
            '<hr>\n' +
            '        <div class="p-parent">\n' +
            '            <p class="horizontal-txt">Description :</p>\n' +
            '            <p class="margin-left-3 font-simple">' + description + '</p>\n' +
            '        </div>' : '' +
            isLastItem ? '' : '<hr>\n' +
            isDefined(detailsForParametersOrArgsOrEvents) ? detailsForParametersOrArgsOrEvents : '' + '</div>\n';
}