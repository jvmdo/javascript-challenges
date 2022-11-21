//* My solution
function isAgeDiverse(list) {
  const ageGroups = {
    teens: [0, 19],
    twenties: [20, 29],
    thirties: [30, 39],
    forties: [40, 49],
    fifties: [50, 59],
    sixties: [60, 69],
    seventies: [70, 79],
    eighties: [80, 89],
    nineties: [90, 99],
    centenarian: [100, Infinity],
  };

  const findAgeGroup = (age) =>
    Object.entries(ageGroups)
      .find(([_, value]) => age >= value[0] && age <= value[1])
      .at(0);

  const attendeeGroups = list.reduce(
    (groups, { age }) => (groups.add(findAgeGroup(age)), groups),
    new Set([])
  );

  return attendeeGroups.size === 10;
}

//* Clever solution [not mine]
/* function isAgeDiverse(list) {
  return list.some(h => h.age >= 100) 
  ? [10,20,30,40,50,60,70,80,90].every(e => list.some(x => x.age - e >= 0 && x.age - e <= 9))
  : false;
} */

//* Cleverest solution [not mine]
/* function isAgeDiverse(list) {
  var dec = [/0?\d/, /^1\d$/, /2\d/, /3\d/, /4\d/, /5\d/, /6\d/, /7\d/, /8\d/, /9\d/, /1\d\d/];
  return dec.every(x => list.some(y => x.test(y.age)));
} */

//* Same logic as mine but coded differently [not mine]
/* function isAgeDiverse(list) {
  return [
    [10, 20],
    [20, 30],
    [30, 40],
    [40, 50],
    [50, 60],
    [60, 70],
    [70, 80],
    [80, 90],
    [90, 100],
    [100, 200],
  ].every(([minAge, maxAge]) => list.some((v) => v.age >= minAge && v.age < maxAge)
  );
} */

const list = [
  {
    firstName: "Harry",
    lastName: "K.",
    country: "Brazil",
    continent: "Americas",
    age: 19,
    language: "Python",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 29,
    language: "JavaScript",
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
    firstName: "Noa",
    lastName: "A.",
    country: "Israel",
    continent: "Asia",
    age: 40,
    language: "Ruby",
  },
  {
    firstName: "Andrei",
    lastName: "E.",
    country: "Romania",
    continent: "Europe",
    age: 59,
    language: "C",
  },
  {
    firstName: "Maria",
    lastName: "S.",
    country: "Peru",
    continent: "Americas",
    age: 60,
    language: "C",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 75,
    language: "Python",
  },
  {
    firstName: "Chloe",
    lastName: "K.",
    country: "Guernsey",
    continent: "Europe",
    age: 88,
    language: "Ruby",
  },
  {
    firstName: "Viktoria",
    lastName: "W.",
    country: "Bulgaria",
    continent: "Europe",
    age: 98,
    language: "PHP",
  },
  {
    firstName: "Piotr",
    lastName: "B.",
    country: "Poland",
    continent: "Europe",
    age: 128,
    language: "JavaScript",
  },
];

const output = isAgeDiverse(list);
console.log(output);
