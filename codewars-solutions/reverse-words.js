//* Good solution
/* function reverseWords(str) {
  function reverse(str) {
    return str && str.at(-1) + reverse(str.slice(0, -1));
  }

  return str
    .split(" ")
    .map((word) => reverse(word))
    .join(" ");
} */

//* Clever solution
//? [^\w\s]? matches none or one punctuation after words
//? Could not use \W because it matches spaces as well
function reverseWords(str) {
  const reverse = (str) => str && str.at(-1) + reverse(str.slice(0, -1));
  return str.replaceAll(/\w+[^\w\s]?/g, reverse);
}

const input = "The quick brown fox jumps over the lazy dog.";
const output = reverseWords(input);
console.log(output);
