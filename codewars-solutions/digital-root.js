//* My solution
function digitalRoot(n, sum = 0) {
  if (!n && sum >= 0 && sum < 10) return sum;
  if (!n) return digitalRoot(sum);
  return ((sum += n % 10), (n = Math.floor(n / 10)), digitalRoot(n, sum));
}

//* Another solution
// function digitalRoot(n) {
//   if (n < 10) return n
//   return digitalRoot(n.toString().split("").map(Number).reduce((cur, acc) => cur + acc, 0))
// }

//* Clever solution [not mine]
/* function digital_root(n) {
  if (n < 10) return n
  return digital_root(n % 10 + digital_root(Math.floor(n / 10)))
} */

//* Good solution [not mine]
/* function digital_root(n){
  n = eval(n.toString().split('').join('+'));
  if (n > 9) return digital_root(n);
  return n;
} */

//* Another good one [not mine]
/* function digital_root(n) {
  if (n < 10) return n; 
  return digital_root(n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
} */

//* Best solution [using closed math formula]
/* function digitalRoot(n) {
  return (n - 1) % 9 + 1;
}*/

const input = 167346;
const output = digitalRoot(input);
console.log(output);
