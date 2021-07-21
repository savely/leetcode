/*
#103. Binary Tree Zigzag Level Order Traversal
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  
    if (root === null) return []

    const res = []

    const traverse = function (nodes, dir = false) {

        const level = [], vals = []

        for(let i = 0; i < nodes.length; i++) {
            const node = nodes[i]
            vals.push(node.val)
            if(node.left !== null) level.push(node.left)
            if(node.right !== null) level.push(node.right)
       }

       if(vals.length === 0) return
       
       res.push(dir ? vals.reverse() : vals)
       
       traverse(level, !dir)
    }

    traverse([root])

    return res
};

let tree = fromArray([3,9,20,null,null,15,7])

console.log(zigzagLevelOrder(tree))