const convertToCelsius = function (Fahrenheit) {
  let Celsius = (Fahrenheit - 32) * (5 / 9);
  let roundedCelsius = parseFloat(Celsius.toFixed(1));
  return roundedCelsius;
};

const convertToFahrenheit = function (Celsius) {
  let Fahrenheit = Celsius * (9 / 5) + 32;
  let roundedFahrenheit = parseFloat(Fahrenheit.toFixed(1));
  return roundedFahrenheit;
};

console.log(convertToFahrenheit(0));
console.log(convertToCelsius(32));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
