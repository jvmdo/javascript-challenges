//* My solution
//? The nth row holds n numbers. The amount of numbers until the nth row
//? is found by this arithmetic progression (n / 2) * (n + 1).
//? The logic is to generate all the pyramid numbers,
//? get only the last row and then sum all its numbers.
/* function rowSumOddNumbers(n) {
	return Array.from({ length: (n / 2) * (n + 1) }, (_, i) => 2 * i + 1).slice(-n).reduce((acc, cur) => acc + cur, 0);
} */

//* My other solution
//? It finds the lower and upper bounds of the nth row using those ap
//? then add up all the odd numbers
function rowSumOddNumbers(n) {
  const lowerBound = n * n - n + 1;
  const upperBound = n * n + n - 1;
  return Array.from({ length: upperBound - lowerBound + 1 }, (_, i) =>
    i % 2 ? 0 : i + lowerBound
  ).reduce((acc, cur) => acc + cur, 0);
}

//* Best solution [not mine]
//! How did not i realize it?
/* function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
} */

const output = rowSumOddNumbers(5);
console.log(output);
