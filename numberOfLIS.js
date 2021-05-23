/*
#673. Number of Longest Increasing Subsequence

Given an integer array nums, return the number of longest increasing subsequences.

Notice that the sequence has to be strictly increasing.

 

Example 1:

Input: nums = [1,3,5,4,7]
Output: 2
Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].
Example 2:

Input: nums = [2,2,2,2,2]
Output: 5
Explanation: The length of longest continuous increasing subsequence is 1, and there are 5 subsequences' length is 1, so output 5.

 

Constraints:

1 <= nums.length <= 2000
-106 <= nums[i] <= 106

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumberOfLIS = function(nums) {
    
    const dp = new Array(nums.length + 1).fill(1)
    
    dp[0] = 0
    
    let max = 1, maxEl = nums[0]
    
    for(let i = 1; i < dp.length; i++) {
        
        const el = nums[i - 1]
        
        for(let j = i-1; j >= 0; j--) {
            
            const prev = nums[j -1]
            
            if(prev >= el) continue;
            
            dp[i] = Math.max(dp[i], dp[j] + 1)
            
            if(dp[i] > max) {
                max = dp[i]
                maxEl = nums[j]
            }
            
        }
    }
    
    console.log(max, maxEl)
    console.table(dp)

    let res = 0

    const dp2 = new Array(nums.length + 1).fill(0)

    dp2[0] = 1
    
     for(let i = 1; i < dp.length; i++) {
         
        const el = nums[i - 1], dpi = dp[i]
            
            for(let j = i-1; j >= 0; j--) {
            
                const prev = nums[j -1]
                
                if(prev >= el) continue;
                
                if(dp[j] === dpi - 1) {
                    dp2[i] += dp2[j] 
                }
            }

            if(dpi === max) res += dp2[i]
       
     }

     console.table(dp2)      
    
    return res
};

//let arr  = [1,3,5,4,7];
//arr = [2,2,2,2,2];
//arr = [6,7,1,3,5,4,7];
//arr = [1,2,4,3,5,4,7,2];
console.log(findNumberOfLIS(arr))