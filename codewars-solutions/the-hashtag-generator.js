function generateHashtag(str) {
  if (!str.trim()) return false;

  const output = str
    .split(/\s+/)
    .map((t) => t[0].toUpperCase() + t.slice(1))
    .join("")
    .replace(/^(\w)/, "#$1");

  return output.length > 140 ? false : output;
}
