function countCharacterOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

// Example usage:
const inputString = "programming is fun";
const charToCount = "g";
const occurrences = countCharacterOccurrences(inputString, charToCount);
console.log(`The character "${charToCount}" appears ${occurrences} times.`);
