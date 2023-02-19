/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const len = nums.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

/* Input: nums = [2,7,11,15], target = 9
   Output: [0,1]
   Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/
console.log(twoSum([2, 7, 11, 15], 9));

/* Input: nums = [3,2,4], target = 6
   Output: [1,2]
   Explanation: Because nums[1] + nums[2] == 6, we return [1,2].
*/
console.log(twoSum([3, 2, 4], 6));

/* Input: nums = [3,3], target = 6
   Output: [0,1]
*/
console.log(twoSum([3, 3], 6));
