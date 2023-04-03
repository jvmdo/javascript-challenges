//* My solution
function switcher(x) {
  // prettier-ignore
  const chars = ["z", "y", "x", "w", "v", "u", "t", "s", "r", "q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a", "!", "?", " "];
  return x.map((n) => chars[n - 1]).join("");
}

//? It works in absence of non-letters characters (!, ?, " ")
/* function switcher(codes) {
  return String.fromCharCode(...codes.map((n) => 97 + 26 - n))
} */

const output = switcher(["24", "12", "23", "22", "4", "26", "9", "8"]);
console.log(output);
