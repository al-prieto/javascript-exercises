const sumAll = function (num1, num2) {
  let arr = [];
  if (num1 > num2) {
    let tempNum = num1;
    num1 = num2;
    num2 = tempNum;
  } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR";
  } else if (num1 < 0 || num2 < 0) {
    return "ERROR";
  } else if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "ERROR";
  } else if (arguments.length > 2) {
    return "ERROR";
  }
  for (let i = num1; i <= num2; i++) {
    arr.push(i);
  }
  let sum = arr.reduce((acc, currentValue) => acc + currentValue, 0);
  return sum;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
