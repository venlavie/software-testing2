import defaultToAny from "../defaultToAny.js"


describe("#defaultToAny()", function() {
    test("Returns first not Null value", function() {
        expect(defaultToAny(undefined,2,3)).toStrictEqual(2)
    });
});