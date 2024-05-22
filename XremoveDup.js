function removeDuplicatesFromString(str) {
  let uniqueStr = "";
  for (let i = 0; i < str.length; i++) {
    if (uniqueStr.indexOf(str[i]) === -1) {
      uniqueStr += str[i];
    }
  }
  return uniqueStr;
}

// Example usage:
const inputStr = "programming";
const resultStr = removeDuplicatesFromString(inputStr);
console.log("String with duplicates removed:", resultStr);
