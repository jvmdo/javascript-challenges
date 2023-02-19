//* My solution
/* function findDup(arr) {
  return +arr.join(" ").match(/\b(\d+)\b.*\b\1\b/)[1]
} */

//* Best solution [not mine]
/* function findDup(arr) {
  return arr.reduce((a, b) => a + b) - arr.length * (arr.length - 1) / 2;
} */

//* Good solution [not mine]
//? Is it O(n)?
/* function findDup(arr) {
  return arr.find((x, i) => arr.indexOf(x) != i);
} */

//* My other solution [adapted]
function findDup(arr) {
  return arr.reduce((tracker, x) => {
    if (tracker[x]) tracker["dup"] = x;
    return (tracker[x] ??= x), tracker;
  }, {}).dup;
}

const input = [33, 1, 32, 15, 84, 22, 1, 3, 72, 0, 13];
const output = findDup(input);
console.log(output);
