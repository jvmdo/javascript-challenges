function maxProduct(a) {
  var biggest = Math.max.apply(Math, a);
  a.splice(a.indexOf(biggest), 1);
  return biggest * Math.max.apply(Math, a);
}

//* Another solution
/* function maxProduct(numbers) {
  const a = Math.max(...numbers)
  let b = -Infinity
  numbers.forEach((el) => {
    if (el > b && el < a) {
      b = el
    }
  })
  return a * b
} */

const input = [56, 335, 195, 443, 6, 494, 252];
const output = maxProduct(input);
console.log(output);
