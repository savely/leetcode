/*
   #889. Construct Binary Tree from Preorder and Postorder Traversal

   Return any binary tree that matches the given preorder and postorder traversals.

Values in the traversals pre and post are distinct positive integers.

 

Example 1:

Input: pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]
Output: [1,2,3,4,5,6,7]
 

Note:

1 <= pre.length == post.length <= 30
pre[] and post[] are both permutations of 1, 2, ..., pre.length.
It is guaranteed an answer exists. If there exists multiple answers, you can return any of them.
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
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
 var constructFromPrePost = function(pre, post) {
    
    let left = null, right = null
    let leftLength = 0
    
if(pre[1]) {
    leftLength = post.indexOf(pre[1]) + 1
    const leftPost = post.slice(0, leftLength)
    const leftPre  = pre.slice(1, leftLength + 1)
    left = constructFromPrePost(leftPre, leftPost)
}

if(post[post.length - 2] && post.length - leftLength > 1) {
    const rightPost = post.slice(leftLength, post.length - 1)
    const rightPre = pre.slice(leftLength + 1, pre.length + 1)
    right = constructFromPrePost(rightPre, rightPost)
}

return new TreeNode (pre[0], left, right)
};