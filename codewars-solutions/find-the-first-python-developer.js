// My "I know how to use ES6 array functions"
function getFirstPython(list) {
  return (
    list.reduce((msg, attendee, index) => {
      if (
        attendee.language === "Python" &&
        list.findIndex((a) => a.language === attendee.language) === index
      ) {
        return `${attendee.firstName}, ${attendee.country}`;
      }
      return msg;
    }, "") || "There will be no Python developers"
  );
}

// My simpler solution
/* function getFirstPython(list) {
  const attendee = list.find(att => att.language === "Python");
  const msg = `${attendee?.firstName}, ${attendee?.country}`;
  return msg.includes("undefined") ? "There will be no Python developers" : msg;
} */

// Simplest solution [not mine 🙄🙄🙄]
/* function getFirstPython(list) {
  const dev = list.find(x => x.language === "Python")
  return dev ? `${dev.firstName}, ${dev.country}` : "There will be no Python developers"
} */

const list = [
  {
    firstName: "Mark",
    lastName: "G.",
    country: "Scotland",
    continent: "Europe",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Victoria",
    lastName: "T.",
    country: "Puerto Rico",
    continent: "Americas",
    age: 30,
    language: "Python",
  },
  {
    firstName: "Emma",
    lastName: "B.",
    country: "Norway",
    continent: "Europe",
    age: 19,
    language: "Clojure",
  },
];

const output = getFirstPython(list);
console.log(output);
