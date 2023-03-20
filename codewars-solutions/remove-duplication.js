function removeDuplication(arr) {
  return arr.filter((el) => arr.indexOf(el) === arr.lastIndexOf(el));
}

const output = removeDuplication([1, 2, 3, 2, 4, 6, 2, 6, 7]);
output;
