//* My solution
function deleteNth(arr, n) {
  return arr.reduce((result, cur) => {
    if (result.filter((el) => el === cur).length < n) {
      result.push(cur);
    }
    return result;
  }, []);
}

//* My solution [shorter version]
/* function deleteNth(arr, n) {
  return arr.reduce((result, cur) =>
    (result.filter(el => el === cur).length < n && result.push(cur), result),
    []
  )
} */

//* My other solution
/* function deleteNth(arr, n) {
  const presence = {}
  return arr.filter(el => {
    if (!presence.hasOwnProperty(el)) {
      presence[el] = 1
      return true
    } else {
      if (presence[el] < n) {
        presence[el] += 1
        return true
      } else {
        return false
      }
    }
  })
} */

//* My other solution [shorter version]
/* function deleteNth(arr, n) {
  const presence = {}
  return arr.filter(el => (presence[el] = (presence[el] ?? 0) + 1, presence[el] <= n))
} */

//* Good solution [not mine]
/* function deleteNth(arr, x) {
  return arr.filter((e, i) => arr.slice(0, i).filter((f) => f == e).length < x);
} */

const input = [1, 2, 3, 1, 2, 1, 2, 3];
const output = deleteNth(input, 2);
console.log(output); // [1, 2, 3, 1, 2, 3]
