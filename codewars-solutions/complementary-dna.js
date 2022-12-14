//* My solution
function DNAStrand(dna) {
  const strandMap = { A: "T", T: "A", C: "G", G: "C" };
  return [...dna].map((s) => strandMap[s]).join("");
}

//* Best solution [not mine]
/* DNAStrand.pairs = { A: "T", T: "A", C: "G", G: "C" };

function DNAStrand(dna) {
  return dna.replace(/./g, function (c) {
    return DNAStrand.pairs[c];
  });
} */

const input = "GTAT";
const output = DNAStrand(input);
console.log(output);
