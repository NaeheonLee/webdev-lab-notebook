const calculateAge = function (dateString) {
  const birthDate = new Date(dateString);

  // Check for Invalid date format
  if (isNaN(birthDate.getTime())) {
    return "Error: Invalid date format";
  }

  const today = new Date("2026-05-18");
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  // Exact string error matches
  if (age < 0) {
    return "Error: You cannot be less than zero years old.";
  }

  if (age > 100) {
    return "Are you sure you are more than 100 years old?";
  }

  return `You are ${age} years old`;
};

console.log(calculateAge("2000-07-01"));
console.log(calculateAge("1988-05-18"));
console.log(calculateAge("2190-01-01"));
console.log(calculateAge("1800-01-01"));
console.log(calculateAge("invalid-date"));
