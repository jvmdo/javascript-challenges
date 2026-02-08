var encryptThis = function (text) {
  return text
    .split(" ")
    .map((word) =>
      word.replace(/\w/g, (c, i) => {
        if (i === 0) {
          return c.charCodeAt();
        }

        if (i === 1) {
          return word.at(-1);
        }

        if (i === word.length - 1) {
          return word.at(1);
        }

        return c;
      }),
    )
    .join(" ");
};

const input = "hello world";
const output = encryptThis(input);
console.log(output);
