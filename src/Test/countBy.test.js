import countBy from "../countBy.js"

const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': true },
    { 'user': 'fred', 'active': false }
]


describe("#countBy()", function() {
    test("reates an object composed of keys generated from the results of running each element of `collection` thru `iteratee`.", function() {
        expect(countBy(users, value => value.active)).toStrictEqual({ 'true': 2, 'false': 1 })
    });
});