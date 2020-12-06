import ceil from "../ceil.js"

describe("#ceil()", function() {
    test("Computes `number` rounded up to `precision`.", function() {
        expect(ceil(4.006)).toStrictEqual(5)
    });
});