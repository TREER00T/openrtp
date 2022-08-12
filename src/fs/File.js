let fs = require('fs');


module.exports = {

    read(location) {
        return fs.readFileSync(location).toString();
    }

}