
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {

    const pathSumReq = function(node, partSum, include = true) {
  
        if(node === null) return 0
        
        const hasLeft = node.left !== null
        const hasRight = node.right !== null
  
        const leftWithoutNode  = include && hasLeft ? pathSumReq(node.left, 0) : 0
        const rightWithoutNode = include && hasRight? pathSumReq(node.right, 0) : 0
  
        partSum += node.val
  
        const count = (partSum === sum) ? 1 : 0
        
        const leftWithNode  = hasLeft ? pathSumReq(node.left, partSum, false) : 0
        const rightWithNode = hasRight? pathSumReq(node.right, partSum, false) :0
  
        return count + leftWithoutNode + rightWithoutNode + leftWithNode + rightWithNode
    }
    return pathSumReq(root, 0)
  }