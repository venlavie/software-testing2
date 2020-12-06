import endsWith from "../endsWith.js"

const users = "abc"
const value = "c"


describe("#endsWith()", function() {
    test("Checks if `string` ends with the given target string.", function() {
        expect(endsWith(users, value)).toBeTrue
    });
});