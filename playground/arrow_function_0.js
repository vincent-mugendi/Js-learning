//   1. Convert the following traditional functions to arrow functions:

// Traditional function:
// function multiply(a, b) {
//   return a * b;
// }


const multiply = (a, b) => a * b;
console.log(multiply(5, 5));


// Traditional function:

// function isEven(num) {
//   return num % 2 === 0;
// }


const isEven = num => num % 2 === 0;
console.log(isEven(13));



//   Traditional function:
// function sayHello(name) {
//   return `Hello, ${name}!`;
// }

const sayHello = name => `Hello, ${name}!`;
console.log(sayHello("Vincent"))