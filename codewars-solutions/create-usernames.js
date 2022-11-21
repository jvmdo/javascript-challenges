//* My solution
function addUsername(list) {
  function makeUsername({ firstName, lastName, age }) {
    const bornYear = (age) => new Date().getFullYear() - age;
    return firstName.toLowerCase() + lastName[0].toLowerCase() + bornYear(age);
  }
  return list.map((attendee) => ({
    ...attendee,
    username: makeUsername(attendee),
  }));
}

//* Best solution [not mine]
/* function addUsername(list) {
  return (
    list.forEach(
      (val) =>
        (val.username = (
          val.firstName +
          val.lastName[0] +
          (new Date().getFullYear() - val.age)
        ).toLowerCase())
    ) || list
  );
} */

const list = [
  {
    firstName: "Emily",
    lastName: "N.",
    country: "Ireland",
    continent: "Europe",
    age: 30,
    language: "Ruby",
  },
  {
    firstName: "Nor",
    lastName: "E.",
    country: "Malaysia",
    continent: "Asia",
    age: 20,
    language: "Clojure",
  },
];

const output = addUsername(list);
console.log(output);
