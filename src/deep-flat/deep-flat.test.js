import { flatArray } from './deep-flat.js';

describe('Flatten Nested Array', () => {
    it('should flatten a nested array', () => {
        let nestedArray = [1, [2, 3], [4, [5, 6]], 7];
        let flatArray = nestedArray.flat(2);
        expect(flatArray).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
});
