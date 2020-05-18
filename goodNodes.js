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
 * @return {number}
 */

var goodNodes = function(root) {
    if(root === null) return 0
    
    
    const count = function(node, max) {
        
        if(node === null) return 0
        
        const good = node.val >= max ? 1 : 0
        
        return good + count(node.left, Math.max(node.val, max)) + count(node.right, Math.max(node.val, max))
    }
    
    return count(root, root.val)
};

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

 const tree = fromArray([2,null,4,10,8,null,null,4])

 console.log(goodNodes(tree))