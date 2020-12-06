import add from "../add.js"


describe('#add()', function() {
    test('add positive number to positive number', function() {
        expect(add(6,4)).toBe(10);
    });
});