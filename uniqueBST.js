/*
#95. Unique Binary Search Trees II

Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. 
Return the answer in any order.

Example 1:


Input: n = 3
Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
Example 2:

Input: n = 1
Output: [[1]]
 

Constraints:

1 <= n <= 8

Given an integer n, 
generate all structurally unique BST's (binary search trees) that store values 1 ... n.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 const{ TreeNode, toArray }  = require('./treeUtil');

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
 var generateTrees = function(n) {

    const dp = {};

    const generate = (from, to) => {

       if(dp[from] !== undefined && dp[from][to] !== undefined) return dp[from][to];

        if(from > to) return [null];

        const trees = [];        

        for(let i = from; i <= to; i++) {

            for(const left of generate(from, i - 1)) {

                for(const right of generate(i + 1, to)) {

                    const root = new TreeNode(i);

                    root.left = left;
                    root.right = right;

                    trees.push(root);

                }
            }
        }

        dp[from] = dp[from] || {};

        dp[from][to] = trees;

       return dp[from][to];
    };

    return generate(1, n);
};