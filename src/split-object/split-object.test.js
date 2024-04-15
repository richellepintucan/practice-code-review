import { splitObject } from './split-object.js';

describe('splitObject function', () => {
    it('should split an object into multiple objects with one key/value pair each', () => {
        const originalObject = { a: 1, b: 2, c: 3 };
        const expectedSplitObjects = [{ a: 1 }, { b: 2 }, { c: 3 }];

        const result = splitObject(originalObject);

        expect(result).toEqual(expectedSplitObjects);
    });

    it('should return an empty array if the input object is empty', () => {
        const originalObject = {};
        const expectedSplitObjects = [];

        const result = splitObject(originalObject);

        expect(result).toEqual(expectedSplitObjects);
    });

    it('should handle objects with nested properties', () => {
        const originalObject = { a: 1, b: { c: 2 }, d: { e: { f: 3 } } };
        const expectedSplitObjects = [
            { a: 1 },
            { b: { c: 2 } },
            { d: { e: { f: 3 } } },
        ];

        const result = splitObject(originalObject);

        expect(result).toEqual(expectedSplitObjects);
    });
});
