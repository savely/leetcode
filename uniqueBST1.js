/*
96. Unique Binary Search Trees

Given an integer n, return the number of structurally unique BST's (binary search trees) 
which has exactly n nodes of unique values from 1 to n.

Example 1:

Input: n = 3
Output: 5
Example 2:

Input: n = 1
Output: 1
 

Constraints:

1 <= n <= 19
*/

/**
 * @param {number} n
 * @return {number}
 */
 var numTrees = function(n) {

    const dp = {0 : 1, 1 : 1};

    const rec = (k) => {

        if(dp[k]) return dp[k];

        let trees = 0;
    
        for(let i = 1; i <= k; i++) {
    
            trees += rec(i - 1) * rec(k - i);
        }
        
        dp[k] = trees;

        return trees;
    };

    return rec(n);
};