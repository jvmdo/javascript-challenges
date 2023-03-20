//* My solution
function onlyDuplicates(str) {
  return str.replace(/./gi, (m) =>
    str.indexOf(m) === str.lastIndexOf(m) ? "" : m
  );
}

//* Good solution [not mine]
/* function onlyDuplicates(str) {
  return str
    .split("")
    .filter((e) => str.indexOf(e) != str.lastIndexOf(e))
    .join("");
} */

//* Clever solution [not mine]
//? The indexOf() method, given one argument: a substring to search for, searches the entire calling string,
//? and returns the index of the first occurrence of the specified substring. Given a second argument:
//? a number, the method returns the first occurrence of the specified substring at an index greater than or
//? equal to the specified number.
/* function onlyDuplicates(s) {
  return s.replace(/./g, (c) => s[s.indexOf(c, s.indexOf(c) + 1)] || "");
} */

const output = onlyDuplicates("colloquial");
output;
