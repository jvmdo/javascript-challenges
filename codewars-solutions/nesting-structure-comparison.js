Array.prototype.sameStructureAs = function (other) {
  if (!Array.isArray(other)) return false;

  const checker = [];

  function checkStructure(arr1, arr2) {
    if (arr1.length != arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
        checker.push(checkStructure(arr1[i], arr2[i]));
      } else {
        if (Array.isArray(arr1[i]) && !Array.isArray(arr2[i])) return false;
        if (!Array.isArray(arr1[i]) && Array.isArray(arr2[i])) return false;
      }
    }

    return true;
  }

  checker.push(checkStructure(this, other));
  return checker.every((c) => c === true);
};

const output = [[1], [2, 2], [3, "3"], 2, 4, [1, 2, [3, 3, 4]]].sameStructureAs(
  [[2], [4, 2], [2, 0], 1, "1", [1, 2, [3, 3, 4]]]
);
console.log(output);

// Best solution (not mine)
/* Array.prototype.sameStructureAs = function (other) {
  return (this.length === other.length) ? this.every(function(el, i){
    return Array.isArray(el) ? el.sameStructureAs(other[i]) : true;
  }) : false;
}; */
