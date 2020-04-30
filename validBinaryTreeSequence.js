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
 * @param {number[]} arr
 * @return {boolean}
 */
var isValidSequence = function(root, arr) {
    

    const checkSequenceReq = function (node, i) {

        if(node === null 
           || i >= arr.length
           || node.val !== arr[i]) return false

        if(i === arr.length-1
           && node.left === null
           && node.right === null) return true

       return checkSequenceReq(node.left, i+1) || checkSequenceReq(node.right, i+1) 
    }

    return checkSequenceReq(root, 0)
};