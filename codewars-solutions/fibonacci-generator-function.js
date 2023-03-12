function genFib() {
  let n = 0;
  return function fib() {
    return Math.round(((1 + 5 ** 0.5) / 2) ** n++ / 5 ** 0.5);
  };
}

const fib = genFib();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
