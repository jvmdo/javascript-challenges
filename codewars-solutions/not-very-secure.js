// My good solution
String.prototype.isEmpty = function () {
  return this.length === 0;
};

String.prototype.hasForbiddenChars = function () {
  // I get wrong results using RegExp constructor. Why?
  return /\W+|\s+|_/gi.test(this);
};

function alphanumeric(string) {
  if (string.isEmpty() || string.hasForbiddenChars()) return false;
  return true;
}

const output = alphanumeric("a123sdf");
console.log(output);

// Maybe the best solution (not mine)
/* function alphanumeric(string){
  return /^[0-9a-z]+$/i.test(string);
} */
