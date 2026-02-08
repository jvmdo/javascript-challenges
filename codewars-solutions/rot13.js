//* My solution
function rot13(message) {
  return message
    .split("")
    .map((char) => {
      const charCode = char.charCodeAt();

      if (charCode >= 97 && charCode < 123) {
        const nextCharCode = charCode + 13;
        return String.fromCharCode(
          nextCharCode < 123 ? nextCharCode : (nextCharCode % 123) + 97,
        );
      }

      if (charCode >= 65 && charCode < 91) {
        const nextCharCode = charCode + 13;
        return String.fromCharCode(
          nextCharCode < 91 ? nextCharCode : (nextCharCode % 91) + 65,
        );
      }

      return char;
    })
    .join("");
}

//* Better solution [not mine]
/* function rot13(message) {
  return message.replace(/[a-z]/gi, (char) => {
    const base = char <= "Z" ? 65 : 97;
    return String.fromCharCode(((char.charCodeAt() - base + 13) % 26) + base);
  });
} */

//* Clever solution [not mine]
/* function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  return message.replace(/[a-z]/gi, (c) => b[a.indexOf(c)]);
} */

const input = "test";
const output = rot13(input);
console.log(output);
