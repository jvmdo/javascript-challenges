function* fibonacciSequence() {
  let [cur, next] = [1n, 1n];
  while (true) {
    // semi-colon (;) is mandatory here
    yield cur;
    [cur, next] = [next, cur + next];
    // Without semi-colon
    // yield cur, [cur, next] = [next, cur + next]
  }
}

const iter = fibonacciSequence();
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().done);
console.log(iter.next().value);
