/* Write a function that reverses a string. Take a string as input, reverse the string, and return the new string. */

const reverseString = input => {
  if (input === "") {
    return "";
  } else {
    return reverseString(input.substr(1)) + input.charAt(0);
  }
};

console.log(reverseString("hello"));
