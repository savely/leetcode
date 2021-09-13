/*
572. Subtree of Another Tree

Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

 

Example 1:


Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true
Example 2:


Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
Output: false
 

Constraints:

The number of nodes in the root tree is in the range [1, 2000].
The number of nodes in the subRoot tree is in the range [1, 1000].
-104 <= root.val <= 104
-104 <= subRoot.val <= 104
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


 const{ TreeNode, fromArray, toArray }  = require('./treeUtil');

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 const f = (root1, root2) => {
        
    if(!root1 && !root2) return true;
    
    if(!root1 && root2 || root1 && !root2) return false;

    if(root1.val === root2.val && f(root1.left, root2.left) && f(root1.right, root2.right)) return true;


    return false;          
};

/**
* @param {TreeNode} root
* @param {TreeNode} subRoot
* @return {boolean}
*/
var isSubtree = function(root, subRoot) {

if(!root && !subRoot) return true;

if(!root) return false;

if(root.val === subRoot.val && f(root, subRoot))  return true;

return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};