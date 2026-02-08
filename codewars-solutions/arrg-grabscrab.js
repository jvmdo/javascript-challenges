function grabscrab(anagram, dictionary) {
  return dictionary.filter((word) => isAnagram(anagram, word));
}

const isAnagram = function (test, original) {
  if (test.length !== original.length) return false;

  const a = test.toLowerCase();
  const b = original.toLowerCase();

  return a.split("").sort().join("") === b.split("").sort().join("");
};
