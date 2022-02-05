/*
# 23. Merge k Sorted Lists

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

 

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []
 

Constraints:

k == lists.length
0 <= k <= 10^4
0 <= lists[i].length <= 500
-10^4 <= lists[i][j] <= 10^4
lists[i] is sorted in ascending order.
The sum of lists[i].length won't exceed 10^4.

*/


const {ListNode, arrayToList, printList} = require("./listUtil");
const { MinPriorityQueue }  = require('@datastructures-js/priority-queue');

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    
    const queue = new MinPriorityQueue();

    for(const list of lists) {

        if(list !== null) queue.enqueue(list, list.val);
    }

    let head = null, node = null;

    while(queue.size()) {

        const {element : list} = queue.dequeue(); 

        if(!head) {
            node = list;
            head = node;
        } else {
            node.next = list;
            node = node.next;
        }

        if(list.next) {
            queue.enqueue(list.next, list.next.val);
        }
    }

    return head;    
};
