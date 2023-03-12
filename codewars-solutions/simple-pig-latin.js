function pigIt(str) {
  return str
    .split(" ")
    .map((word) =>
      word.replace(/^\w+/, (match) => `${match.slice(1)}${match[0]}ay`)
    )
    .join(" ");
}

//* pigIt for words
/* function translatePigLatin(str) {
  return str.replace(
    /^([^aeiou]+)?(\w+)?/gi,
    (_, p, q) => `${q ?? ""}${p ?? "w"}ay`
  );
} */

console.log(pigIt("Pig latin is cool"));
