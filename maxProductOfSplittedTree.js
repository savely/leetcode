/*
#1339. Maximum Product of Splitted Binary Tree

Given the root of a binary tree, split the binary tree into two subtrees by removing one edge such that the product of the sums of the subtrees is maximized.

Return the maximum product of the sums of the two subtrees. Since the answer may be too large, return it modulo 109 + 7.

Note that you need to maximize the answer before taking the mod and not after taking it.

 

Example 1:


Input: root = [1,2,3,4,5,6]
Output: 110
Explanation: Remove the red edge and get 2 binary trees with sum 11 and 10. Their product is 110 (11*10)
Example 2:


Input: root = [1,null,2,3,4,null,null,5,6]
Output: 90
Explanation: Remove the red edge and get 2 binary trees with sum 15 and 6.Their product is 90 (15*6)
Example 3:

Input: root = [2,3,9,10,7,8,6,5,4,11,1]
Output: 1025
Example 4:

Input: root = [1,1]
Output: 1
 

Constraints:

The number of nodes in the tree is in the range [2, 5 * 104].
1 <= Node.val <= 104

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 const{ TreeNode, fromArray, toArray }  = require('./treeUtil');
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxProduct = function(root) {

    const sumTree = (rootNode) => {

        if(!rootNode) return 0;

        rootNode.val += sumTree(rootNode.left) + sumTree(rootNode.right);

        return rootNode.val;
    };

    const total = sumTree(root);

    let max = 0;

    const maxProduct = (rootNode) => {

        if (!rootNode) return;

        max = Math.max(max, rootNode.val * (total - rootNode.val));

        maxProduct(rootNode.left);
        maxProduct(rootNode.right);
    };

    maxProduct(root);

    return max % (10 ** 9 + 7);
};

let root = [1,2,3,4,5,6];
root = [1,null,2,3,4,null,null,5,6];
root = [2,3,9,10,7,8,6,5,4,11,1];
root = [1,1];
root = [43,71,611,287,90,319,null,766,533,null,565,191,844,405,912,1,546,334,780,109,232,997,336,962,null,162,148,562,463,399,238,null,534,156,null,494,null,834,18,null,null,null,null,256,910,null,552,null,null,956,545,859,163,589,454,null,119,null,null,null,null,null,null,null,null,803,188,776,null,407,429,null,850,287,967,299,51,157,903,null,797,616,776,null,null,83,null,null,487,null,null,null,965,null,509,null,null,null,null,null,null,461,795,null,null,null,null,987,503,691,772,399,738,944,822,null,874,null,null,null,null,858,null,null,null,null,null,null,null,null,null,null,917,null,null,621,370,null,null,836,null,null,null,null,null,null,411,null,null,null,null,463,411,149,null,417,69,null,null,null,614,942,283,30,675,null,44,null,null,null,null,139,173,823,null,381,null,null,851,null,null,null,586,null,null,null,null,826,338,null,null,null,247,null,null,null,null,null,846];

console.log(maxProduct(fromArray(root)));