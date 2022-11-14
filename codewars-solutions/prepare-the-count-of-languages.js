//* My solution
/* function countLanguages(list) {
  return list.reduce((countMap, attendee) => {
    if (!countMap[attendee.language]) {
      countMap[attendee.language] = 1;
    } else {
      countMap[attendee.language]++;
    }
    return countMap;
  }, {});
} */

//* A better solution [not mine]
/* function countLanguages(list) {
  return list.reduce((countMap, attendee) => {
    countMap[attendee.language] = (countMap[attendee.language] || 0) + 1;
    return countMap;
  }, {});
} */

//* JavaScripter solution [not mine]
/* function countLanguages(list) {
  return list.reduce((countMap, attendee) => {
    countMap[attendee.language] = (countMap[attendee.language] || 0) + 1;
    return countMap;
  }, {});
} */

//* JavaScriptest solution [not mine]
/* function countLanguages(list) {
  //? ~N is equivalent to -(N + 1)
  return list.reduce(
    (countMap, attendee) => (
      (countMap[attendee.language] = -~countMap[attendee.language]), countMap
    ),
    {}
  );
} */

//* My best solution [adapted]
function countLanguages(list) {
  return list.reduce(
    (countMap, attendee) => (
      (countMap[attendee.language] = (countMap[attendee.language] ?? 0) + 1),
      countMap
    ),
    {}
  );
}

const list = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
  },
  {
    firstName: "Ramon",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
  },
];

const output = countLanguages(list);
console.log(output);
