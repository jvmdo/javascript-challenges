function removeLeadingZeros(str) {
  return str.replace(/^[0]*/, "");
}

function reverseString(str) {
  return str && reverseString(str.slice(1)) + str.charAt(0);
}

function add(a, b) {
  let carry = 0,
    sum = "";
  const longest = Math.max(a.length, b.length);

  a = a.padStart(longest, "0");
  b = b.padStart(longest, "0");

  for (let i = longest - 1; i >= 0; i--) {
    const z = String(Number(a[i]) + Number(b[i]) + carry).padStart(2, "0");
    carry = Number(z[0]);
    sum += z[1];
  }

  sum += carry === 0 ? "" : carry;
  return reverseString(sum);
}

function multiply(a, b) {
  a = removeLeadingZeros(a);
  b = removeLeadingZeros(b);

  const aLen = a.length;
  const bLen = b.length;

  if (aLen < 7 && bLen < 7) {
    return String(Number(a) * Number(b));
  }

  let f = 0;
  const sums = [];

  for (let i = bLen - 1; i >= 0; i--) {
    let carry = 0,
      m = "";

    for (let j = aLen - 1; j >= 0; j--) {
      const z = String(Number(b[i]) * Number(a[j]) + carry).padStart(2, "0");
      carry = Number(z[0]);
      m += z[1];
    }

    m += carry === 0 ? "" : carry;
    sums.push(reverseString(m) + "0".repeat(f++));
  }

  return sums.reduce((x, y) => add(x, y));
}

const output = multiply("133713371337", "322322322");
console.log(output);
