//* My solution
function getMiddle(s) {
  return s.length % 2
    ? s[Math.floor(s.length / 2)]
    : s[s.length / 2 - 1] + s[s.length / 2];
}

//* Best solution [not mine]
/* function getMiddle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
} */

const output = getMiddle("test");
console.log(output);
