import camelCase from "../camelCase.js"

const users = "Foo Bar"
const answer = "fooBar"

describe('#camelCase()', function() {
    test("Returns the camel cased string.", function() {
        expect(camelCase(users)).toBe(answer)
    });
});