/*
#147. Insertion Sort List

Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.

The steps of the insertion sort algorithm:

Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
It repeats until no input elements remain.
The following is a graphical example of the insertion sort algorithm. The partially sorted list (black) initially contains only the first element in the list. One element (red) is removed from the input data and inserted in-place into the sorted list with each iteration.


 

Example 1:


Input: head = [4,2,1,3]
Output: [1,2,3,4]
Example 2:


Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
 

Constraints:

The number of nodes in the list is in the range [1, 5000].
-5000 <= Node.val <= 5000

*/


const { nextTick } = require("process");
const {ListNode, arrayToList, printList} = require("./listUtil");

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 function insertionSortList(head) {
    var before = { val: -Number.MAX_VALUE, next: null };
    
    while (head) {
        var prev = before;
        
        // find prev
        while (prev.next && prev.next.val < head.val) {
            prev = prev.next;
        }
        
        var next = head.next;
        head.next = prev.next;
        prev.next = head;
        head = next;
    }
    
    return before.next;
}

let head = [4,2,1,3];

const list = arrayToList(head);

console.log(printList(insertionSortList(list)));