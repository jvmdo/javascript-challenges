function arrayDiff(a, b) {
  return a.filter((el) => !b.includes(el));
}

const input = [
  [1, 5, 2, 3, 3, 3, 5, 6, 2],
  [2, 3, 3],
];
const output = arrayDiff(input[0], input[1]);
console.log(output);
