function greetDevelopers(list) {
  return list.map((attendee) => ({
    ...attendee,
    greeting: `Hi ${attendee.firstName}, what do you like the most about ${attendee.language}?`,
  }));
}

// Also works
/* function greetDevelopers(list) {
 list.forEach(attendee => attendee.greeting = `Hi ${attendee.firstName}, what do you like the most about ${attendee.language}?`);
 return list;
} */

const list = [
  {
    firstName: "Sofia",
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: "Python",
  },
  {
    firstName: "Madison",
    lastName: "U.",
    country: "United States",
    continent: "Americas",
    age: 32,
    language: "Ruby",
  },
];

const output = greetDevelopers(list);
console.log(output);
