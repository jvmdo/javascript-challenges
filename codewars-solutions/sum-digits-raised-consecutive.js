// Simple solution
/*
function sumDigPow(a, b) {
  const digPows = [];
  for (let x = a; x < b; x++) {
    const digits = String(x).split('');
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
      sum += (Number(digits[i])**(i+1));
    }
    if (sum === x) {
      digPows.push(x);
    }
  }
  return digPows;
}
*/

// It seems .map(Number) is not needed as the JavaScript does
function sumDigPow(a, b) {
  const sum = (x) =>
    String(x)
      .split("")
      .map(Number) // coercion right here 👇
      .reduce((acc, cur, i) => acc + cur ** (i + 1), 0);

  return Array.from({ length: b - a }, (_, i) => i + a).filter(
    (x) => x === sum(x)
  );
}

const output = sumDigPow(1, 100);
console.log(output);

//* Resources!
//* Three different ways to create an array from two bounders (start, end)

// "Array.from() lets you create Arrays from
// array-like objects (objects with a length property and indexed elements)."
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#using_arrow_functions_and_array.from

// Use fill() to populate an empty array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill#using_fill_to_populate_an_empty_array

// const start = 5, end = 13;
// const arr = [...Array(end - start)].map((_, i) => i + start)
// console.log(arr);

// console.log(Array(5).join("*"))
