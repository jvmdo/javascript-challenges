//* My solution with closed math formula
function* fibonacci() {
  let n = 0;
  while (true) {
    yield Math.round(((1 + 5 ** 0.5) / 2) ** n++ / 5 ** 0.5);
  }
}

//* My solution with iteration
/* function* fibonacci() {
  let [cur, next] = [0, 1]
  while (true) {
    // semi-colon (;) is mandatory here
    yield cur;
    [cur, next] = [next, cur + next]
  }
} */

const ite = fibonacci();
console.log(ite.next().value);
console.log(ite.next().value);
console.log(ite.next().value);
console.log(ite.next().value);
console.log(ite.next().value);
