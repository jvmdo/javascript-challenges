//* My solution
function sumTwoSmallestNumbers(numbers) {
  const firstMin = Math.min(...numbers);
  const secondMin = Math.min(...numbers.filter((n) => n != firstMin));
  return firstMin + secondMin;
}

const input = [243, 546, 745, 123, 978];
const output = sumTwoSmallestNumbers(input);
console.log(output);
