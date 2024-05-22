function removeDuplicates(nums, n) {
  let modifiedArray = [];

  for (let i = 0; i < n; i++) 

  {
    if (nums[i] === nums[i + 1]) 
    {
      modifiedArray.push(nums[i]);
    }
  }
}

const nums = [1, 1, 2, 2, 2, 3, 4, 4, 5];

const n = nums.length;

const length = removeDuplicates(nums, n);

console.log("Modified Array:",nums.slice(0,length));
console.log("Length of the modified array:", length);





