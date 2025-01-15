const removeFromArray = function (arr, ...others) {
  let newArray = arr.filter(function (i) {
    return !others.includes(i);
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
