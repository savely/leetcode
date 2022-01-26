/*
#1305. All Elements in Two Binary Search Trees

Given two binary search trees root1 and root2, return a list containing all the integers from both trees sorted in ascending order.

 

Example 1:


Input: root1 = [2,1,4], root2 = [1,0,3]
Output: [0,1,1,2,3,4]
Example 2:


Input: root1 = [1,null,8], root2 = [8,1]
Output: [1,1,8,8]
 

Constraints:

The number of nodes in each tree is in the range [0, 5000].
-105 <= Node.val <= 105

*/

const { TreeNode, fromArray, toArray } = reqiure(".\treeUtil");
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
 var getAllElements = function(root1, root2) {

    const f = (root) => {

        if(!root) return [];

        return [...f(root.left), root.val, ...f(root.right)];
    };

    const arr1 = f(root1), arr2 = f(root2), res = [];

    let i = 0, j = 0;

    while(i < arr1.length && j < arr2.length) {
        arr1[i] < arr2[j] ? res.push(arr1[i++]) : res.push(arr2[j++]);
    }

    while(i < arr1.length) {
        res.push(arr1[i++]);
    }

    while(j < arr2.length) {
        res.push(arr2[j++]);
    }    
    
    return res;
};


