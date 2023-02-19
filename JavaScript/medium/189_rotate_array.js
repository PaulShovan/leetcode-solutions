/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (nums.length === 1) {
    return nums;
  }
  function reverseArray(i, j) {
    while (i <= j) {
      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
  }
  const len = nums.length;
  k = k % len;
  reverseArray(0, len - 1);
  reverseArray(0, k - 1);
  reverseArray(k, len - 1);
};

/* 
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

/*
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/
console.log(rotate([-1, -100, 3, 99], 2));
