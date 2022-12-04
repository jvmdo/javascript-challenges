//* My solution
function squareOrSquareRoot(array) {
  return array.map((n) =>
    Number.isInteger(Math.sqrt(n)) ? Math.sqrt(n) : n ** 2
  );
}

//* Clever solution [not mine]
// const squareOrSquareRoot = (array) => array.map(n => n**.5 % 1 ? n*n : n**.5)

const input = [4, 3, 9, 7, 2, 1];
const output = squareOrSquareRoot(input);
console.log(output);
