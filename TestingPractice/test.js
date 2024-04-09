// Calculator
const calculator = {
    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
    multiply(a, b) {
      return a * b;
    },
    divide(a, b) {
      return a / b;
    },
  };
  
  module.exports = calculator;

// Capitalize

const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

module.exports = capitalize;

//Reverse string
const reverseString = (str) => {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};
module.exports = reverseString;
