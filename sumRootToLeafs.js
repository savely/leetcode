/*
#129
Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path 1->2->3 which represents the number 123.

Find the total sum of all root-to-leaf numbers.
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
 * @return {number}
 */
var sumNumbers = function(root) {
    
    let sum = 0
    
    const calcSum  = function(node, num = 0) {
        
        if(node === null) return
        
        num = num * 10 + node.val
        
        if(node.left === null && node.right === null) {
            sum += num
            return
        }
        
        calcSum(node.left, num)
        calcSum(node.right, num)
    }
    
    calcSum(root)
    
    return sum
};

let arr = [4,9,0,5,1]

const tree = fromArray(arr)

console.log(sumNumbers(tree))