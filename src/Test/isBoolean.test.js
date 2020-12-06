import isBoolean from "../isBoolean.js"


describe("#isBoolean()", function() {
    test("is Boolean", function() {
        expect(isBoolean(false)).toBeTrue
    });
});