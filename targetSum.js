/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
 var findTargetSumWays = function(nums, S) {
    
    if(!nums.length) return 0
    
    let dp = {}
    
    dp[nums[0]] = 1
    dp[-nums[0]] = 1
    
    for(let i = 1; i < nums.length; i++) {
        
        const newDp = {}, el = nums[i]
        
        for(const sum in dp) {
            
            const num = parseInt(sum)
                  
            for(const nextSum of [num + el, num - el]) {
                
                newDp[nextSum] = (dp[nextSum] || 0) + (newDp[nextSum] || 0) + dp[sum]
            } 
        }
        dp = newDp
        
        console.dir(dp)
    }
    return dp[S] || 0
};

let arr = [1,1,1,1,1]
console.log(findTargetSumWays(arr,3))