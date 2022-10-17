// Simple solution
/* 
function towerBuilder(nFloors) {
  const spces = (n) => " ".repeat(n);
  const stars = (n) => "*".repeat(2*n - 1);
  const floor = (n, m) => spces(m) + stars(n) + spces(m);
  const tower = [];
  
  for (let i = 1; i <= nFloors; i++) {
    tower.push(floor(i, nFloors-i));
  }
  
  return tower;
} 
*/

// JavaScripter solution
/* 
function towerBuilder(nFloors) {
  return Array.from(
    { length: nFloors },
    (_, i) =>
      " ".repeat(nFloors - i - 1) +
      "*".repeat(2 * i + 1) +
      " ".repeat(nFloors - i - 1)
  );
} 
*/

// JavaScriptest solution
function towerBuilder(nFloors) {
  function deleteStar(floor, start, end) {
    const space = (_, i) => (i < start || i > end ? " " : "*");
    return floor.replace(/\*/g, space);
  }

  return Array.from({ length: nFloors }, () => "*".repeat(2 * nFloors - 1)).map(
    (floor, level) =>
      deleteStar(floor, nFloors - 1 - level, nFloors - 1 + level)
  );
}

const output = towerBuilder(10);
console.log(output);
