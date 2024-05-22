function twoSum(nums, target) {
  const ReqIndex = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const componenet = target - currentNum;

    if (ReqIndex[componenet] !== undefined) {
      return [ReqIndex[componenet], i];
    }

    ReqIndex[currentNum] = i;
  }

  return null;
}
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);

if (result) {
  console.log("Two numbers at indices:", result);
} else {
  console.log("No solution found.");
}
