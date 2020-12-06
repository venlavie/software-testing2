import capitalize from "../capitalize.js"

const users = "FRED"

const answer = "Fred"

describe('#capitalize()', function() {
    test("Converts the first character of `string` to upper case and the remaining to lower case.", function() {
        expect(capitalize(users)).toBe(answer)
    });
});