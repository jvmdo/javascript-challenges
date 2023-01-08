function insideOutString(string) {
  const reverse = (str) => str && str.at(-1) + reverse(str.slice(0, -1));

  return string
    .split(" ")
    .map((word) => {
      const halfLength = Math.floor(word.length / 2);
      const isLengthOdd = word.length > 1 && word.length % 2;
      return `${reverse(word.slice(0, halfLength))}${
        isLengthOdd ? word[halfLength] : ""
      }${reverse(word.slice(-halfLength))}`;
    })
    .join(" ");
}

const input = "The quick brown fox jumps over the lazy dog";
const output = insideOutString(input);
console.log(output);
