//* My simple solution
const isSquare = function (n) {
  return Math.sqrt(n) === Math.round(Math.sqrt(n));
};

//* JavaScripter solution [not mine]
/* const isSquare = function(n){
  return Number.isInteger(Math.sqrt(n));
} */

//* JavaScriptest solution [adapted]
/* const isSquare = function(n){
  //? Bitwise Not operand (~)
  //? ~~N is equivalent to -(-(N + 1) + 1)
  return (n = Math.sqrt(n), ~~n === n);
} */

//* Best solution [not mine]
/* const isSquare = function(n){
  //? x.yz % 1 returns yz
  return Math.sqrt(n) % 1 === 0;
} */

const output = isSquare(1024);
console.log(output);
