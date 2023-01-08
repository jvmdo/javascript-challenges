//* My solution
/* function goodVsEvil(good, evil) {
  const goodWorths = [1, 2, 3, 3, 4, 10];
  const evilWorths = [1, 2, 2, 2, 3, 5, 10];

  const goodSum = good
    .match(/\d+(?=\s?)/g)
    .reduce((sum, worth, i) => Number(worth) * goodWorths[i] + sum, 0);

  const evilSum = evil
    .match(/\d+(?=\s?)/g)
    .reduce((sum, worth, i) => Number(worth) * evilWorths[i] + sum, 0);

  if (goodSum > evilSum) {
    return "Battle Result: Good triumphs over Evil";
  } else if (goodSum < evilSum) {
    return "Battle Result: Evil eradicates all trace of Good";
  }
  return "Battle Result: No victor on this battle field";
} */

//* Improved solution
function goodVsEvil(good, evil) {
  function worthsSum(raid, worths) {
    return raid
      .match(/\d+(?=\s?)/g)
      .reduce((sum, worth, i) => Number(worth) * worths[i] + sum, 0);
  }

  const winner = Math.sign(
    worthsSum(good, [1, 2, 3, 3, 4, 10]) -
      worthsSum(evil, [1, 2, 2, 2, 3, 5, 10])
  );

  return {
    "-1": "Battle Result: Evil eradicates all trace of Good",
    0: "Battle Result: No victor on this battle field",
    1: "Battle Result: Good triumphs over Evil",
  }[winner];
}

const input = ["12 10 5 11 4 5", "3 11 2 15 1 7 5"];
const output = goodVsEvil(...input);
console.log(output);
