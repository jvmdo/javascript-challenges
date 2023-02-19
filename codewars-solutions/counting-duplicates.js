//* My solution
function duplicateCount(text, chars = [...text.toLowerCase()]) {
  return [...new Set(chars)].reduce((counter, char) => {
    if (chars.filter((c) => c === char).length > 1) counter++;
    return counter;
  }, 0);
}

//* Clever solution [not mine]
//? [^] matches any character including new line
//? While . matches any character but line terminators
/* function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
} */

//* Best solution [not mine]
/* function duplicateCount(text){
  return new Set(text.toLowerCase().match(/(.)(?=.*\1)/gi)).size
} */

const output = duplicateCount("Indivisibilities");
console.log(output);
