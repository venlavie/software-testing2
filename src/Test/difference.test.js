import difference from "../difference.js"

const users = [2, 1]
const other = [2, 3]

const answer = [1]

describe("#difference()", function() {
    test("Creates an array of `array` values not included in the other given arrays", function() {
        expect(difference(users, other)).toStrictEqual(answer)
    });
});