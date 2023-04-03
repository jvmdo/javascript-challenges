function divCon(mixed) {
  return mixed.reduce(
    (acc, cur) => acc + (Number.isInteger(cur) ? cur : -cur),
    0
  );
}

const output = divCon(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]);
console.log(output);
