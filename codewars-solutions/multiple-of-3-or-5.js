function solution(n) {
  if (n <= 0) return 0;

  return Array.from({ length: n }, (_, i) => i)
    .filter((v) => v % 3 === 0 || v % 5 === 0)
    .reduce((acc, cur) => acc + cur);
}

const output = solution(100);
console.log(output);
