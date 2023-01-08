//* My solution
function toWeirdCase(string) {
  return string
    .match(/\w+/g)
    .map((word) =>
      word.replaceAll(/\w/g, (char, index) =>
        index % 2 ? char.toLowerCase() : char.toUpperCase()
      )
    )
    .join(" ");
}

//* Best solution [not mine]
//? This regex takes letters in couples then modifies them: qu-ic-k => Qu-Ic-K
//? By definition, it will never match a space
function toWeirdCase(string) {
  return string.replace(/(\w{1,2})/g, (m) => m[0].toUpperCase() + m.slice(1));
}

const input = "The quick brown fox jumps over the lazy dog.";
const output = toWeirdCase(input);
console.log(output);
