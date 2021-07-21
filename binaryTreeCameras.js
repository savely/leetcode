/*
968. Binary Tree Cameras
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

 var minCameraCover = function(root) {
    
    if(!root) return 0;

    const covered = new Set([null])
    let ans = 0
     
    const dfs = function (node, parent) {

          if(node === null) return 

          dfs(node.left, node)
          dfs(node.right, node)

          if((parent === null && !covered.has(node))
            || !covered.has(node.left)
            || !covered.has(node.right)) {
                ans++
                covered.add(node)
                covered.add(node.left)
                covered.add(node.right)
                covered.add(parent)
            }
  }
   dfs(root, null)

   return ans
};


let tree = [0,0,null,0,0];
tree = [0,0,null,0,null,0,null,null,0]

console.log(minCameraCover(fromArray(tree)))