function snail(array) {
  const n = array.length;

  if (n === 0 || array[0][0] === undefined) return [];

  if (n === 1) return [array[0][0]];

  // There are 2 * n directions changes
  // For n = 10
  // (10) 9 9 8 8 7 7 6 6 5 5 4 4 3 3 2 2 1 1 (0) (number of visited cells until order change)
  //    r d l u r d l u r d l u r d l u r d l u
  // For n = 9,
  // (9) 8 8 7 7 6 6 5 5 4 4 3 3 2 2 1 1 (0)
  //   r d l u r d l u r d l u r d l u r d
  // For n = 5,
  // (5) 4 4 3 3 2 2 1 1 (0)
  //   r d l u r d l u r d

  const res = [];

  const directions = [
    [1, 0], // down
    [0, -1], // left
    [-1, 0], // up
    [0, 1], // right
  ];

  // consume first row (move right)
  res.push(...array[0].slice(0, n));

  let currentRow = 0;
  let currentCol = n - 1; // last element of the first row
  let dirIndex = 0; // start with "down"
  let pathLength = n - 1;

  while (pathLength > 0) {
    // each `pathLength` value is used twice (down+left, up+right, ...)
    for (let repeat = 0; repeat < 2; repeat++) {
      const [dr, dc] = directions[dirIndex];
      for (let step = 0; step < pathLength; step++) {
        currentRow += dr;
        currentCol += dc;
        res.push(array[currentRow][currentCol]);
      }
      dirIndex = (dirIndex + 1) % 4;
    }
    pathLength--;
  }

  return res;
}

const array = [
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
];

const output = snail(array);
console.log(output);
