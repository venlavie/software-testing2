import isDate from "../isDate.js"



describe("#isDate()", function() {
    test("Checks if `value` is classified as a `Date` object.", function() {
        expect(isDate(new Date)).toBeTrue
    });
});

describe("#isDate()", function() {
    test("Checks if `value` is classified as a `Date` object.", function() {
        expect(isDate('Mon April 23 2012')).toBeFalse
    });
});