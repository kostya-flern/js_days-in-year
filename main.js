'use strict'

const daysInYear = (year) => {
  try {
    if (!Number.isInteger(year)) {
      throw new Error();
    }
    return (year % 100 !== 0 && year % 4 === 0) || (year % 400 === 0)
      ? 366
      : 365;
  }
  catch (error) {
    return 'exception';
  }
}

console.log(daysInYear(2019)); // 365
daysInYear('2019'); // exception
console.log(daysInYear(2020)); // 366
console.log(daysInYear(2020.2)); // exception
daysInYear(2100); // 365
daysInYear({ year: 2100 }); // exception