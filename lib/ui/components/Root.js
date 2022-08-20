let {
        body
    } = require('./Body'),
    {
        head
    } = require('./Head');

module.exports.html = () => {
    return '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
               head() + '\n' +
               body() + '\n' +
        '</html>';
}