//* My solution
function dontGiveMeFive(start, end, length = end - start + 1) {
  function hasNoDigit5(n) {
    n = Math.abs(n);
    for (; n > 0; n = Math.floor(n / 10)) {
      if (n % 10 === 5) return false;
    }
    return true;
  }
  return Array.from({ length }, (_, i) => i + start).filter(hasNoDigit5).length;
}

//* Another solution [adapted]
/* function dontGiveMeFive(start, end, length = end - start + 1) {
  const hasNoDigit5 = (n) => !/5/.test(n);
  return Array.from({ length }, (_, i) => i + start).filter(hasNoDigit5).length;
} */

const output = dontGiveMeFive(-14, -1);
console.log(output);
