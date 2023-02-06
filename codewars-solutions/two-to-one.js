function longest(s1, s2) {
  return [...new Set(s1 + s2)].sort().join("");
}

const input = ["xyaabbbccccdefww", "xxxxyyyyabklmopq"];
const output = longest(...input);
console.log(output);
