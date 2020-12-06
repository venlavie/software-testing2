import every from "../every.js"

const object = [true, 1, null, 'yes']

describe("#every()", function() {
    test("compare all to boolean", function() {
        expect(every(object, Boolean)).toBeFalse
    });
});