const palindromes = function (str) {
  const processString = (inputString) => {
    return inputString.toLowerCase().replace(/[^a-z0-9]/g, "");
  };

  const processedString = processString(str);
  const reversedString = processedString.split("").reverse().join("");
  return processedString === reversedString ? true : false;
};

console.log(palindromes("A car, a man, a maraca."));

// Do not edit below this line
module.exports = palindromes;
