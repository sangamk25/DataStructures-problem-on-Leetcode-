function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}

// Example usage:
const inputStr = "A man, a plan, a canal, Panama";
const isPalindromic = isPalindrome(inputStr);
console.log("Is it a palindrome?", isPalindromic);
