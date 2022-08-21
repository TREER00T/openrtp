let validation = require('./validation/index');

module.exports.content = () => {
    return validation.data();
}