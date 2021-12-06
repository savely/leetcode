/*
2096. Step-By-Step Directions From a Binary Tree Node to Another

You are given the root of a binary tree with n nodes. Each node is uniquely assigned a value from 1 to n. You are also given an integer startValue representing the value of the start node s, and a different integer destValue representing the value of the destination node t.

Find the shortest path starting from node s and ending at node t. Generate step-by-step directions of such path as a string consisting of only the uppercase letters 'L', 'R', and 'U'. Each letter indicates a specific direction:

'L' means to go from a node to its left child node.
'R' means to go from a node to its right child node.
'U' means to go from a node to its parent node.
Return the step-by-step directions of the shortest path from node s to node t.

 

Example 1:


Input: root = [5,1,2,3,null,6,4], startValue = 3, destValue = 6
Output: "UURL"
Explanation: The shortest path is: 3 → 1 → 5 → 2 → 6.
Example 2:


Input: root = [2,1], startValue = 2, destValue = 1
Output: "L"
Explanation: The shortest path is: 2 → 1.

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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
 var getDirections = function(root, startValue, destValue) {


    const lca = (node) => {

        if(!node) return null;

        if(node.val === startValue || node.val === destValue) return node;

        const left = lca(node.left);
        const right = lca(node.right);

        return (left && right) ? node : left || right;
    };
 
    const f = (node, path = "") => {

        if(!node) return [null, ''];

        if(node.val === startValue || node.val === destValue) return [node, path];

        const [leftNode, leftPath] = f(node.left, path + "L");
        
        if(leftNode) return [leftNode, leftPath];
        return f(node.right, path + "R");
    }

    const ancestor = lca(root);

    const [leftNode, leftPath] = f(ancestor.left);
    const [rightNode, rightPath] = f(ancestor.right);

    if(ancestor.val === startValue) {
        return leftNode ? "L" + leftPath : 'R' + rightPath;
    }

    if(ancestor.val === destValue) {
        const len =  leftNode ? leftPath.length : rightPath.length;

        return "U".repeat(len + 1);
    }

    if(leftNode.val === startValue) {

        return "U".repeat(leftPath.length + 1) + "R" + rightPath;
    }

    return "U".repeat(rightPath.length + 1) + "L" + leftPath;
};
