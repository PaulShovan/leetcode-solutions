/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const num = s
    .replaceAll('IV', '4,')
    .replaceAll('IX', '9,')
    .replaceAll('XL', '40,')
    .replaceAll('XC', '90,')
    .replaceAll('CD', '400,')
    .replaceAll('CM', '900,')
    .replaceAll('I', '1,')
    .replaceAll('V', '5,')
    .replaceAll('X', '10,')
    .replaceAll('L', '50,')
    .replaceAll('C', '100,')
    .replaceAll('D', '500,')
    .replaceAll('M', '1000,')
    .split(',')
    .reduce((a, b) => Number(a) + Number(b));
  return num;
};

/*
Input: s = "III"
Output: 3
Explanation: III = 3.
*/
console.log(romanToInt('III'));

/*
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
*/
console.log(romanToInt('LVIII'));

/*
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/
console.log(romanToInt('MCMXCIV'));
