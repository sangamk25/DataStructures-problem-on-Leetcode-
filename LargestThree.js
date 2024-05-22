function LargestThreeElement(arr, n) {
  var result = [];

  let firstLargest = -Infinity;

  let secondLargest = -Infinity;

  let thirdLargest = -Infinity;

  for (const element of arr) {

    if (element > firstLargest) {
      thirdLargest = secondLargest;
      secondLargest = firstLargest;
      firstLargest = element;
      
    } else if (element > secondLargest && element !== firstLargest) {
      thirdLargest = secondLargest;
      secondLargest = element;
    } else if (element > thirdLargest && element !== secondLargest) {
      thirdLargest = element;
    }
  }
  result.push(firstLargest);
  result.push(secondLargest);
  result.push(thirdLargest);

  return result;
}

const arr = [12, 10, 4, 3, 50, 23, 90];

const n = arr.length;

const result = LargestThreeElement(arr, n);

console.log(result);
