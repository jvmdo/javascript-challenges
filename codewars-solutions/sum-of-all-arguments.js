function sumOfAllArguments(...args) {
  return args.reduce((acc, cur) => acc + cur, 0);
}

console.log(sumOfAllArguments(1, 2, 3, 4, 5, 6, 7, 8, 9));
