function pigIt(str) {
  return str
    .split(" ")
    .map((word) =>
      word.replace(/^\w+/, (match) => `${match.slice(1)}${match[0]}ay`)
    )
    .join(" ");
}

console.log(pigIt("Pig latin is cool"));
