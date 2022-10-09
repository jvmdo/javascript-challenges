// Simple solution
function rgb(r, g, b) {
  function cap(n) {
    if (n < 0) return 0;
    else if (n > 255) return 255;
    return n;
  }

  r = cap(r).toString(16);
  g = cap(g).toString(16);
  b = cap(b).toString(16);

  r = r.length == 2 ? r : "0" + r;
  g = g.length == 2 ? g : "0" + g;
  b = b.length == 2 ? b : "0" + b;

  return (r + g + b).toUpperCase();
}

// JavaScripter solution
function bestRGB(...args) {
  const cap = (n) => Math.max(0, Math.min(255, n));
  return args
    .map((dec) => cap(dec).toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase();
}

const simple = rgb(173, 255, 47);
simple;

const best = bestRGB(173, 255, 47);
best;
