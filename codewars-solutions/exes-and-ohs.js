//* My solution
/* function XO(str) {
  const counter = (xos, t) => xos.filter(c => c.toLowerCase() === t).length;
  return counter([...str], "x") === counter([...str], "o");
} */

//* My other solution [same logic]
String.prototype.xoCounter = function (t) {
  return [...this].filter((c) => c.toLowerCase() === t).length;
};

const XO = (str) => str.xoCounter("x") === str.xoCounter("o");

//* Another good solution [not mine]
/* function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
} */

const input = "ruqpepirxpondkkoasfxxxoo";
const output = XO(input);
console.log(output);
