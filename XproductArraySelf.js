function productExceptSelf(nums) {

let n = nums.length;
const result = new Array(n);

let leftProduct = 1;
for (let i=0;i<n;i++)  {
    result[i] = leftProduct;
    leftProduct = leftProduct* nums[i];

}

let rightProduct = 1;
for (let i = n - 1; i >= 0; i--) {
  result[i] *= rightProduct;
  rightProduct *= nums[i];
}

return result;
  
}

const nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log("Product except self:", result);


//   Dry run of the each line of code 

// const leftProduct = 1;
// const result = [];



// // i = 0
// result[0] = 1;   // result = [1]
// leftProduct *= nums[0];  // leftProduct = 1

// // i = 1
// result[1] = 1;   // result = [1, 1]
// leftProduct *= nums[1];  // leftProduct = 2

// // i = 2
// result[2] = 2;   // result = [1, 1, 2]
// leftProduct *= nums[2];  // leftProduct = 6

// // i = 3
// result[3] = 6;   // result = [1, 1, 2, 6]
// leftProduct *= nums[3];  // leftProduct = 24



// const rightProduct = 1;


// // i = 3
// result[3] *= rightProduct;  // result = [1, 1, 2, 6]
// rightProduct *= nums[3];    // rightProduct = 4

// // i = 2
// result[2] *= rightProduct;  // result = [1, 1, 8, 6]
// rightProduct *= nums[2];    // rightProduct = 12

// // i = 1
// result[1] *= rightProduct;  // result = [1, 12, 8, 6]
// rightProduct *= nums[1];    // rightProduct = 24

// // i = 0
// result[0] *= rightProduct;  // result = [24, 12, 8, 6]
// rightProduct *= nums[0];    // rightProduct = 24
