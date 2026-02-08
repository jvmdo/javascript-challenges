function scramble(str, arr) {
  const res = [];
  for (const i in str) {
    res[arr[i]] = str[i];
  }
  return res.join("");
}

//* Clever solution [not mine]
/* function scramble(s, a) {
  return a.map((_,i)=>s[a.indexOf(i)]).join``
}; */

const input = ["abcd", [0, 3, 1, 2]];
const output = scramble(...input);
console.log(output);
