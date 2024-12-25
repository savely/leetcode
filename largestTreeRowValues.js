/*
#515. Find Largest Value in Each Tree Row

Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).

Example 1:

Input: root = [1,3,2,5,3,null,9]
Output: [1,3,9]

Example 2:

Input: root = [1,2,3]
Output: [1,3]

 

Constraints:

    The number of nodes in the tree will be in the range [0, 104].
    -231 <= Node.val <= 231 - 1

*/
const  {TreeNode, fromArray, toArray } = require("./treeUtil");

var largestValues = function(root) {
    
    const ans = [];

    const dfs = (node, depth) => {

        if(!node) return;
        
        ans[depth] = Math.max(ans[depth] === undefined ? -Infinity : ans[depth], node.val);

        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }

    dfs(root, 0);

    return ans;
};
