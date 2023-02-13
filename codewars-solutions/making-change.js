//* My solution
function makeChange(
  change,
  i = 0,
  coinsCounter = [0, 0, 0, 0, 0],
  coinValues = [50, 25, 10, 5, 1]
) {
  // Loosely equality because there is a case where the input is '0' (string)
  if (change == 0) {
    // If no coins were counted
    if (!coinsCounter.some(Boolean)) return {};

    const coinsSymbol = ["H", "Q", "D", "N", "P"];
    return coinsSymbol
      .map((symbol, index) => [symbol, coinsCounter[index]])
      .reduce(
        (map, entry) =>
          entry[1] ? Object.assign(map, { [entry[0]]: entry[1] }) : map,
        {}
      );
    // This version of Node does not recognize Object.fromEntries()
    // return Object.fromEntries(coinsSymbol.map((symbol, index) => [symbol, coinsCounter[index]]))
  }

  const partialAmount = change - coinValues[i];
  if (partialAmount < 0) {
    return makeChange(change, ++i, coinsCounter);
  } else {
    ++coinsCounter[i];
    return makeChange(partialAmount, i, coinsCounter);
  }
}

//* Best solution [not mine]
/* function makeChange(n){
	let den = [['H',50],['Q',25],['D',10],['N',5],['P',1]];
	return den.reduce((a,e) => n >= e[1] ? (a[e[0]] = Math.floor(n / e[1]),n = n%[e[1]],a) : a,{});
} */

const output = makeChange(99);
console.log(output);
