//* My solution
function trafficLights(current) {
  const nextState = { green: "yellow", yellow: "red", red: "green" };
  return nextState[current];
}

//* Another good solution [not mine]
/* function updateLight(current) {
  const states = ["green", "yellow", "red"];
  let nextStateIndex = (states.indexOf(current) + 1) % states.length;
  return states[nextStateIndex];
} */

const output = trafficLights("green");
console.log(output);
