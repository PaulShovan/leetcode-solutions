/*
There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).

Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].

Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.

You must decrease the overall operation steps as much as possible.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */

var search = function (nums, target) {
  if (nums.length === 0) {
    return false;
  }
  if (nums.length === 1) {
    return nums[0] === target;
  }
  let end = nums.length;
  let mid = Math.ceil(end / 2);
  if (nums[mid] === target) {
    return true;
  } else if (nums[0] < nums[mid]) {
    //left part is sorted
    if (target >= nums[0] && target < nums[mid]) {
      return search(nums.slice(0, mid), target);
    } else {
      return search(nums.slice(mid, end), target);
    }
  } else if (nums[0] > nums[mid]) {
    if (target <= nums[end - 1] && target > nums[mid]) {
      return search(nums.slice(mid, end), target);
    } else {
      return search(nums.slice(0, mid), target);
    }
  } else {
    return search(nums.slice(1, end), target);
  }
};

/*
Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
*/
console.log(search([2, 5, 6, 0, 0, 1, 2], 0));

/*
Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
*/
console.log(search([2, 5, 6, 0, 0, 1, 2], 3));
