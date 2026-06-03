function capitalizeFirstLetter(capitalInput) {
  const capitalFirst = capitalInput.charAt(0).toUpperCase();
  const capitalOutput = (capitalFirst + capitalInput.slice(1));
  
  return capitalOutput;
};

function reverseString(input) {
  let output = '';
  let currentChar = input.length -1;

  while (currentChar >= 0) {
    output = output.concat(input.charAt(currentChar));
    currentChar--;
  }

  return output;
};

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      console.log("Can't divide by zero!");
      return 0;
    }
    return a / b;
  }
};

function caesarCipher(input, shift) {
  if (shift < -25 || shift > 25) {
    console.log("Cannot shift more than 25 letters!"); 
    return null;
  }

  if (shift < 0) {
    shift = shift + 26;
  }
  
  let originalstring = input;
  let counter = input.length;
  let currentPosition = 0;
  let output = '';

  let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  while (counter > 0) {
    let currentChar = input.charAt(currentPosition)
    if (!lowerCase.includes(currentChar) && !upperCase.includes(currentChar)) {
      output = output.concat(currentChar)
    } else if (lowerCase.includes(currentChar)) {
      if ((lowerCase.indexOf(currentChar) + shift) > 25) {
        let index = (lowerCase.indexOf(currentChar) + shift) - 26;
        output = output.concat(lowerCase[index]);
      } else {
        let index = (lowerCase.indexOf(currentChar) + shift);
        output = output.concat(lowerCase[index]);
      };
    } else if (upperCase.includes(currentChar)) {
      if ((upperCase.indexOf(currentChar) + shift) > 25) {
        let index = (upperCase.indexOf(currentChar) + shift) - 26;
        output = output.concat(upperCase[index]);
      } else {
        let index = (upperCase.indexOf(currentChar) + shift);
        output = output.concat(upperCase[index]);
      };
    };
    currentPosition++;
    counter--;
  }

  return output;
}

const analyzeArray = {
    average: (items) => {
    let sum = 0;
    let sumFunction = (a, b) => a + b;
    let divideFunction = (a, b) => a / b;

    items.forEach((item) => {
      sum = sumFunction(sum, item);
    });

    const output = divideFunction(sum, items.length);
    return output;
  },

  min: (items) => {
    items.sort((a, b) => a - b);
    return items.at(0);
  },

  max: (items) => {
    items.sort((a, b) => a - b);
    return items.at(-1);
  },

  length: (items) => {
    return items.length;
  },
} 

module.exports = { capitalizeFirstLetter, reverseString, calculator, caesarCipher, analyzeArray };