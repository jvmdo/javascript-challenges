//* My solution
// It works for array that leads to more than 1 possible solution
function selectSubarray(arr) {
  const results = [];

  for (let i = 0; i < arr.length; i++) {
    const [subarray, pair] = makeSubarray(arr, i);
    const q = calculateQuotient(subarray);
    q && results.push([q, pair]);
  }

  const minQ = Math.min(...results.map(([q]) => q));
  const solution = results.filter(([q]) => q === minQ).map(([, pair]) => pair);

  return solution.length > 1 ? solution : solution[0];
}

function makeSubarray(arr, pos) {
  if (!arr[pos]) return;

  const arrCopy = Array.from(arr);
  const removed = arrCopy.splice(pos, 1);

  return [arrCopy, [pos, ...removed]];
}

function calculateQuotient(arr) {
  const subSum = arr.reduce((acc, cur) => acc + cur);
  const subProduct = arr.reduce((acc, cur) => acc * cur);

  if (subSum === 0) return;

  return Math.abs(subProduct / subSum);
}

//* Clever solution [not mine]
/* function selectSubarray(arr) {
  var sum = arr.reduce((s,n)=>s+n,0), prod = arr.reduce((p,n)=>p*n,1);
  var min = [-1,Infinity];
  for(let i=0; i<arr.length; i++) {
    let q = Math.abs((prod/arr[i])/(sum-arr[i]));
    if(!isNaN(q)&&q<min[1]) min=[i,q];
  }
  return [min[0],arr[min[0]]];
} */

//* Same logic as before but applying .reduce() [not mine]
/* const selectSubarray = a => {
  const [prod, sum] = a.reduce((a, e, i) => [a[0] * e, a[1] + e], [1, 0]);
  return a.reduce((x, e, i) => {
    const q = Math.abs(prod / e / (sum - e));
    return q < x[2] ? [i, e, q] : x;
  }, [0, 0, Infinity]).slice(0, 2);
} */

//* Good solution [not mine]
/* function selectSubarray(arr) {
  let product = arr.reduce((a,c) => a * c);
  let sum = arr.reduce((a,c) => a + c);
  let result = arr.map((e) => Math.abs((product/e/(sum-e))) || Infinity)
  console.log(result)
  let i = result.indexOf(Math.min(...result));
  return [i,arr[i]];
} */

// const input = [1, 23, 2, -8, 5];
// const input = [1, 3, 23, 4, 2, -8, 5, 18];
const input = [10, 20, -30, 100, 200];
const output = selectSubarray(input);
console.log(output);
