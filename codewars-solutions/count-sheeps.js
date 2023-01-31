function countSheep(length) {
  return Array.from({ length }, (_, i) => `${++i} sheep...`).join("");
}

const output = countSheep(5);
console.log(output);
