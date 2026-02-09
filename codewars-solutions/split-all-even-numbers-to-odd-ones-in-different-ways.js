function splitAllEvenNumbers(numbers, way) {
  const arr = [...numbers];

  numbers.forEach((el, i) => {
    if (el % 2 === 1) return;

    switch (way) {
      case 0: {
        const half = el / 2;
        const split = half % 2 === 1 ? [half, half] : [half - 1, half + 1];
        return arr.splice(i, 1, split);
      }
      case 1: {
        return arr.splice(i, 1, [1, el - 1]);
      }
      case 2: {
        for (let x = 2; x <= el / 2; x++) {
          const maxOdd = el / x;
          maxOdd;
          if (maxOdd % 2 === 1) {
            return arr.splice(i, 1, Array(x).fill(maxOdd));
          }
        }
      }
      case 3: {
        return arr.splice(i, 1, Array(el).fill(1));
      }
    }
  });

  return arr.flat();
}

const input = [1, 10, 1, 3, 14];
const output = splitAllEvenNumbers(input, 2);
console.log(output);
