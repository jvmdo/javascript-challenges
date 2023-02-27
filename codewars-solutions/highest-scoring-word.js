function high(sentence) {
  const scores = sentence
    .split(" ")
    .map((word) =>
      word.split("").reduce((acc, char) => acc + char.charCodeAt() - 96, 0)
    );
  return sentence.split(" ")[scores.indexOf(Math.max(...scores))];
}

const output = high("what time are we climbing the volcano");
output;
