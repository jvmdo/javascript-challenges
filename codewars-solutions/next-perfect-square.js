//* Naive brute force
/* function findNextSquare(sq) {
  if (Math.sqrt(sq) % 1 !== 0) return -1;
  for (let x = sq + 1; ; x++) {
    if (Math.sqrt(x) % 1 === 0) return x
  }
} */

//* Using basic math
function findNextSquare(sq) {
  if (Math.sqrt(sq) % 1 !== 0) return -1;
  return (Math.sqrt(sq) + 1) ** 2;
}

const output = findNextSquare(16);
output;
