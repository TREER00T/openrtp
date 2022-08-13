let {
        isJsonObject,
        isArray,
        isString,
        makeObject,
        isTagsUsed
    } = require('../util/Utils');

let pathsObject = {};

let objectWithTagAndItem = {};

function addItemIntoSpecificTagColumn() {

}


module.exports = {

    parse(obj) {
        pathsObject = obj;
    },

    toJson() {
        addItemIntoSpecificTagColumn();
        let data = [];
        if (isArray(pathsObject)) {
            pathsObject.forEach(item => {
                data.push(item);
            });
            return {'/': data};
        }
        if (isJsonObject(pathsObject))
            for (let key in pathsObject) {
                let item = pathsObject[key];

                item?.forEach(object => {
                    let tagsInsidePaths = object?.tags,
                        isTagsUsedInsidePaths = isTagsUsed(tagsInsidePaths);

                    if (!isTagsUsedInsidePaths) {
                        data.push(makeObject(key, object));
                        return;
                    }

                    tagsInsidePaths?.forEach(tagItem => {

                        // let tags = yamlDataObject.tags();
                        //
                        // tags.forEach(item => {
                        //     let tagName = item?.name;
                        //     if (tagItem !== tagName)
                        //         return;
                        //
                        //     console.log('d')
                        // });


                    });

                    // if (isString(arrayOfTag))

                });


            }
        return data;
    }

}