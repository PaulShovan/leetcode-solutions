/*
Given an array of strings strs, group the anagrams together.
You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  const first = s.split('');
  const second = t.split('');
  const length = first.length;
  const foundArray = [];
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (first[i] === second[j]) {
        second[j] = 'true';
        foundArray.push(true);
        break;
      }
    }
  }
  return foundArray.length === length;
};
var groupAnagrams = function (strs) {
  const length = strs.length;
  const resultArray = [];
  for (let i = 0; i < length; i++) {
    const arr = [strs[i]];
    if (strs[i] === '##%%') continue;
    for (let j = i + 1; j < length; j++) {
      if (strs[j] === '##%%') continue;
      if (isAnagram(strs[i], strs[j])) {
        arr.push(strs[j]);
        strs[j] = '##%%';
      }
    }
    resultArray.push(arr);
    strs[i] = '##%%';
  }
  return resultArray;
};

/*
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));

/*
Input: strs = [""]
Output: [[""]]
*/
console.log(groupAnagrams(['']));

/*
Input: strs = ["a"]
Output: [["a"]]
*/

console.log(groupAnagrams(['a']));
