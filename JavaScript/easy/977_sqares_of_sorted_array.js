/*
Given an integer array nums sorted in non-decreasing order, 
return an array of the squares of each number sorted in non-decreasing order.
*/

var sortedSquares = function (arr) {
  if (arr.length <= 1) {
    return [arr[0] * arr[0]];
  }
  const half = arr.length / 2;

  const left = arr.splice(0, half); // the first half of the array
  const right = arr;
  return merge(sortedSquares(left), sortedSquares(right));
};

var merge = function (left, right) {
  let sortedArr = []; // the sorted elements will go here

  while (left.length && right.length) {
    // insert the smallest element to the sortedArr
    if (left[0] < right[0]) {
      const itemLeft = left.shift();
      sortedArr.push(itemLeft);
      //sortedArr.push(itemLeft*itemLeft);
    } else {
      const itemRight = right.shift();
      sortedArr.push(itemRight);
    }
  }

  // use spread operator and create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right];
};

/*
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
*/
console.log(sortedSquares([-4, -1, 0, 3, 10]));

/*
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
*/
console.log(sortedSquares([-7, -3, 2, 3, 11]));
