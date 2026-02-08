//* Clever solution
function sortMyString(S) {
  const res = ["", ""];

  for (let i = 0; i < S.length; i++) {
    res[i % 2] += S[i];
  }

  return res.join(" ");
}

//* Naive solution
/* function sortMyString(S) {
  const res = ["", ""];

  for (let index = 1; index < S.length; index += 2) {
    res[1] += S[index];
  }

  for (let index = 0; index < S.length; index += 2) {
    res[0] += S[index];
  }

  return res.join(" ");
} */

const input = "km3iEUQGa4BXKlIQ95h06QX";
const output = sortMyString(input);
console.log(output);
