function allContinents(list) {
  // It leverages the always valid and formatted input
  return new Set(list.map(({ continent }) => continent)).size === 5;
}

// Another solution of mine
/* function allContinents(list) {
  const continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const attendeeContinents = list.map(({ continent }) => continent);

  return continents.every((c) => attendeeContinents.includes(c));
} */

// Good solution [not mine]
/* function allContinents(list) {
  return ["Africa", "Americas", "Asia", "Europe", "Oceania"].every((x) =>
    list.some((y) => x == y.continent)
  );
} */

const list = [
  {
    firstName: "Fatima",
    lastName: "A.",
    country: "Algeria",
    continent: "Africa",
    age: 25,
    language: "JavaScript",
  },
  {
    firstName: "Agustín",
    lastName: "M.",
    country: "Chile",
    continent: "Americas",
    age: 37,
    language: "C",
  },
  {
    firstName: "Jing",
    lastName: "X.",
    country: "China",
    continent: "Asia",
    age: 39,
    language: "Ruby",
  },
  {
    firstName: "Laia",
    lastName: "P.",
    country: "Andorra",
    continent: "Europe",
    age: 55,
    language: "Ruby",
  },
  {
    firstName: "Oliver",
    lastName: "Q.",
    country: "Australia",
    continent: "Oceania",
    age: 65,
    language: "PHP",
  },
];

const output = allContinents(list);
console.log(output);
