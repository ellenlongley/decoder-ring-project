// Write your tests here!

const expect = require("chai").expect;
const { caesar } = require("../src/caesar");


describe("caesar", () => {
    it("should encode or decode a message by shifting the letters", () => {
        const message = "aaa";
        const shift = 2;
        const actual = caesar(message, shift);
        const expected = "ccc";
  
        expect(actual).to.equal(expected);
    });

    it("should leave spaces and other symbols as is", () => {
        const message = "a message.";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "d phvvdjh.";
  
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const message = "A Message";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "d phvvdjh";
  
        expect(actual).to.equal(expected);
    });

    it("should handle appropriately the letters at the end of the alphabet", () => {
        const message = "zebra magazine";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "cheud pdjdclqh";
  
        expect(actual).to.equal(expected);
    });

    it("should allow for a negative shift that will shift to the left", () => {
        const message = "zebra magazine";
        const shift = -3;
        const actual = caesar(message, shift);
        const expected = "wbyox jxdxwfkb";
  
        expect(actual).to.equal(expected);
    });

// start new describe here?

    it("should return false if the shift amount is 0", () => {
        const message = "secret message";
        const shift = 0;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
    });

    it("should return false if the shift amount is above 25", () => {
        const message = "secret message";
        const shift = 26;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
    });

    it("should return false if the shift amount is less than -25", () => {
        const message = "secret message";
        const shift = -26;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
    });


  });