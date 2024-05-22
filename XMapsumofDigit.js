function sumOfDigitsArray(numbers) {

    //logic arrow function
   const sumOfDigits = (num) => {
  
    let sum =0;

    while( num > 0){
       let n = num%10;
        sum = sum + n;
        num = Math.floor(num/10);
    } 
      return sum;

   };

// Calling the logical arrow function using map
    const result = numbers.map((num) => sumOfDigits(num));

    return result;

}


const numbers = [123, 456, 789];
const result = sumOfDigitsArray(numbers);
console.log("Sum of digits for each number:", result);



// line number 15:
////In the main function sumOfDigitsArray,
//  we use the map method on the numbers array. For each num in the array, 
//  we call the sumOfDigits function to calculate the sum of digits, 
//  and the map method collects these results into a new array.
// javascript
