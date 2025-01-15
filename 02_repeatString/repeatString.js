const greetingHey = "hey";
const greetingHello = "hello";
const identifierH1 = "h1";
const farewellBye = "bye";
const farewellGoodbye = "goodbye";
let randomTimes = function number() {
  return Math.floor(Math.random() * 1000);
};

const repeatString = function (str, times) {
  if (times < 0) {
    return "ERROR";
  } else return str.repeat(times);
};

console.log(repeatString(greetingHey, 3));
console.log(repeatString(greetingHello, 10));
console.log(repeatString(identifierH1, 1));
console.log(repeatString(farewellBye, 0));
console.log(repeatString(farewellGoodbye, -1));
console.log(repeatString("odin", randomTimes));
console.log(repeatString("", 10));

// Do not edit below this line
module.exports = repeatString;
