/*
#725. Split Linked List in Parts

Given the head of a singly linked list and an integer k, split the linked list 
into k consecutive linked list parts.

The length of each part should be as equal as possible: no two parts should have a size 
differing by more than one. This may lead to some parts being null.

The parts should be in the order of occurrence in the input list, 
and parts occurring earlier should always have a size greater than or equal to 
parts occurring later.

Return an array of the k parts.

 

Example 1:

Input: head = [1,2,3], k = 5
Output: [[1],[2],[3],[],[]]
Explanation:
The first element output[0] has output[0].val = 1, output[0].next = null.
The last element output[4] is null, but its string representation as a ListNode is [].

Example 2:

Input: head = [1,2,3,4,5,6,7,8,9,10], k = 3
Output: [[1,2,3,4],[5,6,7],[8,9,10]]
Explanation:
The input has been split into consecutive parts with size difference at most 1, 
and earlier parts are a larger size than the later parts.

 

Constraints:

    The number of nodes in the list is in the range [0, 1000].
    0 <= Node.val <= 1000
    1 <= k <= 50
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
 * @param {number} k
 * @return {ListNode[]}
 */
 var splitListToParts = function(head, k) {

    const stack = [];

    while(head) {
        const node = head;
        stack.push(node);
        head = head.next;
        node.next = null;
    }
     

    if(k > stack.length) {

        while(stack.length < k) stack.push(null);

        return stack;
    }

    let mod = stack.length % k;

    const partSize = (stack.length - mod) / k, res = [];

    while(stack.length) {

        const currHead = stack.shift();
        let node = currHead;

        let i = partSize - 1;

        if(mod > 0) {
            i++;
            mod--;
        }

        while(node && i > 0) {
            node.next = stack.shift();
            node = node.next;
            i--;
        }

        res.push(currHead);
    }

    return res;  
};