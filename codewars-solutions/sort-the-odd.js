function sortArray(array) {
  const kek = array.filter((x) => x % 2).sort((a, b) => b - a);

  return array.map((x) => (x % 2 ? kek.pop() : x));
}

//* Same logic, but `shift()`ing
/* function sortArray(array) {
  const lol = array.filter((x) => x % 2).sort();
  
  return array.map((x) => x % 2 ? lol.shift() : x);
} */

const input = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const output = sortArray(input);
console.log(output);
