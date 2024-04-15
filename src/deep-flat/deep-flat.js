/**
 * Converts a nested array into a single array with no nesting
 *
 * @param {Array} [array=[]] - The array to flatten.
 * @returns {Array} Returns the new flattened array.
 */

export let nestedArray = [1, [2, 3], [4, [5, 6]], 7];
let flatArray = nestedArray.flat(2);
console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7]
