/**
 * Splits an object into multiple objects with one key/value pair each.
 *
 * @param {Object} [toSeparate={}] - The object to split into key/value pairs.
 * @returns {Array} Returns a new array with one entry for each key/value pair.
 */

export const splitObject = (obj) => {
    return Object.keys(obj).map((key) => ({ [key]: obj[key] }));
};

const originalObject = { a: 1, b: 2, c: 3 };
const splitObjects = splitObject(originalObject);
console.log(splitObjects);
