/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
*/

/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function (s) {
  const words = s.split(' ');
  const len = words.length;
  for (let i = 0; i < len; i++) {
    words[i] = reverseString(words[i]);
  }
  return words.join(' ');
};

var reverseString = function (s) {
  const arr = s.split('');
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    if (arr[start] !== arr[end]) {
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
    }
    start++;
    end--;
  }
  return arr.join('');
};

/*
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
*/
console.log(reverseWords("Let's take LeetCode contest"));

/*
Input: s = "God Ding"
Output: "doG gniD"
*/
console.log(reverseWords('God Ding'));
