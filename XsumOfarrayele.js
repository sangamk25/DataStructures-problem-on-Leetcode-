function sumArrayElements(arr) {

  // Use the reduce method to accumulate the sum of all elements
  
  const sum = arr.reduce(
    (accumulator, currentElement) => accumulator + currentElement,
    0
  );
  return sum;
}


const arr = [1, 2, 3, 4, 5];
const result = sumArrayElements(arr);
console.log("Sum of array elements:", result);
