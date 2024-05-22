function reverseArray(arr) {
  const reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(arr);
console.log("Reversed array:", reversedArray);
