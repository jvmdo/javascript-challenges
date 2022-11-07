// My JavaScripter solution
function findUniq(arr) {
  // Convert one-element array to number using + operator
  // return +arr.filter((n, _, self) => self.indexOf(n) === self.lastIndexOf(n));

  // Or explicitly with Number()
  // return Number(arr.filter((n, _, self) => self.indexOf(n) === self.lastIndexOf(n)));

  return arr.filter((n, _, self) => self.indexOf(n) === self.lastIndexOf(n))[0];
}

// My simple solution (about 2x faster)
/* function findUniq(arr) {
  const arrLen = arr.length;

  for (let i = 0; i < arrLen; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      return arr[i];
    }
  } 
} */

// Best solution [not mine] (HOW DID I FORGET .find()?!!!!)
/* function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
} */

const output = findUniq([0, 0, 1]);
console.log(output);
