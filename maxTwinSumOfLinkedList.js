/*
#2130. Maximum Twin Sum of a Linked List

In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.

For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
The twin sum is defined as the sum of a node and its twin.

Given the head of a linked list with even length, return the maximum twin sum of the linked list.

 

Example 1:


Input: head = [5,4,2,1]
Output: 6
Explanation:
Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.
There are no other nodes with twins in the linked list.
Thus, the maximum twin sum of the linked list is 6. 
Example 2:


Input: head = [4,2,2,3]
Output: 7
Explanation:
The nodes with twins present in this linked list are:
- Node 0 is the twin of node 3 having a twin sum of 4 + 3 = 7.
- Node 1 is the twin of node 2 having a twin sum of 2 + 2 = 4.
Thus, the maximum twin sum of the linked list is max(7, 4) = 7. 
Example 3:


Input: head = [1,100000]
Output: 100001
Explanation:
There is only one node with a twin in the linked list having twin sum of 1 + 100000 = 100001.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 const {ListNode, arrayToList, printList} = require("./listUtil");

/**
 * @param {ListNode} head
 * @return {number}
 */
 var pairSum = function(head) {
    
    const p = printList;

    const copy = new ListNode(head.val);
    let node1 = copy, node2 = head.next, len = 1;

    while(node2) {
        node1.next = new ListNode(node2.val);
        node1 = node1.next;
        node2 = node2.next;
        len++;
    }

    const f = (node) => {
      
    if(!node || !node.next) return node;
        
        const rev = f(node.next);
        node.next.next = node;
        node.next = null;

        return rev;
    };
    
    let rev = f(copy);
    
    let max = 0;
    len = len / 2;
    
    while(len) {
        max = Math.max(max, head.val + rev.val);
        head = head.next;
        rev = rev.next;
        len--;
    }
    
    return max;
};

let head = [4,2,2,3];
//head = [5,4,2,1];
//head = [1,100000];

const list = arrayToList(head);

console.log(pairSum(list));