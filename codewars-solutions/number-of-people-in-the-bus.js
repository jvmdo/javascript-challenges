var number = function (busStops) {
  return busStops.reduce((res, [gin, gout]) => res + gin - gout, 0);
};

const input = [
  [3, 0],
  [9, 1],
  [4, 8],
  [12, 2],
  [6, 1],
  [7, 8],
];
const output = number(input);
console.log(output);
