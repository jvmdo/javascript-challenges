var maxSequence = function (arr) {
  if (arr.filter((v) => v > 0).length === 0) return 0;

  const arrLength = arr.length;
  const sums = Array.from(arr);

  for (let i = 0; i < arrLength - 1; i++) {
    for (let j = i; j < arrLength - 1; j++) {
      let sum = 0;
      for (let k = i; k <= j + 1; k++) {
        sum += arr[k];
      }
      sums.push(sum);
    }
  }

  return Math.max(...sums);
};

// const output = maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
const output = maxSequence([40, 32, -44, -3, -47, 20, -2, 39, 12]);
// const output = maxSequence([-50,26,-14]);
// const output = maxSequence([-6,22]);
console.log(output);

// Best solution (not mine)
/* 
  var maxSequence = function(arr){
  var currentSum = 0;
  return arr.reduce(function(maxSum, number){
      currentSum = Math.max(currentSum+number, 0);
      return Math.max(currentSum, maxSum);
  }, 0);
} 
*/
