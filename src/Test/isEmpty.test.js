import isEmpty from "../isEmpty.js"



describe("#isEmpty()", function() {
    test("Checks if `value` is an empty object, collection, map, or set.", function() {
        expect(isEmpty(null)).toBeTrue
    });
});

describe("#isEmpty()", function() {
    test("Checks if `value` is an empty object, collection, map, or set.", function() {
        expect(isEmpty(true)).toBeTrue
    });
});

describe("#isEmpty()", function() {
    test("Checks if `value` is an empty object, collection, map, or set.", function() {
        expect(isEmpty(1)).toBeTrue
    });
});

describe("#isEmpty()", function() {
    test("Checks if `value` is an empty object, collection, map, or set.", function() {
        expect(isEmpty('abc')).toBeFalse
    });
});