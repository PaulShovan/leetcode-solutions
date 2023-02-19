/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const open = { '(': true, '{': true, '[': true };
  const close = { ')': '(', '}': '{', ']': '[' };
  const bracketList = [];
  const len = s.length;
  for (let i = 0; i < len; ++i) {
    if (open[s[i]]) {
      bracketList.push(s[i]);
    } else if (
      bracketList.length === 0 ||
      bracketList[bracketList.length - 1] !== close[s[i]]
    ) {
      return false;
    } else {
      bracketList.pop();
    }
  }
  return bracketList.length === 0;
};

/*
Input: s = "()"
Output: true
*/
console.log(isValid('()'));

/*
Input: s = "()[]{}"
Output: true
*/
console.log(isValid('()[]{}'));

/*
Input: s = "(]"
Output: false
*/
console.log(isValid('(]'));
