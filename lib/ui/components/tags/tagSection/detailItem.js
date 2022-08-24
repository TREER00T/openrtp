let {
    isDefined
} = require('../../../../util/Utilities');

const HR_TAG_POINTER_1 = '$H$T&P_1',
    HR_TAG_POINTER_2 = '$H$T&P_2',
    HR_TAG_POINTER_3 = '$H$T&P_3';

module.exports.detailItem = (route, description, id, lengthOfItem, detailsForParametersOrArgsOrEvents) => {

    let base = '<div class="rectangle-box-border" id="rectangle-vertical-box-border-' + id + '">\n';

    if (isDefined(route))
        base += '        <div class="p-parent">\n' +
            '            <p class="horizontal-txt">Route :</p>\n' +
            '            <p class="margin-left-3 font-simple">' + route + '</p>\n' +
            '        </div>\n ' + HR_TAG_POINTER_1;

    if (isDefined(description))
        base += '        <div class="p-parent">\n' +
            '            <p class="horizontal-txt">Description :</p>\n' +
            '            <p class="margin-left-3 font-simple">' + description + '</p>\n' +
            '        </div> ' + HR_TAG_POINTER_2;


    if (isDefined(detailsForParametersOrArgsOrEvents))
        base += detailsForParametersOrArgsOrEvents + ' ' + HR_TAG_POINTER_3;


    for (let index = 0; index < lengthOfItem; index++) {
        let pointer = '$H$T&P_',
            isLasIndex = lengthOfItem === index;

        if (!isLasIndex)
            base = base.replace(pointer + index, '<hr>\n');
    }

    [HR_TAG_POINTER_1, HR_TAG_POINTER_2, HR_TAG_POINTER_3].forEach(item => {
        base = base.replace(item, '');
    });

    return base + '</div>\n';
}