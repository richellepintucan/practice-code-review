import { sortNumbers } from './sort-numbers.js';

describe('sortNumbers', () => {
    it('should return a new array sorted in ascending order', () => {
        const originalArray = [1.5, 1, -1.5, 0, -1];
        const sortedArray = sortNumbers(originalArray);
        expect(sortedArray).toEqual([-1.5, -1, 0, 1, 1.5]);
    });

    it('should not modify the original array', () => {
        const originalArray = [1.5, 1, -1.5, 0, -1];
        const sortedArray = sortNumbers(originalArray);
        expect(originalArray).toEqual([1.5, 1, -1.5, 0, -1]);
    });

    it('should handle an empty array', () => {
        const originalArray = [];
        const sortedArray = sortNumbers(originalArray);
        expect(sortedArray).toEqual([]);
    });

    it('should handle an array with a single element', () => {
        const originalArray = [42];
        const sortedArray = sortNumbers(originalArray);
        expect(sortedArray).toEqual([42]);
    });

    it('should handle an array with negative numbers', () => {
        const originalArray = [-10, 0, -5, -3];
        const sortedArray = sortNumbers(originalArray);
        expect(sortedArray).toEqual([-10, -5, -3, 0]);
    });
});
