function openOrSenior(data) {
  // Simple solution
  //   const output = [];
  //   for (const pair of data) {
  //     if (pair[0] >= 55 && pair[1] > 7) {
  //       output.push("Senior");
  //     } else {
  //       output.push("Open");
  //     }
  //   }
  //   return output;

  // One line solution
  return data.map(([age, handicap]) =>
    age >= 55 && handicap > 7 ? "Senior" : "Open"
  );
}

const output = openOrSenior([
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
]);

console.log(output);
