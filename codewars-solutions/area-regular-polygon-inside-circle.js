// Formula from
// https://www.mathopenref.com/polygonregulararea.html

function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
  const area = (r, n) => (r ** 2 * n * Math.sin((2 * Math.PI) / n)) / 2;
  return Math.round(area(circleRadius, numberOfSides) * 1000) / 1000;
}

const output = areaOfPolygonInsideCircle(2.5, 5);
console.log(output);
