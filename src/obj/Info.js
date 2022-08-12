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
        return false;
    },

    version() {
        let version = infoObject?.version;
        if (!isObjectUndefined(version))
            return version;
        return false;
    },

    contactEmail() {
        let email = infoObject?.contact?.email;
        if (!isObjectUndefined(email))
            return email;
        return false;
    },

    contactPhone() {
        let phone = infoObject?.contact?.phone;
        if (!isObjectUndefined(phone))
            return phone;
        return false;
    },

    licenseName() {
        let name = infoObject?.license?.name;
        if (!isObjectUndefined(name))
            return name;
        return false;
    },

    licenseUrl() {
        let url = infoObject?.license?.url;
        if (!isObjectUndefined(url))
            return url;
        return false;
    },

    description() {
        let description = infoObject?.description;
        if (!isObjectUndefined(description))
            return description;
        return false;
    }

}