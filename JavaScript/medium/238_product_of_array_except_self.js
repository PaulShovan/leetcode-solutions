/*
Given an integer array nums, return an array answer such that answer[i] 
is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  const result = [];
  let multipliedNum = 1;
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    result[i] = multipliedNum;
    multipliedNum *= nums[i];
  }
  multipliedNum = 1;
  for (let j = length - 1; j >= 0; j--) {
    result[j] = multipliedNum * result[j];
    multipliedNum *= nums[j];
  }
  return result;
}

/*
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
*/
console.log(productExceptSelf([1, 2, 3, 4]));

/*
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
