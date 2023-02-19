/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (n === 0) {
    return head;
  }
  let currentNode = head;
  let count = 0;
  while (currentNode) {
    currentNode = currentNode.next;
    count++;
  }
  let i = count - n;
  if (i === 0) {
    return head.next;
  }
  currentNode = head;
  let nextNode = head.next;
  while (i > 1 && nextNode) {
    currentNode = nextNode;
    nextNode = nextNode.next;
    i--;
  }
  currentNode.next = nextNode && nextNode.next;
  return head;
};

/*
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
*/
const head1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: { val: 5, next: null }
      }
    }
  }
};
console.log(removeNthFromEnd(head1));

/*
Input: head = [1], n = 1
Output: []
*/
const head2 = {
  val: 1,
  next: null
};
console.log(removeNthFromEnd(head2));

/*
Input: head = [1,2], n = 1
Output: [1]
*/
const head3 = {
  val: 1,
  next: {
    val: 2,
    next: null
  }
};
console.log(removeNthFromEnd(head3));
