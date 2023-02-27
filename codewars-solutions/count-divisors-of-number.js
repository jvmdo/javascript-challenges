//* My solution
function getDivisorsCnt(n) {
  return Array.from({ length: n }, (_, i) => ++i).reduce(
    (count, i) => (n % i === 0 && ++count, count),
    0
  );
}

//* With prime factorization
function getDivisorsCount(n) {
  let count = 1;
  let currDivisorCount = 1;
  let currFactor = 2;

  while (n > 1) {
    if (n % currFactor === 0) {
      n /= currFactor;
      currDivisorCount++;
    } else {
      count *= currDivisorCount;
      currFactor++;
      currDivisorCount = 1;
    }
  }

  return count * currDivisorCount;
}

// const output = getDivisorsCount(5000000)
const output = getDivisorsCnt(5000000);
output;
