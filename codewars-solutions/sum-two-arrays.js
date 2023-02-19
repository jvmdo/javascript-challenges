//* My awful solution
function addArrays(array1, array2) {
  function NoN(x) {
    const n = Number.parseInt(x);
    return Number.isNaN(n) ? (Array.isArray(x) ? 0 : "-") : n;
  }

  const arrayToNumber1 = NoN(array1.join(""));
  const arrayToNumber2 = NoN(array2.join(""));
  const sum = (arrayToNumber1 + arrayToNumber2)
    .toString()
    .split("")
    .map((x) => NoN(x));
  if (sum[0] === "-") {
    sum.shift();
    sum[0] *= -1;
  }
  return sum.filter((x) => x !== "-" && !Number.isNaN(x));
}

//* Best solution [not mine]
const addArrays = (arr1, arr2) =>
  arr1.length || arr2.length
    ? `${+arr1.join`` + +arr2.join``}`.match(/-?\d/g).map(Number)
    : [];

const input = [
  [3, 2, 6, 6],
  [-7, 2, 2, 8],
];
const output = addArrays(...input);
console.log(output);

// console.log((Number.parseInt([-7, 2, 2, 8].join("")) + Number.parseInt([3, 2, 6, 6].join(""))).toString().split(""))
