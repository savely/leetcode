
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
} 

const fromArray = function(arr) {
       
    if(arr.length === 0) return null

    const nodes = arr.map (n => n === null ? null : new TreeNode(n))
    
    let left = 0, right = 0

    for(let i = 0; i < arr.length; i++) {
       if(nodes[i] === null) continue
       
       if(2*left+1 < arr.length) {
          nodes[i].left = nodes[2*left+1]
          left++
       }

       if(2*right+2 < arr.length) {
       nodes[i].right = nodes[2*right+2]
        right++
       }
    }

   return nodes[0]
 }

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

      if(partSum === sum) {
          return 1 + leftWithoutNode + rightWithoutNode
      }
      
      const leftWithNode  = hasLeft ? pathSumReq(node.left, partSum, false) : 0
      const rightWithNode = hasRight? pathSumReq(node.right, partSum, false) :0

      return leftWithoutNode + rightWithoutNode + leftWithNode + rightWithNode
  }
  return pathSumReq(root, 0)
}

let arr = [10,5,-3,3,2,null,11,3,-2,null,1]
let target = 8

//arr = [1,null,2,null,3]
//target = 3

let tree = fromArray(arr)

console.log(pathSum(tree, target))
