/**
 * Creates an array of values that are in the first array, but not not in the second array.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 */

export const a1 = ['a', 'b', 'c', 't'];
const a2 = ['d', 'a', 't', 'e', 'g'];

console.log(a2.filter((x) => !a1.includes(x)));
