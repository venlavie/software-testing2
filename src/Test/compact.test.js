import compact from "../compact.js"

const value = [0, 1, false, 2, '', 3]
const answer = [1, 2, 3]


describe("#compact()", function() {
    test("Creates an array with all falsey values removed.", function() {
        expect(compact(value)).toStrictEqual(answer)
    });
});