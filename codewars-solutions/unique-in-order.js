//* My solution
function uniqueInOrder(seq) {
  let output = "";
  const length = seq.length;

  for (let i = 0; i < length; i++) {
    if (seq[i] !== seq[i + 1]) {
      output += seq[i];
    }
  }
  return output.split("").map((l) => (isNaN(Number(l)) ? l : Number(l)));
}

//* Best solution [not mine]
/* function uniqueInOrder(sequence) {
  return [...sequence].filter((c, i) => c !== sequence[i+1]);
  //? Avoid converting [sequence] to Array
  // return Array.prototype.filter.call(sequence, (c, i) => c !== sequence[i+1]);
} */

const input = "AAAABBBCCDAABBB";
const output = uniqueInOrder(input);
console.log(output);
