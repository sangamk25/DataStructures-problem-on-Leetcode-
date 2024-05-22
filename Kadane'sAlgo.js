var maxSubArray = function (nums) {
  let Prefix_Sum = 0;
  let Max_Sum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    Prefix_Sum += nums[i];
    Max_Sum = Math.max(Prefix_Sum, Max_Sum);

    if (Prefix_Sum < 0) {
      Prefix_Sum = 0;
    }
  }

  return Max_Sum;
};


const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
 const result = maxSubArray(nums);
console.log(result); 
