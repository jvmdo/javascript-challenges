// My solution
/* function countConsonants(str) {
  return Object.keys(
    str.split("").reduce((charMap, char) => {
      char = char.toLowerCase();
      if (!charMap[char] && /[^aeiou\d\W]/ig.test(char)) {
        charMap[char] = 1;
      }
      return charMap;
    }, {})
  ).length;
} */

// My other solution
/* function countConsonants(str) {
  return str.split("").reduce((cons, char) => {
      char = char.toLowerCase();
      if (!cons.includes(char) && /[^aeiou\d\W]/ig.test(char)) {
        cons += char;
      }
      return cons;
    }, "").length;
}
 */

// My best solution
function countConsonants(str) {
  return new Set(str.toLowerCase().replace(/[aeiou\d\W]/g, "")).size;
}

const output = countConsonants("abcdefghABCDEFGHijklmnIJK123+-\\//,.<>");
console.log(output);
