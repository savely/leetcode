/*
  #377. Combination Sum IV

  Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.

  The answer is guaranteed to fit in a 32-bit integer.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var combinationSum4 = function(nums, target) {
    
    const dp = new Array(target + 1).fill(0)

    dp[0] = 1 
    
    nums.sort((a,b) => a - b)
    
    for(let n = 1; n <= target; n++) {
        for(let j = 0; j < nums.length && nums[j] <= n; j++) {
           
            const num = nums[j]

            dp[n] += dp[n - num]
        }
    }

    return dp[target]
};


console.log(combinationSum4([1,2,3], 4))