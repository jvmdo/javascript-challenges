function nbYear(p0, percent, aug, p) {
  let n = 0;
  while (p0 < p) {
    p0 += Math.floor((p0 * percent) / 100) + aug;
    n++;
  }
  return n;
}

//* Recursive version
/* function nbYear(p0, percent, aug, p, n = 0) {
  if (p0 >= p) {
    return n;
  }
  p0 += Math.floor((p0 * percent) / 100) + aug;
  return nbYear(p0, percent, aug, p, ++n);
} */

const output = nbYear(1500000, 2.5, 10000, 2000000);
console.log(output);
