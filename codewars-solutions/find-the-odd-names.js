function findOddNames(list) {
  function isNameOdd(person) {
    const { firstName } = person;
    const sum = firstName
      .split("")
      .map((l) => l.charCodeAt())
      .reduce((acc, cur) => acc + cur, 0);
    return sum % 2;
  }

  return list.filter(isNameOdd);
}

// One line version
/* function findOddNames(list) {
  return list.filter(person => person.firstName.split("").map(l => l.charCodeAt()).reduce((acc, cur) => acc + cur, 0) % 2);
} */

const list = [
  {
    firstName: "Aba",
    lastName: "N.",
    country: "Ghana",
    continent: "Africa",
    age: 21,
    language: "Python",
  },
  {
    firstName: "Abb",
    lastName: "O.",
    country: "Israel",
    continent: "Asia",
    age: 39,
    language: "Java",
  },
];

const output = findOddNames(list);
console.log(output);
