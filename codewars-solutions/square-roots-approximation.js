function approxRoot(n) {
  const base = Math.floor(Math.sqrt(n));
  const roof = Math.ceil(Math.sqrt(n));

  if (base === roof) {
    return base;
  }

  const diff_bs = n - base ** 2;
  const diff_rf = roof ** 2 - base ** 2;
  const decimal = Math.round((diff_bs / diff_rf) * 100) / 100;

  return base + decimal;
}

const output = approxRoot(213);
console.log(output);
