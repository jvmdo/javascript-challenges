// My JavaScrapy solution
function findUniq(arr) {
  // Get the entry at the found index
  return arr.at(
    arr
      // All entries to lower case
      .map((e) => e.toLowerCase())
      // Remove all entries' duplicated characters then convert from String to Array
      .map((e) => Array.from(new Set(e).values()))
      // Sort the entries' characters alphabetically then convert them back to String
      .map((e) => e.sort().join(""))
      // Find the index of the unique entry
      .findIndex((e, _, self) => self.indexOf(e) === self.lastIndexOf(e))
  );
}

const output = findUniq([
  "Tom Marvolo Riddle",
  "I am Lord Voldemort",
  "Harry Potter",
]);

console.log(output); // Harry Potter
