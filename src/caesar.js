// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  function caesar(input, shift, encode = true) {
    if (shift == undefined) {
      return false;
    }
    if (shift === 0) {
      return false;
    }
    if (shift < -25) {
      return false;
    }
    if (shift > 25) {
      return false;
    }
    // ex: input = "bob"
    let inputArray = input.split('');
    // now inputArray = ["b", " ", "o", "b"]
    if (encode) {
      let encoded = "";
      for (let i = 0; i < input.length; i++) {
        let letter = inputArray[i].toLowerCase();
        let encodedLetter = letter
        alphabetArray.forEach ((alphaLetter, index) => {
          if (alphaLetter == letter) {
            let shiftedIndex = index + shift;
            if (shiftedIndex < 0) {
              shiftedIndex += 26;
            }
            if (shiftedIndex > 25) {
              shiftedIndex -= 26;
            }
            encodedLetter = alphabetArray[shiftedIndex];
          }
        })
        encoded += encodedLetter;
      }
      return encoded;
    } else {
      let decoded = "";
      for (let i = 0; i < input.length; i++) {
        let letter = inputArray[i].toLowerCase();
        let decodedLetter = letter;
        alphabetArray.forEach ((alphaLetter, index) => {
          if (alphaLetter == letter) {
            let shiftedIndex = index - shift;
            if (shiftedIndex < 0) {
              shiftedIndex += 26;
            }
            if (shiftedIndex > 25) {
              shiftedIndex -= 26;
            }
            decodedLetter = alphabetArray[shiftedIndex];
          }
        })
        decoded += decodedLetter;
      }
      return decoded;
    }
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
