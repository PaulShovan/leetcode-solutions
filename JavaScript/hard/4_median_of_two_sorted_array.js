/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, 
return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const result = [];
  while (nums1.length || nums2.length) {
    if (!nums1.length) {
      result.push(nums2.shift());
    } else if (!nums2.length) {
      result.push(nums1.shift());
    } else if (nums1[0] === nums2[0]) {
      result.push(nums1.shift(), nums2.shift());
    } else if (nums1[0] < nums2[0]) {
      result.push(nums1.shift());
    } else if (nums1[0] > nums2[0]) {
      result.push(nums2.shift());
    }
  }
  const len = result.length;
  const mid = Math.floor(len / 2);
  if (len % 2 === 0) {
    return (result[mid] + result[mid - 1]) / 2;
  }
  return result[mid];
};

/*
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
*/
console.log(findMedianSortedArrays([1, 3], [2]));

/*
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
*/
console.log(findMedianSortedArrays([1, 2], [3, 4]));
