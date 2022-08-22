let {
    isDefined
} = require('../../../../util/Utilities');


module.exports.detailItem = (route, description, id, isLastItem, detailsForParametersOrArgsOrEvents) => {

    let base = '<div class="rectangle-box-border" id="rectangle-vertical-box-border-' + id + '">\n';

    if (isDefined(route))
        base += '        <div class="p-parent">\n' +
            '            <p class="horizontal-txt">Route :</p>\n' +
            '            <p class="margin-left-3 font-simple">' + route + '</p>\n' +
            '        </div>\n';

    if (isDefined(description))
        base += '<hr>\n' +
            '        <div class="p-parent">\n' +
            '            <p class="horizontal-txt">Description :</p>\n' +
            '            <p class="margin-left-3 font-simple">' + description + '</p>\n' +
            '        </div>';


    if (!isLastItem)
        base += '<hr>\n';

    if (isDefined(detailsForParametersOrArgsOrEvents))
        base += detailsForParametersOrArgsOrEvents;


    return base + '</div>\n';
}