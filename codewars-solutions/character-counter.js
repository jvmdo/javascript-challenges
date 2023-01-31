//* My solution
function validateWord(s) {
  return s
    .toLowerCase()
    .split("")
    .every(
      (char, _, arr) =>
        arr.filter((el) => el === char).length ===
        arr.filter((el) => el === arr[0]).length
    );
}

//* Best solution [not mine]
/* function validateWord(s, c = s.toLowerCase()) {
	return c.length % new Set(c).size == 0
} */

//* WTF solution
//? s.split(x).length returns the number of x + 1
//? The outer regex tests whether all the numbers are equal or not
/* function validateWord(s) {
  return /^(.)\1*$/.test(
    (s = s.toLowerCase()).replace(/./g, (x) => s.split(x).length)
  );
} */

//* Good solution [not mine]
/* function validateWord(s) {
  return (
    new Set(
      Object.values(
        [...s.toLowerCase()].reduce(
          (pre, val) => ((pre[val] = -~pre[val]), pre),
          {}
        )
      )
    ).size === 1
  );
} */

const output = validateWord("aaabbbcccABCabccba");
console.log(output);
