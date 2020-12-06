import eq from "../eq.js"

const object = { 'a': 1 }


describe("#eq()", function() {
    test("equal", function() {
        expect(eq(object, object)).toBeTrue
    });
});