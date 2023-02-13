function allNonConsecutive(arr) {
  return arr.reduce(
    (result, n, i) => (n - arr[i - 1] > 1 ? result.concat([{ i, n }]) : result),
    []
  );
}

const input = [1, 2, 3, 4, 6, 7, 8, 9, 15];
const output = allNonConsecutive(input);
console.log(output);
