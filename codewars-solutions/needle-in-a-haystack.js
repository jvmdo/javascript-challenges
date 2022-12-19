/* function findNeedle(haystack) {
  return `found the needle at position ${haystack.findIndex(
    (el) => el === "needle"
  )}`;
} */

//! indexOf() >>>> findIndex()
function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`;
}

const input = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];
const output = findNeedle(input);
console.log(output);
