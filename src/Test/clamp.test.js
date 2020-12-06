import clamp from "../clamp.js"


describe("#clamp()", function() {
    test("Clamps `number` within the inclusive `lower` and `upper` bounds", function() {
        expect(clamp(-10, -5, 5)).toStrictEqual(-5)
    });
});