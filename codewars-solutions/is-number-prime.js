function isPrime(x) {
  for (let d = 2; d * d <= x; d++) {
    if (x % d === 0) return false;
  }
  return x > 1;
}

const output = isPrime(17);
console.log(output);
