//* My simple solution
function lowestProduct(input, slice = 4) {
  if (input.length < slice) return "Number is too small";

  const prods = [];
  for (let i = 0; i <= input.length - slice; i++) {
    const sequence = input.slice(i, i + slice);
    prods.push([...sequence].reduce((acc, x) => +x * acc, 1));
  }

  return Math.min(...prods);
}

//* My "one liner" solution
/* function lowestProduct(input, slice = 4) {
  if (input.length < slice) return "Number is too small"

  return Math.min(
    ...[...input]
      .slice(0, input.length - slice + 1)
      .reduce(
        (slices, _, index) => slices.concat(input.slice(index, index + slice)),
        []
      )
      .map((sequence) => [...sequence].reduce((acc, digit) => +digit * acc, 1))
  );
} */

//* Good solution [not mine]
/* function lowestProduct(input) {
  let arr = input.split``.map((x,i,a) => a.length - i < 4 ? Infinity : x * a[i+1] * a[i+2] * a[i+3]);
  return input < 1000 ? "Number is too small" : Math.min(...arr);
} */

//* Best solution [not mine]
/* const lowestProduct = (a, b = a.length) =>
  b < 4
    ? "Number is too small"
    : Math.min(
        ...[...Array(b - 3)].map((_, i) =>
          a.slice(i, i + 4).split``.reduce((a, b) => a * b)
        )
      ); */

const output = lowestProduct("275425728329125138");
console.log(output);
