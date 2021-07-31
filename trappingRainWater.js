/*
#42. Trapping Rain Water

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 

Constraints:

n == height.length
0 <= n <= 3 * 104
0 <= height[i] <= 105
*/

/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    
    if(height.length <2) return 0;
    

    const dp = new Array(height.length).fill(0);

    dp[0] = height[0];
    dp[dp.length - 1] = height[dp.length - 1];

    let vol = 0;

    for(let i = 1; i < dp.length - 1; i++) {
        dp[i] = Math.max(dp[i - 1], height[i]);
    }

    for(let i = dp.length - 2; i > 0; i--) {
        dp[i] = Math.min(dp[i], Math.max(dp[i + 1], height[i]));

        vol += dp[i] - height[i];
    }

    return vol;
};