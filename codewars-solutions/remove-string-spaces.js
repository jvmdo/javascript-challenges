//* My solution
/* function noSpace(x) {
  return x.replaceAll(" ", "");
} */

//* My other solution
function noSpace(x) {
  return x.replace(/\s+/g, "");
}

const input = "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd";
const output = noSpace(input);
console.log(output);
