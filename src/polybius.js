// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const alphabetDictionary = {
    "a": 11,
    "b": 21,
    "c": 31,
    "d": 41,
    "e": 51,
    "f": 12,
    "g": 22,
    "h": 32,
    "i": 42,
    "j": 42,
    "k": 52,
    "l": 13,
    "m": 23,
    "n": 33,
    "o": 43,
    "p": 53,
    "q": 14,
    "r": 24,
    "s": 34,
    "t": 44,
    "u": 54,
    "v": 15,
    "w": 25,
    "x": 35,
    "y": 45,
    "z": 55
  }

  function polybius(input, encode = true) {
    let inputArray = input.split('');
    if (encode) {
      let encoded = "";
      for (let i = 0; i < inputArray.length; i++) {
        const letter = inputArray[i].toLowerCase();
        if (letter === " ") {
          encoded += letter;
        } else {
          let number = alphabetDictionary[letter];
          encoded += number;
        }
      }
      return encoded;
    } else {
      if ((input.replace(" ", "").length % 2) !== 0) {
        return false;
      }
      let decoded = "";
      "1122 3344 "
      for (let i = 0; i < inputArray.length; i+=2) {
        if (inputArray[i] == " ") {
          decoded += inputArray[i];
          i += 1;
        }
        let number1 = inputArray[i];
        let number2 = inputArray[i+1];
        let fullNumber = number1 + number2;
        Object.entries(alphabetDictionary).forEach((entry) => {
            if (entry[1] == fullNumber) {
              decoded += entry[0];
            }
        })
      } return decoded;
    }


  } 

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
