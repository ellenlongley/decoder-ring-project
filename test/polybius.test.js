// Write your tests here!

const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    it("should encode or decode a message by replacing each letter with number pairs", () => {
        const message = "message";
        const actual = polybius(message);
        const expected = "23513434112251";
  
        expect(actual).to.equal(expected);
    });

    it("should return false if the length of all numbers is odd", () => {
        const message = "2345 235134341122514";
        const actual = polybius(message, false);
  
        expect(actual).to.be.false;
    });

    it("should leave spaces as is", () => {
        const message = "2345 23513434112251";
        const actual = polybius(message, false);
        const expected = "my message";
  
        expect(actual).to.equal(expected);
    });

    it("should translate both 'i' and 'j' to 42", () => {
        const message = "jiggle";
        const actual = polybius(message);
        const expected = "424222221351";
  
        expect(actual).to.equal(expected);
    });
});