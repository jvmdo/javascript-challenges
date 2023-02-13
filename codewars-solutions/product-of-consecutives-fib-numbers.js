//* My solution
function productFib(prod) {
  for (let n = 0; n <= prod; n++) {
    const pair = fibPair(n);
    if (pair.first * pair.second === prod)
      return [pair.first, pair.second, true];
    if (pair.first * pair.second > prod)
      return [pair.first, pair.second, false];
  }

  // Fast doubling method algorithm adapted from
  // https://cp-algorithms.com/algebra/fibonacci-numbers.html#fast-doubling-method
  function fibPair(n) {
    if (n === 0)
      return Object.fromEntries([["first", 0], ["second", 1]]);

    const p = fibPair(n >> 1);
    const c = p.first * (2 * p.second - p.first);
    const d = p.first * p.first + p.second * p.second;

    if (n & 1)
      return Object.fromEntries([["first", d], ["second", c + d]]);
    else
      return Object.fromEntries([["first", c], ["second", d]]);
  }
}

//* Best solution [not mine]
//? It generates the fib numbers and check its products
/* function productFib(prod) {
  let [a, b] = [0, 1];
  while (a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
} */

const output = productFib(447577);
console.log(output);
