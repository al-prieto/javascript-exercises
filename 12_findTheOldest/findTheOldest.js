const findTheOldest = function (arr) {
  const currentYear = new Date().getFullYear();
  return arr.reduce((oldest, current) => {
    const currentAge = current.yearOfDeath
      ? current.yearOfDeath - current.yearOfBirth
      : currentYear - current.yearOfBirth;

    const oldestAge = oldest.yearOfDeath
      ? oldest.yearOfDeath - oldest.yearOfBirth
      : currentYear - oldest.yearOfBirth;

    return currentAge > oldestAge ? current : oldest;
  }, arr[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
