import at from "../at.js"


const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
const answer = [3,4]

describe('#at()', function() {
    test("create an array of values corresponding to 'paths' of 'object'", function() {
        expect(at(object, ['a[0].b.c', 'a[1]'])).toStrictEqual(answer)
    });
});