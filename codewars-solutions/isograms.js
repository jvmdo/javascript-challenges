//* My solution
/* function isIsogram(str, sentence = str.toLowerCase()){
  return [...sentence].every((char) => sentence.split(char).length === 2)
} */

//* My another solution
/* function isIsogram(str, sentence = str.toLowerCase()){
  return [...sentence].reduce((acc, char) =>  (!acc.includes(char) && acc.push(char), acc), []).length === sentence.length
} */

//* Using Set
/* function isIsogram(str) {
  return new Set([...str.toLowerCase()]).size === str.length;
} */

//* Using indexes
/* function isIsogram(str) {
  const sentence = str.toLowerCase();
  return (
    sentence
      .split("")
      .filter((char) => sentence.indexOf(char) !== sentence.lastIndexOf(char))
      .length === 0
  );
} */

//* Using Regex for counting
function isIsogram(str) {
  for (const char of str) {
    const regex = new RegExp(char, "gi");
    const matches = str.match(regex);

    if (matches.length > 1) {
      return false;
    }
  }

  return true;
}

//* Regex solution [not mine]
/* function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
} */

//* Another regex solution [not mine]
// function isIsogram(str){
//   return !str.match(/([a-z]).*\1/i);
// }

const input = "abcdefghij";
const output = isIsogram(input);
console.log(output);
