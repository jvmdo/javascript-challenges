// Approach: generating all possible anagrams,
// searching for the target number on each iteration
/* function nextBigger(input) {
  const str = String(input);
  let next = Number(
    str
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
  let change = false;

  function quickperm(word) {
    function swap(a, i, j) {
      let temp;
      temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }

    const a = word.split("");
    const n = a.length;
    const p = Array.from({ length: n }, (_, i) => i);
    let i = 1;
    let j;

    while (i < n) {
      p[i]--;
      j = i % 2 ? p[i] : 0;

      swap(a, i, j);
      console.log(a.join(""));

      let ns = Number(a.join(""));
      if (ns > input && ns <= next) {
        next = ns;
        change = true;
      }

      i = 1;
      while (p[i] === 0) {
        p[i] = i;
        i++;
      }
    }
  }

  quickperm(str);
  return change ? next : -1;
} */

// Approach: add 1 to the input number then
// check whether the result is its anagram
function isAnagram(test, original) {
  const testCharMap = buildCharMap(test);
  const originalCharMap = buildCharMap(original);

  if (Object.keys(testCharMap).length !== Object.keys(originalCharMap).length) {
    return false;
  }

  for (const char in testCharMap) {
    if (testCharMap[char] !== originalCharMap[char]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  const cleanStr = str.replace(/[^\w]/g, "").toLowerCase();
  const charMap = {};

  for (let char of cleanStr) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

function nextBigger(input) {
  const max = Number(
    String(input)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );

  for (let i = input + 1; i <= max; i++) {
    if (isAnagram(String(i), String(input))) {
      return i;
    }
  }

  return -1;
}

const output = nextBigger(144);
console.log(output);
