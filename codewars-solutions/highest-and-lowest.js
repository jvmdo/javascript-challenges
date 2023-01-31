function highAndLow(ssn, numbers = ssn.split(" ").map(Number)) {
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

const input = "8 3 -5 42 -1 0 0 -9 4 7 4 -4";
const output = highAndLow(input);
console.log(output);
