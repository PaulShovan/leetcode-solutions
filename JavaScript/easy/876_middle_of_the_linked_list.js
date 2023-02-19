/*
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.
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
 * @return {ListNode}
 */
var middleNode = function (head) {
  const nodes = [head];
  let currentNode = head.next;
  while (currentNode) {
    nodes.push(currentNode);
    currentNode = currentNode.next;
  }
  const mid = Math.ceil((nodes.length - 1) / 2);
  return nodes[mid];
};

/*
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
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
console.log(middleNode(head1));

/*
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
*/
const head2 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: { val: 5, next: { val: 6, next: null } }
      }
    }
  }
};
console.log(middleNode(head2));
