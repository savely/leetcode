/*
# 105. Construct Binary Tree from Preorder and Inorder Traversal

Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree,
 construct and return the binary tree.

 Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]
Example 2:

Input: preorder = [-1], inorder = [-1]
Output: [-1]
 

Constraints:

1 <= preorder.length <= 3000
inorder.length == preorder.length
-3000 <= preorder[i], inorder[i] <= 3000
preorder and inorder consist of unique values.
Each value of inorder also appears in preorder.
preorder is guaranteed to be the preorder traversal of the tree.
inorder is guaranteed to be the inorder traversal of the tree.
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    
    const rootVal  = preorder.shift()

    let i = 0;
    
    while(inorder[i] !== rootVal) {
       i++
    }

    inorder.splice(i, 1)

    const end  = preorder.length, leftPreorder = preorder.slice(0, i), rightPreorder = preorder.slice(i, end)
    
    const left = leftPreorder.length ?  buildTree(leftPreorder, inorder.slice(0, i)) : null
    const right = rightPreorder.length? buildTree(rightPreorder, inorder.slice(i, end)) : null
    
    return new TreeNode(rootVal, left, right)
};

let preorder = [3,9,20,15,7]
let inorder = [9,3,15,20,7]

console.table(buildTree(preorder, inorder))

