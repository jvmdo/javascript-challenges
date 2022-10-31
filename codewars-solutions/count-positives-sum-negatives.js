function countPositivesSumNegatives(input) {
  if (!input?.length) return [];

  return input.reduce(
    (acc, cur) => {
      cur > 0 ? acc[0]++ : (acc[1] += cur);
      return acc;
    },
    [0, 0]
  );
}

const output = countPositivesSumNegatives([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);
console.log(output);
