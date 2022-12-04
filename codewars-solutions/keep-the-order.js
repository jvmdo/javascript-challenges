//* My simple solution
/* function keepOrder(ary, val) {
  for (let i = 0; i < ary.length; i++) {
    if (ary[i] >= val) {
      return i;
    }
  }
  return ary.length;
} */

//* My better solution
function keepOrder(ary, val) {
  const index = ary.findIndex((el) => val <= el);
  return index != -1 ? index : ary.length;
}

//* Best solution [not mine]
/* function keepOrder(ary, val) {
  return ary.filter(a => a < val).length;
} */

const output = keepOrder([1, 2, 3, 4, 7], 9);
console.log(output);
