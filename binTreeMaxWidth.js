/*
#661
Given a binary tree, write a function to get the maximum width of the given tree. The width of a tree is the maximum width among all levels. The binary tree has the same structure as a full binary tree, but some nodes are null.

The width of one level is defined as the length between the end-nodes (the leftmost and right most non-null nodes in the level, where the null nodes between the end-nodes are also counted into the length calculation.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
    }
 
 /**
  * @param {TreeNode} root
  * @return {number[]}
  */
 
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
 
  const toArray = function root(root) {
 
     if(root === null) return []
 
     const res = []
     const stack1 = [root]
     const stack2 = []
 
     while (stack1.length !== 0 || stack2.length !== 0) {
       const level     = stack1.length > 0 ? stack1 : stack2
       const nextLevel = stack1.length > 0 ? stack2 : stack1
      
       let allNulls = true
 
       while(level.length > 0) {
           const node =  level.shift()
           if(node === null) {
             res.push(null)
             continue
           }
           res.push(node.val)
           allNulls &= node.left === null & node.right === null
           nextLevel.push(node.left)
           nextLevel.push(node.right)
       }
       if(allNulls) break
    }
    return res
  }


/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function(root) {

    if(root === null) return 0

    let maxWidth = 0
    let queue = [root]

    while(true) {
        
        let start = 0; let end = queue.length - 1

        while(queue[start] === null) start++
        
        while(queue[end] === null) end--

        if(start > end) return maxWidth

        maxWidth = Math.max(maxWidth || 1, end - start + 1)

        const newQueue = []

        for(let i = 0; i < queue.length; i++) {
            const node = queue[i]
            if(node === null) {
                newQueue.push(null, null)
            } else {
                newQueue.push(node.left, node.right) 
            }
        }
        queue = newQueue
    }

};

let arr = [1,3,2,5,3,null,9]
      
const tree = fromArray(arr)

console.log(widthOfBinaryTree(tree))