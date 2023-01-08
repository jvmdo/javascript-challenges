//* My simple solution
/* function getSum( a,b ) {
  const min = Math.min(a, b);
  const maj = Math.max(a, b);
  let sum = 0;
  
  for (let x = min; x <= maj; x++) {
    sum += x;
  }
   
  return sum;
} */

//* My "I know javascript" solution
function getSum(a, b) {
  return Array.from(
    { length: Math.abs(a - b) + 1 },
    (_, i) => Math.min(a, b) + i
  ).reduce((acc, cur) => acc + cur, 0);
}

//* Best solution [not mine]
//? It applies a simple math formula
/* function getSum(a, b) {
  return (Math.abs(a - b) + 1) * (a + b) / 2;
} */

const output = getSum(-1, 2);
console.log(output);
