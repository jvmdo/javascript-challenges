//* My solution
function comp(arr1, arr2) {
  // Array.isArray()
  if (!arr1 || !arr2 || arr1.length != arr2.length) return false;
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  return arr1.every((el, i) => el ** 2 === arr2[i]);
}

//* Clever solution [not mine]
// function comp(array1, array2){
//   return !!array2 && !!array1 && array2.every( a=> array1.some( (b,i)=> a===b*b && delete array1[i] ) )
// }

const input = [
  [121, 144, 19, 161, 19, 144, 19, 11],
  [121, 14641, 20736, 361, 25921, 361, 20736, 361],
];
const output = comp(...input);
console.log(output);
