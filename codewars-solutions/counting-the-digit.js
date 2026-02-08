function nbDig(n, d) {
  let c = 0;

  for (let k = 0; k <= n; k++) {
    const regex = new RegExp(d, "g");
    const aff = `${k ** 2}`.match(regex);
    c += aff?.length ?? 0;
  }

  return c;
}

// * My first approach
/* function nbDig(n, d) {
  let c = 0;
  for (let k = 0; k <= n; k++) {
    c += digitContains(k ** 2, d);
  }
  return d == 0 ? c + 1 : c;
}

const digitContains = (sq, d) => {
  let c = 0;

  while (sq > 0) {
    l = sq % 10;
    sq = Math.floor(sq / 10);

    if (d === l) {
      c++;
    }
  }

  return c;
}; */

const input = [5750, 0];
const output = nbDig(...input);
console.log(output);
