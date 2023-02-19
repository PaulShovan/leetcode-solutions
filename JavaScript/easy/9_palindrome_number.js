/*
Given an integer x, return true if x is a 
palindrome, and false otherwise.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  const reversed = x.toString().split('').reverse().join('');
  return Number(reversed) === x;
};

/*
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
*/
console.log(isPalindrome(121));

/*
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, 
it becomes 121-. Therefore it is not a palindrome.
*/
console.log(isPalindrome(-121));

/*
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/
console.log(isPalindrome(10));
