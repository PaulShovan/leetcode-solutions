/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else if (nums[mid] > target) {
      end = mid - 1;
    }
  }
  return start;
};

/*
Input: nums = [1,3,5,6], target = 5
Output: 2
*/
console.log(searchInsert([1, 3, 5, 6], 5));

/*
Input: nums = [1,3,5,6], target = 2
Output: 1
*/
console.log(searchInsert([1, 3, 5, 6], 2));

/*
Input: nums = [1,3,5,6], target = 7
Output: 4
*/
console.log(searchInsert([1, 3, 5, 6], 7));
