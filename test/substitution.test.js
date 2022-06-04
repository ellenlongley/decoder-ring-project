// Write your tests here!

const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    it("should encode or decode a message by using the given substitution alphabet", () => {
        const message = "message";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(message, alphabet);
        const expected = "ykrrpik";

        expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
        const message = "message";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet);
        const expected = "ysii.rs";
  
        expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
        const message = "yp ysii.rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet, false);
        const expected = "my message";
  
        expect(actual).to.equal(expected);
    });

    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
        const message = "message";
        const alphabet = "short";
        const actual = substitution(message, alphabet);

        expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet does not contain unique characters", () => {
        const message = "message";
        const alphabet = "abcabcabcabcabcabcabcabcab";
        const actual = substitution(message, alphabet);

        expect(actual).to.be.false;
    });


    
 });