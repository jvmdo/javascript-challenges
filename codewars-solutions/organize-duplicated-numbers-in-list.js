//* My better solution
function group(arr) {
  const groups = [];
  arr.forEach((x, i) => {
    if (arr.indexOf(x) === i) groups.push([x]);
    else groups.find((group) => group[0] === x).push(x);
  });
  return groups;
}

//* My horrible solution
//? Nullish coalescing assignment not supported on node v8
//? return (sheet[x] ??= { index: i, duplicated: 1 }, sheet)
/* function group(arr) {
  const cheatsheet = arr.reduce((sheet, x, i) => {
    if (sheet[x])
      sheet[x] = { ...sheet[x], duplicated: sheet[x].duplicated + 1 };
    else sheet[x] = { index: i, duplicated: 1 };
    return sheet;
  }, {});

  return Object.entries(cheatsheet)
    .reduce(
      (groupedArr, sheet) => (
        (groupedArr[sheet[1].index] = (String(sheet[0]) + " ")
          .repeat(sheet[1].duplicated)
          .split(" ")
          .map(Number)
          .slice(0, -1)),
        groupedArr
      ),
      []
    )
    .filter((group) => group !== undefined || group !== null);
} */

//* Good solution [not mine]
/* function group(arr) {
  var h = {}
  for(var n of arr) h[n]=(h[n]||0)+1
  return Array.from(new Set(arr)).map(x=>Array(h[x]).fill(x))
} */

//* Clever solution [not mine]
/* function group(arr) {
  return [...new Set(arr)].map(n => arr.filter(x => x == n));
} */

const input = [
  9, -9, -3, 3, 5, -6, 0, -9, -3, -1, 10, 5, 4, -7, 8, -10, -5, 10, 10, -5, -5,
  1, 0, 7, 10, 2, 3, -1, -10, -9,
];
const output = group(input);
console.log(output);
