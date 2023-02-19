/*
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let l1currentVal = l1;
  let l2currentVal = l2;
  let result = {};
  let carry = 0;
  let currentRes = result;
  while (l1currentVal || l2currentVal) {
    let num = 0;
    if (l1currentVal && l2currentVal) {
      num = l1currentVal.val + l2currentVal.val + carry;
    } else if (l1currentVal) {
      num = l1currentVal.val + carry;
    } else if (l2currentVal) {
      num = l2currentVal.val + carry;
    }
    carry = num > 9 ? Math.floor(num / 10) : 0;
    if (Object.keys(result).length === 0) {
      result = {
        val: num > 9 ? num % 10 : num,
        next: null
      };
      currentRes = result;
    } else {
      currentRes.next = {
        val: num > 9 ? num % 10 : num,
        next: null
      };
      currentRes = currentRes.next;
    }

    l1currentVal = l1currentVal && l1currentVal.next;
    l2currentVal = l2currentVal && l2currentVal.next;
  }
  if (carry) {
    currentRes.next = {
      val: carry,
      next: null
    };
  }
  return result;
};

/*
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
*/
const l1_1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null
    }
  }
};

const l2_1 = {
  val: 7,
  next: {
    val: 0,
    next: {
      val: 8,
      next: null
    }
  }
};

console.log(addTwoNumbers(l1_1, l2_1));

/*
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/
const l1_2 = {
  val: 9,
  next: {
    val: 9,
    next: {
      val: 9,
      next: {
        val: 9,
        next: { val: 9, next: { val: 9, next: { val: 9, next: null } } }
      }
    }
  }
};

const l2_2 = {
  val: 9,
  next: {
    val: 9,
    next: {
      val: 9,
      next: {
        val: 9,
        next: null
      }
    }
  }
};

console.log(addTwoNumbers(l1_2, l2_2));
