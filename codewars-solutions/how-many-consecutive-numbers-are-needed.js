//* My solution
function consecutive(arr) {
  return arr.length ? Math.max(...arr) - Math.min(...arr) + 1 - arr.length : 0;
}

//* My dumb solution
/* function consecutive(arr) {
  arr.sort((a, b) => a - b);
  const diff = [];
  arr.forEach((el, i) => diff.push(arr[i + 1] - el - 1));
  return diff.reduce((acc, cur) => (Number.isFinite(cur) ? acc + cur : acc), 0);
} */

const input = [226, 217, 168, 656, 284, 115, 525, 598, 314, 185, -36];
const output = consecutive(input);
console.log(output);
