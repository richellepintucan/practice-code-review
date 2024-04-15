import { a1 } from './difference.js';

describe('Array difference test', () => {
    test('should return elements of a2 not present in a1', () => {
        const a2 = ['d', 'a', 't', 'e', 'g'];
        const expected = ['d', 'e', 'g'];
        const result = a2.filter((x) => !a1.includes(x));
        expect(result).toEqual(expected);
    });
});
