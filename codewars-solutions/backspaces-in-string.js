//* My solution
//? [^#] matches ANY character EXCEPT #
function cleanString(str) {
  if (!str.includes("#")) return str;
  return cleanString(str.replaceAll(/^#|[^#]#/g, ""));
}

//* Best solution [not mine]
/* function cleanString(s) {
  return s.includes(`#`) ? cleanString(s.replace(/[^#]?#/, ``)) : s;
}; */

const output = cleanString("##fjnwui#NI#(*N#ION#Onfjen################Io4f");
console.log(output); // Io4f
