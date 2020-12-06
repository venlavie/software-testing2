import castArray from "../castArray.js"

const value = 'abc'
const answer = ['abc']

describe("#castArray()", function() {
    it("cast array", function() {
        expect(castArray(value)).toStrictEqual(answer)
    });
});