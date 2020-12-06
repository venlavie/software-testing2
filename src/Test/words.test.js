import words from "../words.js"



describe("#words()", function() {
    test("Splits `string` into an array of its words.", function() {
        expect(words('fred, barney, & pebbles')).toStrictEqual(['fred', 'barney', 'pebbles'])
    });
});