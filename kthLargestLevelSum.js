/*
#2583. Kth Largest Sum in a Binary Tree

You are given the root of a binary tree and a positive integer k.

The level sum in the tree is the sum of the values of the nodes that are on the same level.

Return the kth largest level sum in the tree (not necessarily distinct). If there are fewer than k levels in the tree, return -1.

Note that two nodes are on the same level if they have the same distance from the root.

 

Example 1:

Input: root = [5,8,9,2,1,3,7,4,6], k = 2
Output: 13
Explanation: The level sums are the following:
- Level 1: 5.
- Level 2: 8 + 9 = 17.
- Level 3: 2 + 1 + 3 + 7 = 13.
- Level 4: 4 + 6 = 10.
The 2nd largest level sum is 13.

Example 2:

Input: root = [1,2,null,3], k = 1
Output: 3
Explanation: The largest level sum is 3.

 

Constraints:

    The number of nodes in the tree is n.
    2 <= n <= 105
    1 <= Node.val <= 106
    1 <= k <= n

*/

const { PriorityQueue } = require('@datastructures-js/priority-queue');
const {TreeNode, fromArray} =  require('./treeUtil');

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {


    const minQueue = new PriorityQueue({compare : (num1, num2) => num1 - num2});

    let queue = [root];

    while(queue.length) {

        const next = [];

        let levelSum = 0;

        for(let i = 0; i < queue.length; i++) {

            levelSum += queue[i].val;

            if(queue[i].left) next.push(queue[i].left);
            if(queue[i].right) next.push(queue[i].right);
        }

        if(minQueue.size()  < k) {
            minQueue.enqueue(levelSum);
        } else if(minQueue.size() === k && levelSum > minQueue.front()) {
            minQueue.dequeue();
            minQueue.enqueue(levelSum);
        }

        queue = next;
    }

    if(minQueue.size() < k) return -1;

    while(minQueue.size > 1) minQueue.dequeue();
    
    return minQueue.front();
};

let root = [5,8,9,2,1,3,7,4,6], k = 2;
root = [1,2,null,3], k = 1;

const tree = fromArray(root);

console.log(kthLargestLevelSum(tree, k));