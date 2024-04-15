/**
 * Creates an array of values that are in both the first and the second arrays.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to include.
 * @returns {Array} Returns the new array of filtered values.
 */

export let arr1 = [1, 2, 3];
let arr2 = [2, 3];
let isFound = arr1.some((ai) => arr2.includes(ai));
