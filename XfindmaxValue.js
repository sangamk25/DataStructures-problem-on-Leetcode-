function findMaxValue(arr) {
  if (arr.length === 0) {
    return undefined; 
  }

  let max = arr[0]; 

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

const arr = [2, 7, 1, 9, 3, 6];
const result = findMaxValue(arr);
console.log("Maximum value:", result);
