function persistence(n, mp = 0) {
  // Calculates the multiplicative persistence of a number
  // https://mathworld.wolfram.com/MultiplicativePersistence.html#:~:text=The%20number%20of%20steps%20required%20is%20known%20as,two%20and%20a%20multiplicative%20digital%20root%20of%200.
  if (n / 10 < 1) return mp;
  return persistence(
    [...`${n}`].map(Number).reduce((acc, cur) => acc * cur),
    ++mp
  );
}

const input = 999;
const output = persistence(input);
console.log(output);
