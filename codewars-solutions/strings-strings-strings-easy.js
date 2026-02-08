Boolean.prototype.toString = function () {
  return String(this.valueOf());
};

Number.prototype.toString = function () {
  return String(this.valueOf());
};

Array.prototype.toString = function () {
  return JSON.stringify(this);
};

Object.prototype.toString = function () {
  return JSON.stringify(this);
};
