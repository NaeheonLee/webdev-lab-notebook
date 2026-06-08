// Add your code here
const calculateAge = function (dateString) {
  // 1. Parse the input string into a Date object
  const birthDate = new Date(dateString);

  // 2. Check if the date is invalid.
  // If Date couldn't parse the string, getTime() returns NaN (Not-a-Number).
  if (isNaN(birthDate.getTime())) {
    return "Error: Invalid date format";
  }

  // 3. Get today's dynamic date
  const today = new Date();

  // 4. Calculate the base difference in years
  let age = today.getFullYear() - birthDate.getFullYear();

  // 5. Check if the birthday has occurred yet this year
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // If the current month is BEFORE the birth month,
  // OR it's the birth month but the current day is BEFORE the birth day...
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  // 6. Handle the edge cases (Future dates and old age)
  if (age < 0) {
    return "Error: Birth date cannot be in the future";
  }

  if (age > 125) {
    return "Are you sure you are more than 125 years old?";
  }

  // 7. Return the final string
  return `You are ${age} years old`;
};

console.log(calculateAge("2000-07-01"));
// You are 25 years old
console.log(calculateAge("1988-05-18"));
// You are 38 years old
console.log(calculateAge("2190-01-01"));
// Error: Birth date cannot be in the future
console.log(calculateAge("1800-01-01"));
// Are you sure you are more than 125 years old?
console.log(calculateAge("invalid-date"));
// Error: Invalid date format

// Note: These calculations were done on May 18, 2026.
