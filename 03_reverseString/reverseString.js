const reverseString = function (str) {
  let arrayToStrings = str.split("");
  let reverseArray = arrayToStrings.reverse();
  let reversedString = reverseArray.join("");
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
