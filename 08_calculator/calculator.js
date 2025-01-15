const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr.reduce((acc, num) => acc + num, 0);
  }
};

const multiply = function (arr) {
  return arr.reduce((acc, num) => acc * num, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
