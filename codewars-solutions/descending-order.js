// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

function descendingOrder(n) {
  nAsString = n.toString();
  nAsArrayOfChars = nAsString.split("");
  nAsArrayOfDescedingSortedChars = [...nAsArrayOfChars].sort((a, b) => b - a);
  nAsString = nAsArrayOfDescedingSortedChars.join("");
  return Number(nAsString);
}
