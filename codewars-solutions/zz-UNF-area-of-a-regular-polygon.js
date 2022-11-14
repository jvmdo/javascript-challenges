function areaOfRegularPolygon(input) {
  const calcArea = (n, s) => (s ** 2 * n) / (4 * Math.tan(Math.PI / n));
  const isInputValid = input.match(/^(\d+) sides of (\d+(?:\.\d+)?) cm each/);

  if (isInputValid) {
    const n = Number.parseFloat(isInputValid[1]);
    const s = Number.parseFloat(isInputValid[2]);
    const area = calcArea(n, s);
    if (n <= 0 || s <= 0 || area <= 0) {
      return "Invalid input";
    }
    return `${area.toFixed(2)} sq.cm`;
  } else {
    return "Invalid input";
  }
}

const output = areaOfRegularPolygon("4 sides of 5 cm each");
console.log(output);
