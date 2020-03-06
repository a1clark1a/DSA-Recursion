/*Write a function called powerCalculator() that takes two parameters, an integer as a base, 
and another integer as an exponent. The function returns the value of the 
base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers) */

const powerCalculator = (val, exp) => {
  if (exp <= 0) {
    return console.log("Exponent should be >= 0");
  }
  if (exp === 1) {
    return val;
  } else {
    return val * powerCalculator(val, exp - 1);
  }
};

console.log(powerCalculator(10, 3));
