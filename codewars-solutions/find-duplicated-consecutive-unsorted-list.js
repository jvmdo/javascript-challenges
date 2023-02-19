function findDup(arr) {
  // return arr.find((n, i) => arr.indexOf(n) !== i);
  // return arr.find((n) => arr.indexOf(n) !== arr.lastIndexOf(n));
  return +arr.join(" ").match(/\b(\d+)\b.*\b\1\b/)[1];
}

const input = [11, 32, 73, 75, 45, 22, 23, 55, 55];
const output = findDup(input);
console.log(output);
