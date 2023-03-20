//* My solution
function flatten(...args) {
  return Array.from(
    JSON.parse(
      JSON.stringify(args)
        .replace(/(?!^)(\[|\])(?!$)/g, "")
        .replace(/,(?=,)/g, "")
    )
  );
}

//* Best solution [not mine]
/* function flatten(...arr) {
  return arr.toString().split(",");
} */

//* Clever solution
/* function flatten(...args) {
  return [...args].reduce(
    (acc, cur) => acc.concat(Array.isArray(cur) ? flatten(...cur) : cur),
    []
  );
} */

// const output = flatten(1, [2, 3], 4, 5, [6, [7]])
const output = flatten("a", ["b", 2], 3, null, [[4], ["c"]]);
console.log(output);
