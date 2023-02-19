function toRange(arr) {
  function findIndexOfNonConsecutiveNumbers(arr) {
    return arr.reduce(
      (indexes, n, i) => (n - arr[i - 1] > 1 ? indexes.concat([i]) : indexes),
      []
    );
  }

  if (arr.length === 0) return ``;
  if (arr.length === 1) return `${arr[0]}`;

  const indexes = findIndexOfNonConsecutiveNumbers(arr.sort((a, b) => a - b));
  if (indexes.length === 0) return `${arr[0]}_${arr[arr.length - 1]}`;

  let result = `${arr[0]}_${arr[indexes[0] - 1]}`;
  indexes.forEach(
    (i, index) =>
      (result = `${result},${arr[i]}_${arr[indexes[index + 1] - 1]}`)
  );

  return result
    .replace("undefined", arr[arr.length - 1])
    .replace(/(\d+)_(\1,|\1$)/g, "$2");
}

function toArray(str) {
  function makeRangeBounder(ranges, bound) {
    const values = ranges.split("_").map((v) => Number.parseInt(v));
    return bound === "start" ? values[0] : ++values[1];
  }

  if (str.length === 0) return [];
  if (str.length === 1) return [Number(str)];

  const ranges = str.split(",");
  const result = [];

  for (let i = 0; i < ranges.length; i++) {
    if (!ranges[i].includes("_")) {
      result.push(Number(ranges[i]));
    } else {
      result.push(
        ...Array.from(
          {
            length:
              makeRangeBounder(ranges[i], "end") -
              makeRangeBounder(ranges[i], "start"),
          },
          (_, v) => makeRangeBounder(ranges[i], "start") + v
        )
      );
    }
  }

  return result.map((v) => Number.parseInt(v)).sort((a, b) => a - b);
}

const input = [
  0, 1, 2, 4, 5, 6, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24,
  25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
  45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 58, 59, 60, 61, 63, 65, 66,
  67, 68, 69, 70, 71, 72, 73, 74, 75, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86,
  87, 88, 89, 90, 91, 93, 94, 95, 96, 97, 98, 99,
];
// const output = toRange(input);
const output = toArray(toRange(input));
console.log(output);
