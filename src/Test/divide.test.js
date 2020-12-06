import divide from "../divide.js"


describe("#divide()", function() {
    test("divide numbers", function() {
        expect(divide(6,4)).toBe(1.5)
    });
});