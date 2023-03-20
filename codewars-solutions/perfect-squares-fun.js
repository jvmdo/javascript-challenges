//* My solution
function squareIt(int, str = String(int)) {
  if (Math.sqrt(str.length) % 1 !== 0) return "Not a perfect square!";
  return [...str]
    .reduce((ssb, char, i) => {
      ssb += char;
      if (i === 0 || i === str.length - 1) return ssb;
      if ((i + 1) % Math.sqrt(str.length) === 0) return ssb + " ";
      return ssb;
    }, "")
    .split(" ")
    .join("\n");
}

//* Best solution [not mine]
/* function squareIt(int) {
  const str = int.toString();
  const r = Math.sqrt(str.length);
  return Number.isInteger(r)
    ? str.replace(RegExp(`(.{${r}})(?!$)`, "g"), "$1\n")
    : "Not a perfect square!";
} */

const output = squareIt(3701241252850495);
output;
