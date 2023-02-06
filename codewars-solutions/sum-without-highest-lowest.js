//* My solution
function sumArray(array) {
  if (!Array.isArray(array)) return 0;

  const minIndex = array.findIndex((el) => el === Math.min(...array));
  array.splice(minIndex, 1);

  const maxIndex = array.findIndex((el) => el === Math.max(...array));
  array.splice(maxIndex, 1);

  return array.length < 1 ? 0 : array.reduce((acc, cur) => acc + cur, 0);
}

//* Best solution [not mine]
/* function sumArray(array) {
  return Array.isArray(array) && array.length > 1
    ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
    : 0
} */

const input = [-6, 20, -1, 10, -12];
const output = sumArray(input);
console.log(output);
