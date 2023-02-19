/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length <= 1) return true;
  let [left, right] = [0, s.length - 1];
  while (left < right) {
    if (!/[a-zA-Z0-9]/.test(s[left])) {
      left++;
    } else if (!/[a-zA-Z0-9]/.test(s[right])) {
      right--;
    } else {
      if (s[left].toLowerCase() != s[right].toLowerCase()) {
        return false;
      }
      left++;
      right--;
    }
  }
  return true;
};

/*
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
*/
console.log(isPalindrome('A man, a plan, a canal: Panama'));

/*
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
*/
console.log(isPalindrome('race a car'));

/*
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/
console.log(isPalindrome(' '));
