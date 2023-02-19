/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word 
or phrase, typically using all the original letters exactly once.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const first = s.split('');
  const second = t.split('');
  const length = first.length;
  const foundArray = [];
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      console.log({ f: first[i], s: second[j], foundArray });
      if (first[i] === second[j]) {
        second[j] = true;
        foundArray.push(true);
        break;
      }
    }
  }
  return foundArray.length === length;
}

/*
Input: s = "anagram", t = "nagaram"
Output: true 
*/
console.log(isAnagram('anagram', 'nagaram'));

/*
Input: s = "rat", t = "car"
Output: false
*/
console.log(isAnagram('rat', 'car'));
