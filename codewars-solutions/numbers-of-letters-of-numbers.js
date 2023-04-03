function numbersOfLetters(n) {
  function number2Name(n) {
    function getNumberName(n) {
      const numberNames = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
      };
      return numberNames[n];
    }
    return [...String(n)].map(getNumberName).join("");
  }

  let cur, next;
  const path = [number2Name(n)];

  do {
    cur = (next ?? number2Name(n)).length;
    next = number2Name(cur);
    path.push(next);
  } while (cur !== next.length);

  return n === 4 ? ["four"] : path;
}

const output = numbersOfLetters(1);
console.log(output);
