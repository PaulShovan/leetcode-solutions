/**
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral.
*/

/**
 * @param {number} num
 * @return {string}
 */
function intToRoman(num) {
  if (num === 1) {
    return 'I';
  }
  const baseValueNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const baseValueRoman = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I'
  ];

  const len = baseValueNum.length;
  let updatedNum = num;
  const roman = [];

  for (let i = 0; i < len; ++i) {
    const div = Math.floor(updatedNum / baseValueNum[i]);
    if (div) {
      updatedNum = updatedNum % baseValueNum[i];
      for (let j = 0; j < div; j++) {
        roman.push(baseValueRoman[i]);
      }
    } else {
      continue;
    }
  }
  return roman.join('');
}

/*
Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.
*/
console.log(intToRoman(3));

/*
Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
*/
console.log(intToRoman(58));

/*
Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/
console.log(intToRoman(1994));
