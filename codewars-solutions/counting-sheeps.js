/* function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(sheep => sheep).length;
}
 */

//* Better solution
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

const input = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
const output = countSheeps(input);
console.log(output);
