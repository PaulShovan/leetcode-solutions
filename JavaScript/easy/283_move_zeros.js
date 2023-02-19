/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let zeroIndex = 0;
  let nonZeroIndex = 1;
  const len = nums.length;
  while (nonZeroIndex < len) {
    if (nums[zeroIndex] !== 0) {
      zeroIndex++;
    }
    if (nums[nonZeroIndex] === 0) {
      nonZeroIndex++;
    } else if (nums[nonZeroIndex] !== 0 && nums[zeroIndex] === 0) {
      const temp = nums[zeroIndex];
      nums[zeroIndex] = nums[nonZeroIndex];
      nums[nonZeroIndex] = temp;
      nonZeroIndex++;
      zeroIndex++;
    } else {
      nonZeroIndex++;
    }
  }
};

/*
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/
console.log(moveZeroes([0, 1, 0, 3, 12]));

/*
Input: nums = [0]
Output: [0]
*/
console.log(moveZeroes([0]));
