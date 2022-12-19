//* My solution
function findEvenIndex(array) {
  for (let i = 0; i < array.length; i++) {
    const left = array.slice(0, i).reduce((sum, el) => sum + el, 0);
    const right = array.slice(i + 1).reduce((sum, el) => sum + el, 0);
    if (left === right) {
      return i;
    }
  }
  return -1;
}

//* Best solution [not mine]
//? when [to] == [undefined], slice goes until the end of the array
/* const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0)
const findEvenIndex = a => a.findIndex((el, i) => sum(a, 0, i) === sum(a, i + 1)); */

// const input = [1,2,3,4,3,2,1];
const input = [20, 10, -80, 10, 10, 15, 35];
// const input = [10,-80,10,10,15,35,20];
const output = findEvenIndex(input);
console.log(output);
