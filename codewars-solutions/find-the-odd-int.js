// My solution
function findOdd(arr) {
  const tracker = arr.reduce((vMap, v) => {
    if (!vMap[v]) {
      vMap[v] = 1;
    } else {
      vMap[v]++;
    }
    return vMap;
  }, {});

  const target = Object.entries(tracker).find(([_, v]) => v % 2)[0];

  return Number(target);
}

// Best solution [not mine]
/* const findOdd = (xs) => xs.reduce((a, b) => a ^ b); */

// Nice solution [not mine]
/* function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
} */

const output = findOdd([
  20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5,
]);
console.log(output);
