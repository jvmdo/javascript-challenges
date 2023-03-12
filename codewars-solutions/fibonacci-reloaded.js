function fib(n) {
  let [cur, nxt] = [0, 1];
  for (let i = 1; i < n; i++) [cur, nxt] = [nxt, cur + nxt];
  return cur;
}
