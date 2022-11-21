// My simple solution
/* function isLanguageDiverse(list) {
  const langCounter = () => list.reduce((map, { language }) => (map[language] = (map[language] ?? 0) + 1, map), {});
  const countValues = Object.values(langCounter()).sort((a, b) => b - a);
  return !countValues.find((count) => countValues[0] / count > 2) && true;
} */

// My best solution [adapted]
function isLanguageDiverse(list) {
  const langCounter = () =>
    list.reduce(
      (map, { language }) => ((map[language] = (map[language] ?? 0) + 1), map),
      {}
    );

  const countValues = Object.values(langCounter());

  const targetValues = countValues.reduce(
    ({ min, max }, count) => (
      (min = Math.min(count, min)), (max = Math.max(count, max)), { min, max }
    ),
    { min: Number.MAX_VALUE, max: 0 }
  );

  return targetValues.max / targetValues.min <= 2;
}

const list = [
  {
    firstName: "Daniel",
    lastName: "J.",
    country: "Aruba",
    continent: "Americas",
    age: 42,
    language: "Python",
  },
  {
    firstName: "Hanna",
    lastName: "L.",
    country: "Hungary",
    continent: "Europe",
    age: 95,
    language: "JavaScript",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 22,
    language: "Ruby",
  },
  {
    firstName: "Sou",
    lastName: "B.",
    country: "Japan",
    continent: "Asia",
    age: 43,
    language: "Ruby",
  },
  {
    firstName: "Jayden",
    lastName: "P.",
    country: "Jamaica",
    continent: "Americas",
    age: 18,
    language: "JavaScript",
  },
  {
    firstName: "Joao",
    lastName: "D.",
    country: "Portugal",
    continent: "Europe",
    age: 25,
    language: "JavaScript",
  },
];

const output = isLanguageDiverse(list);
console.log(output); // false
