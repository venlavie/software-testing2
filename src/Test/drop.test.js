import drop from "../drop.js"

const users = [1, 2, 3]

const answer = [2, 3]


describe("#drop()", function() {
    test("Creates a slice of `array` with `n` elements dropped from the beginning.", function() {
        expect(drop(users)).toStrictEqual(answer)
    });
});