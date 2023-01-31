//* My solution
//? Counts the number of characters in a string using the .split() technique
String.prototype.characterCount = function (charsToCount) {
  if (!this.length) return;
  const charArray = [...charsToCount];
  const res = charArray.map((c) => this.split(c).length - 1);
  return res.length > 1 ? res : res[0];
};

//* Clever solution [not mine]
//? The .concat() technique returns a number if map returns a single element array
//? and returns an array in multi element array
/* String.prototype.characterCount = function (chars) {
  return chars
          ? [...chars]
              .map(c => this.split(c).length - 1)
              .reduce((acc, c) => [].concat(acc, c))
          : void 0
} */

//* Good solution [not mine]
//? Counts the number of characters in a string using the .filter() technique
/* String.prototype.characterCount = function (charsToCount) {
  if (!charsToCount) return;
  if (charsToCount.length === 1) return this.split("").filter(v => v === charsToCount).length;
  return [...charsToCount].map(value => this.characterCount(value));
}; */

const output = "booop-booop-deee-doo-dooop".characterCount("bao");
console.log(output);
// console.log([1].reduce((acc, c) => [].concat(acc, c)))
