//* My solution
function nthFibo(n) {
  let [a, b] = [0, 1];
  for (let i = 1; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return a;
}

//* With closed formula
// const nthFibo = (n) => Math.round(((1 + 5 ** 0.5) / 2) ** --n / 5 ** 0.5);

//* The same as before (an approximation)
// const fib = (n) => {
//   return Math.round(Math.pow(1.618033988749895, n - 1) / 2.23606797749979);
// };

const output = nthFibo(1);
output;
