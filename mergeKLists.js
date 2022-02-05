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

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

    if(!lists.length) return null;    

    const merge = (l1, l2) => {

        if(!l1) return l2;

        if(!l2) return l1;

        let head = null, node = null;

        if(l1.val < l2.val) {
            node = l1;
            head = node;
            l1 = l1.next;
        } else {
            node = l2;
            head = node;
            l2 = l2.next;
        }

        while(l1 && l2) {

            if(l1.val < l2.val) {
                node.next = l1;
                node = node.next;
                l1 = l1.next;
            } else {
                node.next = l2;
                node = node.next;
                l2 = l2.next;
            }
        }

        node.next = l1 ? l1 : l2;

        return head;
    }

    while(lists.length > 1) {

        const nextLists = [];

        for(let i = 0; i < lists.length; i += 2) {
            nextLists.push(merge(lists[i], lists[i + 1] || null));
        }

        lists = nextLists;
    }

    return lists[0];
};
