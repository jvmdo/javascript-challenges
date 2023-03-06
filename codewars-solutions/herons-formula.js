//* My solution
function heron(a, b, c) {
  const s = (a + b + c) / 2;
  return Math.round(Math.sqrt(s * (s - a) * (s - b) * (s - c)) * 100) / 100;
}

//* This is JavaScript solution [not mine]
/* function heron(a,b,c) {
  return Math.sqrt((s=(a+b+c)/2)*(s-a)*(s-b)*(s-c));
} */

const output = heron(3.5, 4.44, 5.5);
output;
