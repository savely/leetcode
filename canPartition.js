/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const dSum = nums.reduce((acc, n) => acc+n, 0)

    if(dSum  % 2 !== 0) return false 
    
    const dp = new Array((dSum/2)+1).fill(false)

    dp[0] = true

    for(let i = nums.length; i >= 0; i--) {
        for(let j= dSum/2; j >= 0; j--) {
            if(dp[j-nums[i]]) {
                dp[j] = true
            }
        }

        if(dp[dSum/2]) return true
    }
   return false
};