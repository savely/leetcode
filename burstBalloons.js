/*
#312. Burst Balloons

You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it represented by an array nums. 
You are asked to burst all the balloons.

If you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins. If i - 1 or i + 1 goes out of bounds of the array, 
then treat it as if there is a balloon with a 1 painted on it.

Return the maximum coins you can collect by bursting the balloons wisely.

 

Example 1:

Input: nums = [3,1,5,8]
Output: 167
Explanation:
nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167
Example 2:

Input: nums = [1,5]
Output: 10
 

Constraints:

n == nums.length
1 <= n <= 500
0 <= nums[i] <= 100

*/


/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxCoins = function(nums) {

    const prep = [1];

    for(const n of nums) {
        if(n > 0) prep.push(n);
    }

    if(prep.length === 1)  return 0;

    if(prep.length === 2)  return prep[1];
    
    prep.push(1);

    const dp = new Array(prep.length).fill(0).map(() => new Array(prep.length).fill(0)); 

    const f = (from, to) => {

        if(from < 0 || to > prep.length  - 1) return 0;


        if(dp[from][to] > 0 ) return dp[from][to];

        for(let i = from; i <= to; ++i) {
            dp[from][to] = Math.max(dp[from][to], prep[from - 1] * prep[i] * prep[to + 1] + f(from, i - 1) + f(i + 1, to));
        }

        return dp[from][to];
    }
    
    return f(1, prep.length - 2);
};
