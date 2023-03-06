//* My solution
function areaOfRegularPolygon(input) {
  // Maybe named groups would be nice to readability
  const regex = new RegExp(
    "^(\\d+) sides of (\\d*\\.?\\d+) (cm|ft|un|au|nm) each$"
  );
  if (!regex.test(input) || input.match(regex)[1] < 3) return "Invalid input";
  return input.replace(
    regex,
    (_, n, s, u) =>
      `${((+s * +s * +n) / (4 * Math.tan(Math.PI / +n))).toFixed(2)} sq.${u}`
  );
}

//* Best practices [not mine]
/* const areaOfRegularPolygon = (s) => {
  console.log(s);
  const matches = s.match(
    /^([3-9]|\d{2,}) sides of (\d+(?:\.\d+)?) (..) each$/
  );

  if (matches) {
    const [, N, s, unit] = matches;
    const S = (N * s ** 2) / (4 * Math.tan(((180 / N) * Math.PI) / 180));
    return `${S.toFixed(2)} sq.${unit}`;
  }

  return "Invalid input";
}; */

const output = areaOfRegularPolygon("3 sides of 2.0943951023931953 cm each");
output;
