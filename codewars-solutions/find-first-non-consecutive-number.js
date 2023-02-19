//* My solution
function firstNonConsecutive(arr) {
  if (!Array.isArray(arr) || arr.length < 2) return null;
  return arr.find((x, i) => x - 1 !== (arr[i - 1] ?? x - 1)) ?? null;
}

//* Clever solution [not mine]
/* function firstNonConsecutive (arr) {
  let result = arr.find((val, index) => val !== index + arr[0]);
  return (Number.isInteger(result)) ? result : null;
} */

const input = [1, 2, 3, 4, 6, 7, 8];
const output = firstNonConsecutive(input);
console.log(output);
