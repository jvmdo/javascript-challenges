// My solution
function getCount(str) {
  return str.split("").filter((l) => /[aeiou]/gi.test(l)).length;
}

// Best solution [not mine]
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

// Other nice solution [not mine]
function getCount(str) {
  return str.replace(/[^aeiou]/gi, "").length;
}
