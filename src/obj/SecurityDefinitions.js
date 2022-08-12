let securityDefinitionsObject = {};

module.exports = {

    parse(obj) {
        securityDefinitionsObject = obj;
    },

    toArray() {
        let newArr = [];
        for (let key in securityDefinitionsObject) {
            newArr.push(securityDefinitionsObject[key]);
        }
        if (newArr.length !== 0)
            return newArr;
    }

}