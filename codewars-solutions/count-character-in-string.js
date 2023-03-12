//* My solution
function strCount(str, letter) {
  const regex = new RegExp(`${letter}`, "gi");
  return str.match(regex)?.length ?? 0;
}

//* Best solution [not mine]
/* function strCount(str, letter) {  
  return str.length - str.replace(new RegExp(letter, "gi"), '').length;
} */

//* Clever solution [not mine]
/* const strCount = (str, letter) => str.split(letter).length - 1; */

const output = strCount("asdfasdfasdf", "s");
output;
