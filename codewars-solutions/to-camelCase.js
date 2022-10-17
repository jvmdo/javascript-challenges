function toCamelCase(str) {
  return str.replace(/[_\-]([A-Za-z])/g, (_, group) => group.toUpperCase());
}

const output = toCamelCase("The-stealth-Warrior");
output;
