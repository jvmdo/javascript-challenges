//* My simple solution
/* function eqSumPowdig(hMax, exp) {
  const result = [];

  for (let target = 153; target <= hMax; target++) {
    const digits = Array.from(String(target), Number);
    let sum = 0;

    for (let d of digits) {
      sum += (d ** exp);
    }

    if (sum === target) {
      result.push(sum);
    }
  }

  return result;
} */

//* My JavaScripter solution (same logic as previous one)
function eqSumPowdig(hMax, exp) {
  return Array.from({ length: hMax + 1 - 153 }, (_, i) => i + 153).filter(
    (target) =>
      target ===
      Array.from(String(target), Number).reduce((sum, d) => sum + d ** exp, 0)
  );
}

const output = eqSumPowdig(370, 3);
console.log(output);

//* Another way to convert from string to array
console.log([..."123"]);

// console.log("Numbers Which Sum of Powers of Its Digits Is The Same Number".toLowerCase().replaceAll(" ", "-"))
