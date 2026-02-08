//* Using Map
function orderedCount(text) {
  const countMap = new Map();

  for (const char of text) {
    countMap.set(char, countMap.get(char) + 1 || 1);
  }

  return [...countMap.entries()];
}

//* Using Set
/* function orderedCount(text) {
  const unique = new Set(text);
  const res = [];

  for (const char of unique) {
    const count = text.match(new RegExp(char, "g")).length;
    res.push([char, count]);
  }

  return res;
} */

const input = "233312";
const output = orderedCount(input);
console.log(output);
