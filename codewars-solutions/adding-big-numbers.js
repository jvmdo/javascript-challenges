// Native solution
/* function add(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
} */

// My simple solution
function add(a, b) {
  function reverseString(str) {
    // Same as -> str === "" ? str : reverse
    return str && reverseString(str.slice(1)) + str.charAt(0);
  }

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

const output = add(
  "63829983432984289347293874",
  "90938498237058927340892374089"
);
console.log(output);
console.assert(output === "91002328220491911630239667963", "Wrong answer");
