/*
Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x === 0) return 0;
  const reversedVal = x
    .toString()
    .split('')
    .reverse()
    .join('')
    .replace('-', '');
  const num = x < 0 ? Number(reversedVal) * -1 : Number(reversedVal);
  if (num >= Math.pow(2, 31) - 1 || num < -1 * Math.pow(2, 31)) return 0;
  return num;
};

/*
Input: x = 123
Output: 321
*/
console.log(reverse(123));

/*
Input: x = -123
Output: -321
*/
console.log(reverse(-123));

/*
Input: x = 120
Output: 21
*/
console.log(reverse(120));
