//* My solution
function squareDigits(num) {
  return Number.parseInt([...String(num)].map((x) => Number(x) ** 2).join(""));
  // return +[...String(num)].map(x => Number(x) ** 2).join("");
  //? Avoid converting String to Array
  // return +Array.prototype.map.call(String(num), x => (+x) ** 2).join("");
}

//* Best solution [not mine]
/* function squareDigits(num){
  return +String(num).replace(/\d/g, matched => matched * matched);
} */

const input = 9119;
const output = squareDigits(input);
console.log(output);
