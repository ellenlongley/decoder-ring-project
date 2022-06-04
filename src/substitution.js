// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length < 26 || alphabet.length > 26) {
      return false;
    }
    const alphabetParam = alphabet.split('');
    const inputArray = input.split('');
    const encodeDictionary = {};
    const decodeDictionary = {};
    let hasSame = false;
    alphabetParam.forEach((letter, index) => {
      if (decodeDictionary[letter]) {
        // return false if duplicated letters
        hasSame = true;
      }
      decodeDictionary[letter] = alphabetArray[index]
    });
    if (hasSame) return false;
    if (encode) {
      alphabetArray.forEach((letter, index) => {
        encodeDictionary[letter] = alphabetParam[index]
      });
      let encoded = '';
      inputArray.forEach((character) => {
        if (character == " ") {
          encoded += character
        } else {
          const substitutedCharacter = encodeDictionary[character];
          encoded += substitutedCharacter;
        }
      })
      return encoded;
    } else {
      let decoded = '';
      inputArray.forEach((character) => {
        if (character == " ") {
          decoded += character
        } else {
          const substitutedCharacter = decodeDictionary[character];
          decoded += substitutedCharacter;
        }
      })
      return decoded;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
