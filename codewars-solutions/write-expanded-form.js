//* My simple solution
/* function expandedForm(num) {
  const expands = []

  for (let i = 1; i <= String(num).length; i++) {
    const previousSum = expands.reduce((acc, cur) => acc + cur, 0)
    expands.unshift(num % 10 ** i - previousSum)
  }

  return expands.filter(Boolean).join(' + ')
} */

//* My best solution
function expandedForm(num) {
  return [...String(num)]
    .reverse()
    .map((d, i) => d * 10 ** i)
    .filter(Boolean)
    .reverse()
    .join(" + ");
}

const output = expandedForm(70304);
console.log(output);
