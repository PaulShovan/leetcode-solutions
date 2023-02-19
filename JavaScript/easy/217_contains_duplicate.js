/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

/*
Input: nums = [1,2,3,1]
Output: true
*/
console.log(containsDuplicate([1, 2, 3, 1]));

/*
Input: nums = [1,2,3,4]
Output: false
*/
console.log(containsDuplicate([1, 2, 3, 4]));

/*
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
