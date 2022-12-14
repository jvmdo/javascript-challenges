function friend(friends) {
  return friends.filter((f) => f.length === 4);
}

const input = ["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"];
const output = friend(input);
console.log(output);
