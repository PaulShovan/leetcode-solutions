/* 
Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without repeating characters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const word = s.split('');
  let charSet = new Map();
  const len = word.length;
  let count = 0;
  let i = 0;
  while (i < len) {
    if (charSet.get(word[i]) === undefined) {
      charSet.set(word[i], i);
      i++;
    } else {
      count = charSet.size > count ? charSet.size : count;
      i = charSet.get(word[i]) + 1;
      charSet = new Map();
    }
  }
  return charSet.size > count ? charSet.size : count;
};

/*
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/
console.log(lengthOfLongestSubstring('abcabcbb'));

/*
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
*/
console.log(lengthOfLongestSubstring('bbbbb'));

/*
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
console.log(lengthOfLongestSubstring('pwwkew'));
