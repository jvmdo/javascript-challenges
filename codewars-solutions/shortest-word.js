function findShort(s) {
  // sort() converts every entry to string by default. Then, 11 -> '11' < 4 can happen
  // To avoid this, pass this (a,b) => a - b to sort as numbers in ascending order
  // return s.split(' ').sort((a, b) => a.length - b.length)[0].length;

  // Math.min() returns the minimum value withing a comma separated values list
  // https://stackoverflow.com/a/36108175
  // return Math.min(...s.split(' ').map(word => word.length))

  return s
    .split(" ")
    .map((word) => word.length)
    .reduce((short, cur) => (short < cur ? short : cur));
}

const output = findShort(
  "DarkCoin Lisk Dogecoin ProofOfWork Ripple ProofOfWork BTC Ripple Dogecoin Dogecoin LiteCoin"
);
output;
