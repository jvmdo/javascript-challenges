//* My solution
function orderFood(list) {
  return list.reduce(
    (foodCounterMap, { meal }) => (
      (foodCounterMap[meal] = (foodCounterMap[meal] ?? 0) + 1), foodCounterMap
    ),
    {}
  );
}

//* My other solution
/* function orderFood(list) {
  return list.reduce(
    (foodCounterMap, { meal }) => (
      (foodCounterMap[meal] = -~foodCounterMap[meal]), foodCounterMap
    ),
    {}
  );
} */

const list = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
    meal: "vegetarian",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
    meal: "standard",
  },
  {
    firstName: "Ramona",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
    meal: "vegan",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
    meal: "vegetarian",
  },
];

const output = orderFood(list);
console.log(output);
