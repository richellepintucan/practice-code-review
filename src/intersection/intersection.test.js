import { isFound } from './intersection.js';

test('Check if elements in arr1 are found in arr2', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [2, 3];
    const isFound = arr1.some((ai) => arr2.includes(ai));
    expect(isFound).toBe(true);
});
