const squares = (n) => Array.from({ length: n }, (_, i) => (i + 1) * (i + 1));

const range = (n, start = 2, step = 1) =>
  Array.from({ length: n }, (_, i) => i * step + start);

const random = (n, min, max) =>
  [...Array(n)].map(() => Math.round(Math.random() * (max - min)) + min);

const primes = (n) => {
  const p = [2];
  for (let i = 3; p.length < n; i++) {
    if (range(Math.sqrt(i)).every((j) => i % j)) {
      p.push(i);
    }
  }
  return p;
};

console.log(squares(5));
console.log(range(6, 3, 2));
console.log(random(4, 5, 10));
console.log(primes(20));
