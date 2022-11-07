// In order to check whether one group is found or not
// it is necessary the dollar sign right after parentheses

function incrementString(string) {
  return string.replace(
    /(\d+)?$/,
    (number) => String(Number(number) + 1).padStart(number.length, "0") ?? "1"
  );
}

const output = incrementString("fo33obar");
console.log(output);
