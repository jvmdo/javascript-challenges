function countDevelopers(list) {
  return list.filter(
    ({ language, continent }) => language + continent === "JavaScriptEurope"
  ).length;
}

// Such a clever solution [not mine]
//? 1 + true === 2 🤯🤯🤯
/* function countDevelopers(developers) {
  return developers.reduce(
    (count, { continent, language }) =>
      count + (continent == "Europe" && language == "JavaScript"),
    0
  );
} */

const list = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "JavaScript",
  },
  {
    firstName: "Maia",
    lastName: "S.",
    country: "Tahiti",
    continent: "Oceania",
    age: 28,
    language: "JavaScript",
  },
  {
    firstName: "Shufen",
    lastName: "L.",
    country: "Taiwan",
    continent: "Asia",
    age: 35,
    language: "HTML",
  },
  {
    firstName: "Sumayah",
    lastName: "M.",
    country: "Tajikistan",
    continent: "Asia",
    age: 30,
    language: "CSS",
  },
];

const output = countDevelopers(list);
console.log(output);
