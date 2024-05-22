function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

// Example usage:
const inputStr = "Hello, World!";
const reversedStr = reverseString(inputStr);
console.log("Reversed string:", reversedStr);
