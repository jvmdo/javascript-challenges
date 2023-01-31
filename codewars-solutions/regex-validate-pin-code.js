function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

const input = "123456";
const output = validatePIN(input);
console.log(output);
