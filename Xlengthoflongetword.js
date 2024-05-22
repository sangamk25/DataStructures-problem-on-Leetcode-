function findLongestWordLength(sentence) {
  const words = sentence.split(" ");
  let longestWordLength = 0;
  let longestWord = '';

  for (const word of words) {
    // Remove any non-alphanumeric characters from the word
    const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, "");

    if (cleanedWord.length > longestWordLength) {
      longestWordLength = cleanedWord.length;
      longestWord = cleanedWord;

      
    }
  }
console.log(longestWord);
  return longestWordLength ;
}

// Example usage:
const inputSentence = "The quick browns fox jumps over the lazy dog.";
const longestWordLength = findLongestWordLength(inputSentence);
console.log("Length of the longest word:", longestWordLength);
