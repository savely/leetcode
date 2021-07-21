/*
#343. Integer Break

Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers.

Return the maximum product you can get.

 

Example 1:

Input: n = 2
Output: 1
Explanation: 2 = 1 + 1, 1 × 1 = 1.
Example 2:

Input: n = 10
Output: 36
Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.
 

Constraints:

2 <= n <= 58
*/

/**
 * @param {number} n
 * @return {number}
 */
 var integerBreak = function(n) {
    
    const dp = new Array(n+1).fill(0)
    
    dp[2] = 1
    
    for(let i = 3; i < dp.length; i++) {
        
        for(let j = 1; j <= i / 2; j++) {
            
            dp[i] = Math.max(dp[i], j * (i - j) , j * dp[i - j])
        }
    }

    return dp[n]
};