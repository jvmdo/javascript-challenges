//* My solution
/* function findStray(numbers) {
  return numbers.filter(
    (x) =>
      numbers.findIndex((y) => y === x) ===
      numbers.findLastIndex((y) => y === x)
  )[0];
} */

//* Best solution [not mine]
function findStray(numbers) {
  //? Bitwise XOR operator
  //? It only works because the list is odd-length
  return numbers.reduce((a, b) => a ^ b);
}

const output = findStray([17, 17, 17, 17, 17, 17, 23, 17, 17, 17, 17]);
output;
