//* My solution
function createPhoneNumber(numbers) {
  return `(${numbers.slice(0, 3).join("")}) ${numbers
    .slice(3, 6)
    .join("")}-${numbers.slice(6).join("")}`;
}

//* Clever solution [not mine]
/* function createPhoneNumber(numbers){
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
} */

//* Smarter solution [not mine]
/* function createPhoneNumber(numbers){
  return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
} */

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const output = createPhoneNumber(input);
console.log(output); // (123) 456-7890
