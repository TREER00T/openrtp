let {
    isObjectUndefined
} = require('../util/Utils');

let infoObject = {};

module.exports = {

    parse(obj) {
        infoObject = obj;
    },

    title() {
        let title = infoObject?.title;
        if (!isObjectUndefined(title))
            return title;
    },

    version() {
        let version = infoObject?.version;
        if (!isObjectUndefined(version))
            return version;
    },

    contactEmail() {
        let email = infoObject?.contact?.email;
        if (!isObjectUndefined(email))
            return email;
    },

    contactPhone() {
        let phone = infoObject?.contact?.phone;
        if (!isObjectUndefined(phone))
            return phone;
    },

    licenseName() {
        let name = infoObject?.license?.name;
        if (!isObjectUndefined(name))
            return name;
    },

    licenseUrl() {
        let url = infoObject?.license?.url;
        if (!isObjectUndefined(url))
            return url;
    },

    description() {
        let description = infoObject?.description;
        if (!isObjectUndefined(description))
            return description;
    }

}