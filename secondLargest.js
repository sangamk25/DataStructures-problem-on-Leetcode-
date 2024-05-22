function findSecondLargestDistinct(arr) {
  let n = arr.length;

  if (n < 2) {
    return -1; // Not enough distinct elements
  }

  let firstMax = arr[0];
  let secondMax = arr[0];

  for (let i = 1; i < n; i++) {
    if (arr[i] > firstMax) {
      secondMax = firstMax;
      firstMax = arr[i];
    } else if (arr[i] < firstMax && arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }

  if (firstMax === secondMax) {
    return -1; // All elements in the array are the same
  }

  return secondMax;
}

// Example usage:
const arr = [12, 35, 1, 10, 34, 1];
const secondLargest = findSecondLargestDistinct(arr);

if (secondLargest !== -1) {
  console.log("Second largest distinct element: " + secondLargest);
} else {
  console.log("There is no second largest distinct element in the array.");
}


