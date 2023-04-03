function filter_list(l) {
  return l.filter((el) => Number.isFinite(el));
  // return l.filter((el) => typeof el === 'number'); // also works
  // return l.filter(Number.isInteger); // works because all the numbers are integers
}
