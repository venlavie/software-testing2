import filter from "../filter.js"

const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred',   'active': false }
]

const answer = ['barney']


describe("#filter()", function() {
    test("filters array", function() {
        expect(filter(users, ({active}) => active)).toStrictEqual(answer)
    });
});