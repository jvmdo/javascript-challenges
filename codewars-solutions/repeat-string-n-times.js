function repeatStringNumTimes(str, num) {
  if (num <= 0) return "";
  return str.replace(
    /(\w+|\*)/,
    `${Array(num)
      .fill("$1")
      .reduce((acc, cur) => acc + cur)}`
  );
}

const output = repeatStringNumTimes("abc", 5);
console.log(output);
