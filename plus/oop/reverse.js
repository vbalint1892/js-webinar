/**
 * It reverses the given object, i.e. return a copy of the object
 * where the keys have become the values and the values the keys
 *
 * @param {object} o the object
 * @returns {object} the new object
 */
function reverseObject(o) {
    if (typeof o !== "object") {
        throw new Error("Invalid object!");
    }
    const newObject = {};
    for (const [key, value] of Object.entries(o)) {
        newObject[value] = key;
    }
    return newObject;
}

module.exports = reverseObject;