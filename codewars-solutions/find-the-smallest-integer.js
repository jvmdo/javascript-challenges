class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

const output = new SmallestIntegerFinder().findSmallestInt([34, -345, -1, 100]);
console.log(output);
