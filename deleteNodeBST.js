/*
#450. Delete Node in a BST

Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

Search for a node to remove.
If the node is found, delete the node.
Follow up: Can you solve it with time complexity O(height of tree)?

 

Example 1:


Input: root = [5,3,6,2,4,null,7], key = 3
Output: [5,4,6,2,null,null,7]
Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.

Example 2:

Input: root = [5,3,6,2,4,null,7], key = 0
Output: [5,3,6,2,4,null,7]
Explanation: The tree does not contain a node with value = 0.
Example 3:

Input: root = [], key = 0
Output: []
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
 * @param {number} key
 * @return {TreeNode}
 */
 var deleteNode = function(root, key) {
    
    
    const find = (node, parent) => {

        if(node === null) return [null, parent];
        
        if(node.val === key) return [node, parent];
        
        if(node.val > key) return find(node.left, node)
        
        return find(node.right, node)
    }

    const isLeaf = (node) => node && !node.left && !node.right

    const deleteLeaf = (node, parent) => {

        if(!parent) return null

        if(parent.left === node) {
            parent.left = null
        } else {
            parent.right = null
        }
        return parent
    }

    const pred = (node, parent) => {

        if(!node) return [null, parent]

        if(isLeaf(node) || ! node.left) return [node, parent]

        return pred(node.left,  node)
    }

    const succ = (node, parent) => {

        if(!node) return [null, parent]

        if(isLeaf(node) || ! node.right) return [node, parent]

        return pred(node.right, node)

    }

    const [node, parent] = find(root, null)

    if(!node) return root

    if(isLeaf(node)) {
        deleteLeaf(node, parent)
        return root === node ? null : root
    }

    const [succNode, succParent] = pred(node.right, node)

    if(succNode) {

        if(succParent !== node) {
            succParent.left = succNode.right
            succNode.right = node.right
        }        

        succNode.left = node.left
        node.left = null
        node.right = null

        deleteLeaf(node, parent)

        if(!parent) return succNode;

        parent.val > succNode.val ? (parent.left = succNode) : (parent.right = succNode)
        return root
    }

    const [predNode, predParent] = succ(node.left, node)

        if(predParent !== node) {
            predParent.right = predNode.left
            predNode.left = node.left
        }

        predNode.right = node.right
        node.right = null
        node.left = null

        deleteLeaf(node, parent)

        if(!parent) return predNode;

        parent.val > predNode.val ? (parent.left = predNode) : (parent.right = predNode)
        return root
};


//let arr = [5,3,6,2,4,null,7];
//let del = 3;
//arr = [5,3,null,2,4,null];
//del = 5
//arr = [0];
//arr = [50,30,70,null,40,60,80];
//del = 50;
arr = [2,1]
del = 2

const tree = fromArray(arr), resTree = deleteNode(tree, del)

console.table(toArray(resTree))