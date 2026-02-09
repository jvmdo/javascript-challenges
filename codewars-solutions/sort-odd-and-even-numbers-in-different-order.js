function sortArray(array) {
  if (array.length === 0) return array;

  const odds = array.filter((el) => el % 2 === 1).sort((a, b) => a - b);
  const evens = array.filter((el) => el % 2 === 0).sort((a, b) => b - a);

  return array.map((el) => (el % 2 === 0 ? evens.shift() : odds.shift()));
}

const input = [1, 11, 8, 4, 3, 2, 5];
const output = sortArray(input);
console.log(output);
