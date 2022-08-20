let {
    getCssUrl,
    getIconsUrl
} = require('../../../lib/util/Utilities');

module.exports.head = () => {
    return '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n' +
        '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
        '    <link rel="stylesheet" href="' + getCssUrl() + '">\n' +
        '    <title>Treegex</title>\n' +
        '    <link rel="icon" type="image/x-icon" href="' + getIconsUrl() + 'favicon.ico">\n' +
        '   </head>\n';
}