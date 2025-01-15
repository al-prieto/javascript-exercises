const fibonacci = function (n) {
  firstNum = 1;
  secondNum = 1;
  n = parseInt(n);
  if (n === 1 || n === 2) {
    return 1;
  } else if (n < 0) {
    return "OOPS";
  } else if (n === 0) {
    return 0;
  }
  for (let i = 3; i <= n; i++) {
    temp = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = temp;
  }
  return secondNum;
};

// Do not edit below this line
module.exports = fibonacci;
