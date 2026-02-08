// * Better one
const isAnagram = function (test, original) {
  if (test.length !== original.length) return false;

  const a = test.toLowerCase();
  const b = original.toLowerCase();

  return a.split("").sort().join("") === b.split("").sort().join("");
};

// const isAnagram = function (test, original) {
//   const testCharMap = buildCharMap(test);
//   const originalCharMap = buildCharMap(original);

//   if (Object.keys(testCharMap).length !== Object.keys(originalCharMap).length) {
//     return false;
//   }

//   for (const char in testCharMap) {
//     if (testCharMap[char] !== originalCharMap[char]) {
//       return false;
//     }
//   }

//   return true;
// };

// function buildCharMap(str) {
//   const cleanStr = str.replace(/[^\w]/g, "").toLowerCase();
//   const charMap = {};

//   for (let char of cleanStr) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }

const output = isAnagram("anagram", "gramana");
console.log(output);

// Another good solution
/* function isAnagram(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str){
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

const outcomes = isAnagram("anagram", "granama");
console.log(outcomes); */
