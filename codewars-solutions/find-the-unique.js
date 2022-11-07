//? NaN === NaN is false whereas Object.is(NaN, NaN) is true
function findUniq(arr) {
  if (arr.filter((e) => Object.is(e, NaN)).length === 1) return NaN;
  return arr
    .filter((e) => !Object.is(e, NaN))
    .find((e) => Object.is(arr.indexOf(e), arr.lastIndexOf(e)));
}

const output = findUniq([0, 0, 0, NaN, 0, 0, 0]);
console.log(output);
