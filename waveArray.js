function convertToWave(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i += 2) {
    
    if (i < n - 1 && arr[i] < arr[i + 1]) {

      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];

    }
  }
}

const arr1 = [1, 2, 3, 4, 5];
convertToWave(arr1);
console.log(arr1);

const arr2 = [2, 4, 7, 8, 9, 10];
convertToWave(arr2);
console.log(arr2);
