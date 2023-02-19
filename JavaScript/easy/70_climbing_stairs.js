/*
  You are climbing a staircase. It takes n steps to reach the top.
  Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */

/**
 * @param {number} n
 * @return {number}
 */
function fibonacci(num, memo) {
  memo = memo || {};
  if (memo[num]) return memo[num];
  if (num < 4) {
    return num;
  } else {
    return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
  }
}
var climbStairs = function (n) {
  return fibonacci(n);
};

/*
  Input: n = 2
  Output: 2
 */
console.log(climbStairs(2));

/*
  Input: n = 3
  Output: 3
 */
console.log(climbStairs(3));
