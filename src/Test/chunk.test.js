import chunk from "../chunk.js"

const users = ['a', 'b', 'c', 'd']

const answer = [['a', 'b'], ['c', 'd']]


describe("#chunk()", function() {
    test("Creates an array of elements split into groups the length of `size`.", function() {
        expect(chunk(users, 2)).toStrictEqual(answer)
    });
});