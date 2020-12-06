import reduce from "../reduce.js"


const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': true },
    { 'user': 'fred', 'active': false }
]

describe("#reduce()", function() {
    test("Reduces `collection` to a value which is the accumulated result", function() {
        expect(reduce([1, 2], (sum, n) => sum + n, 0)).toStrictEqual(3)
    });
});