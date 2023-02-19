/*
Write an algorithm to determine if a number n is happy.
A happy number is a number defined by the following process:
Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const numArray = getNumArray(n);
  if (numArray.length === 1) return numArray[0] === 1 || numArray[0] === 7;
  const result = getSqaredProduct(numArray);
  return isHappy(result);
};

const getSqaredProduct = (n) => {
  let num = 0;
  for (const val of n) {
    num = num + val * val;
  }
  return num;
};
const getNumArray = (n) => {
  return n
    .toString()
    .split('')
    .map((str) => +str);
};

/*
Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/
console.log(isHappy(19));

/*
Input: n = 2
Output: false
*/
console.log(isHappy(2));
