// My solution
function hasUniqueChars(str) {
  return Object.values(
    str.split("").reduce((charMap, char) => {
      if (charMap[char]) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
      return charMap;
    }, {})
  ).every((c) => c === 1);
}

const output = hasUniqueChars("abcdqpoweiur5467fghjc");
console.log(output);

// Best solution [not mine]
function hasUniqueChars(str) {
  return new Set(str).size === str.length;
}

// Clever solution [not mine]
//? \1 matches the same text as most recently matched by the 1st capturing group
function hasUniqueChars(str) {
  return !/(.).*\1/.test(str);
}

// Another nice solution
//? "The indexOf() method returns the first index at which a given
//? element can be found in the array, or -1 if it is not present."
function hasUniqueChars(str) {
  return str.split("").every(function (v, i, arr) {
    return arr.indexOf(v) == i;
  });
}
