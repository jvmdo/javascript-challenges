//* My simple solution
/* function askForMissingDetails(list) {
  for (let i = 0; i < list.length; i++) {
    Object.entries(list[i]).forEach((entry) => {
      if (!entry[1]) {
        list[i].question = `Hi, could you please provide your ${entry[0]}.`;
      }
    });
  }

  return list.filter(({ question }) => !!question);
} */

//* My better solution
//? Array.filter(fn) creates another array where its values
//? are all the values from the original array that evaluate to true on fn
//? Therefore, if no [attendee[prop] === null], then [undefined] is returned
//? from fn. Hence, that object is filtered out from the result array.
function askForMissingDetails(list) {
  return list.filter((attendee) => {
    for (prop in attendee) {
      if (attendee[prop] === null) {
        return (attendee.question = `Hi, could you please provide your ${prop}.`);
      }
    }
  });
}

//* Best solution [not mine]
/* function askForMissingDetails(list) {
  return list.filter((dev) =>
    Object.keys(dev).some(
      (key) =>
        dev[key] === null &&
        (dev.question = `Hi, could you please provide your ${key}.`)
    )
  );
} */

const list = [
  {
    firstName: null,
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
    language: null,
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

const output = askForMissingDetails(list);
console.log(output);
