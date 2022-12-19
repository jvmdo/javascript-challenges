//* My solution
function order(words) {
  return words
    .split(" ")
    .sort((a, b) => +a.match(/[1-9]/) - +b.match(/[1-9]/))
    .join(" ");
}

//* Another solution [not mine]
//? It has no need to parse Number in order to compare the numbers
function order(words) {
  return words
    .split(" ")
    .sort((wordA, wordB) => wordA.match(/\d+/) > wordB.match(/\d+/))
    .join(" ");
}

const input = "4of Fo1r pe6ople g3ood th5e the2";
const output = order(input);
console.log(output);
