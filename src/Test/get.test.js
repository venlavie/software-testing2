import get from "../get.js"

const object = { 'a': [{ 'b': { 'c': 3 } }] }

const value = ['a', '0', 'b', 'c']

const answer = 3

describe("#get()", function() {
    test("Gets the value at `path` of `object`.", function() {
        expect(get(object, value)).toStrictEqual(answer)
    });
});
