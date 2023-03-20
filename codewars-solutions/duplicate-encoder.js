//* My solution
function duplicateEncode(str, word = str.toLowerCase()) {
  function charCounter(str, char) {
    const escapedChar = char.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`${escapedChar}`, "ig");
    return str.match(regex)?.length ?? 0;
  }

  return [...word]
    .map((char) => (charCounter(str, char) > 1 ? ")" : "("))
    .join("");
}

//* Good solution [not mine]
/* function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
} */

//* Best solution [not mine]
/* function duplicateEncode(word) {
  word = word.toLowerCase();
  return word.replace(/./g, (m) =>
    word.indexOf(m) == word.lastIndexOf(m) ? "(" : ")"
  );
} */

const output = duplicateEncode(" ( ( )");
output;
