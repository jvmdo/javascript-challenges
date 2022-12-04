//* My poor's man solution
function factorization(n) {
  const factors = [];
  for (let d = 2; d * d <= n; d++) {
    while (n % d === 0) {
      factors.push(d);
      n /= d;
    }
  }
  return n > 1 && factors.push(n), factors;
}

function desimplify(s) {
  const [_, outer, sqrt, inner] = s.match(/(\d+\s)?(sqrt\s)?(\d+)/);

  if (!sqrt) {
    return inner * inner;
  } else if (sqrt && !outer) {
    return Number(inner);
  } else {
    return outer * outer * inner;
  }
}

function simplify(n) {
  const factors = factorization(n);
  const inner = [...factors];
  let outer = 1;

  const factorCounter = inner.reduce(
    (factorCounter, v) => (
      (factorCounter[v] = -~factorCounter[v]), factorCounter
    ),
    {}
  );

  for (let [factor, power] of Object.entries(factorCounter)) {
    if (power > 1) {
      power & 1 && power--;
      outer *= factor ** power;
      inner.splice(
        inner.findIndex((f) => f === +factor),
        power
      );
    }
  }

  if (inner.length && outer > 1) {
    return `${Math.sqrt(outer)} sqrt ${inner.reduce((a, b) => a * b)}`;
  } else if (inner.length) {
    return `sqrt ${inner.reduce((a, b) => a * b)}`;
  } else {
    return `${Math.sqrt(outer)}`;
  }
}

//* Best solution [not mine]
//? The logic is straightforward: find the greater [n] divisor that is also a perfect square
/* function simplify(n) {
  for (var i = n; i > 1; i--)
    if (n % i == 0 && Math.sqrt(i) % 1 == 0)
      return `${Math.sqrt(i)}${n == i ? "" : ` sqrt ${n / i}`}`;
  return n == 1 ? "1" : `sqrt ${n}`;
}

function desimplify(s) {
  var [a, b] = s.split("sqrt");
  return b ? (a ? a * a * b : +b) : a * a;
} */

const n = Math.floor(Math.random() * 1024) + 1;

const output = simplify(n);
console.log(output);

const output2 = desimplify(output);
console.log(output2);
