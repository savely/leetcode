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
   
    let max = -Infinity

    const nodeSumReq = function(node, sum) {
       
     if(node === null) return -Infinity
 
     sum += node.val
 
     const maxSumLeft = node.left === null ? -Infinity : nodeSumReq(node.left, sum)
     const maxSumRight = node.right === null ? -Infinity : nodeSumReq(node.right, sum)
 
     const ret = Math.max(sum, maxSumLeft, maxSumRight)
     const maxLeft = maxSumLeft - sum
     const maxRight = maxSumRight - sum
 
     const maxNodePath = Math.max(maxLeft + node.val, maxLeft + node.val, maxLeft + node.val + maxRight, node.val + maxRight)
     max = Math.max(max, ret, maxLeft, maxRight, maxNodePath)
       return ret
    }
    nodeSumReq(root, 0)
 
    return max
};