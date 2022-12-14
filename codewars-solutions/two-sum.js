function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
}

const output = twoSum(
  [
    -219, 160, -416, -589, 812, -484, 670, -999, 446, 651, 984, -578, 64, -717,
    431, 885, -392, -204, 10, 524, 755, -925, 888, -30, 895, 971, 164, 597,
    -479, -566, -131, -650, 231, 147, -379, 5, 101, 927, -884, 523, -49, -516,
    -577, 755, -540, 938, -528, 639, 275, -738, 790, -363, -583, 54, -226, 106,
    -985, -672, -428, 167, -848, -322, 145, 117, 747, -115, -616, -541, -898,
    629, -966, -721, -977, -375, 24, 924, -429, -772, 497, -307, 777, -154,
    -117, -115, -139, 884,
  ],
  (target = -680)
);

console.log(output);
