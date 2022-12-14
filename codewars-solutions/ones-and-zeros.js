//* My solution
const binaryArrayToNumber = (arr) => {
  return Number.parseInt(arr.join(""), 2);
};

//* Clever solution [not mine]
//? Left bitwise shit x << y is equivalent as x * (2 ** y)
/* const binaryArrayToNumber = (arr) => {
  return arr.reduce((a, b) => (a << 1) | b);
}; */

const input = [1, 1, 0, 1];
const output = binaryArrayToNumber(input);
console.log(output);
