// Kata URL
// https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
  const isAlpha = (letter) =>
    letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122;
  return text
    .toLowerCase()
    .split("")
    .filter((l) => isAlpha(l))
    .map((a) => a.charCodeAt() - 96)
    .join(" ");
}

// Output example
const output = alphabetPosition("The sunset sets at twelve o' clock.");
console.log(output);
