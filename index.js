// index.js

// Function expression for divide
let divide = function(a, b) {
    return a / b;
  };
  
  // Arrow function for square
  let square = (x) => {
    return x * x;
  };
  
  // Arrow function for add
  let add = (a, b) => {
    return a + b;
  };
  
  // Exporting functions for testing
  module.exports = {
    divide,
    square,
    add
  };
  