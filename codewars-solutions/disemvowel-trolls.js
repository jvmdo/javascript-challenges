function disemvowel(str) {
  // regex options: global (don't return after first match), multiline, case insesitive
  const regex = new RegExp("[aeiou]", "gmi");
  const subst = "";
  return str.replace(regex, subst);
}
