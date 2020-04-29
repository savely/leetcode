/*
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
/**
* @param {TreeNode} root
* @return {number}
*/
var maxPathSum = function(root) {
   
    if(root === null) return 0

    if(root.left === null && root.right === null) return Math.max(root.val, 0)

    const maxSumLeft  = maxPathSum(root.left)
    const maxSumRight = maxPathSum(root.right)
    const value       = root.val

    return Math.max(maxSumLeft, maxSumLeft+value, value, maxSumLeft + value + maxSumRight, maxSumRight + value, maxSumRight)
};