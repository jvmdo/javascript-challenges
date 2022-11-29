//* My solution
// It works fine if there are no entries which
// [language] and [firstName] properties are equal
/* function sortByLanguage(list) {
  function compare(objA, objB, prop) {
    const propA = objA[prop].toLowerCase();
    const propB = objB[prop].toLowerCase();

    if (propA > propB) {
      return 1;
    } else if (propA < propB) {
      return -1;
    } else {
      return compare(objA, objB, "firstName");
    }
  }
  
  return list.sort((a, b) => compare(a, b, "language"));
} */

//* Best solution [not mine]
function sortByLanguage(list) {
  return list.sort((a, b) =>
    a.language === b.language
      ? a.firstName.localeCompare(b.firstName)
      : a.language.localeCompare(b.language)
  );
}

const list = [
  {
    firstName: "Nikau",
    lastName: "R.",
    country: "New Zealand",
    continent: "Oceania",
    age: 39,
    language: "Ruby",
  },
  {
    firstName: "Precious",
    lastName: "G.",
    country: "South Africa",
    continent: "Africa",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Maria",
    lastName: "S.",
    country: "Peru",
    continent: "Americas",
    age: 30,
    language: "C",
  },
  {
    firstName: "Agustin",
    lastName: "V.",
    country: "Uruguay",
    continent: "Americas",
    age: 19,
    language: "JavaScript",
  },
];

const output = sortByLanguage(list);
console.log(output);
