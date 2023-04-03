//* My solution
function convert(number) {
  return number
    .match(/(\d{2})/g)
    .map((ascii) => String.fromCharCode(ascii))
    .join("");
}

//* Best solution [adapted]
/* function convert(number) {
  return String.fromCharCode(...number.match(/\d{2}/g))
} */

const output = convert("696969");
console.log(output);
