let fs = require('fs');

let location = '';


module.exports = {


    setLocation(loc) {
        location = loc;
    },


    read() {
        return fs.readFileSync(location).toString();
    }


}