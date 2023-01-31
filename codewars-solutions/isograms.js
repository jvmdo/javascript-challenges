//* My solution
/* function isIsogram(str, sentence = str.toLowerCase()){
  return [...sentence].every((char) => sentence.split(char).length === 2)
} */

//* My another solution
/* function isIsogram(str, sentence = str.toLowerCase()){
  return [...sentence].reduce((acc, char) =>  (!acc.includes(char) && acc.push(char), acc), []).length === sentence.length
} */

//* My third solution
function isIsogram(str) {
  return new Set([...str.toLowerCase()]).size === str.length;
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
