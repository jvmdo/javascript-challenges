// Combination algorithm from
// https://www.geeksforgeeks.org/print-all-possible-combinations-of-r-elements-in-a-given-array-of-size-n/

//! It fails on "should work for higher number" test
// Maybe combination is not the right approach this problem

function removeNb(n) {
  function generateCombinations(arr, n, r, index, data, i) {
    if (index === r) {
      /* const comb = []
      for (let j = 0; j < r; j++) {
        comb.push(data[j])
      }
      combs.push(comb) */
      const m = data[0] * data[1];
      const p = sum - data[0] - data[1];
      if (m === p) {
        result.push([data[0], data[1]]);
        result.push([data[1], data[0]]);
      }
      return;
    }

    if (i >= n) {
      return;
    }

    data[index] = arr[i];
    generateCombinations(arr, n, r, index + 1, data, i + 1);

    // Prevent repetition
    // It works because the elements are sorted
    while (arr[i] === arr[i + 1]) i++;

    generateCombinations(arr, n, r, index, data, i + 1);
  }

  function printCombination(arr, n, r) {
    const data = new Array(r);
    generateCombinations(arr, n, r, 0, data, 0);
  }

  const combs = [];
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  const sum = (n / 2) * (n + 1);
  const result = [];

  printCombination(arr, arr.length, 2);

  /* return combs.reduce((result, [a, b]) => {
    const m = a * b
    const p = sum - a - b
    if (m === p) {
      result.push([a, b])
      result.push([b, a])
    }
    return result
  }, []) */
  return result;
}

const output = removeNb(26);
console.log(output);
