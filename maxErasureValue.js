/*
#1695. Maximum Erasure Value

You are given an array of positive integers nums and want to erase a subarray containing unique elements. 
The score you get by erasing the subarray is equal to the sum of its elements.

Return the maximum score you can get by erasing exactly one subarray.

An array b is called to be a subarray of a if it forms a contiguous subsequence of a, that is, 
if it is equal to a[l],a[l+1],...,a[r] for some (l,r).

xample 1:

Input: nums = [4,2,4,5,6]
Output: 17
Explanation: The optimal subarray here is [2,4,5,6].
Example 2:

Input: nums = [5,2,1,2,5,2,1,2,5]
Output: 8
Explanation: The optimal subarray here is [5,2,1] or [1,2,5].
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumUniqueSubarray = function(nums) {
    
    const last = {}
    
    last[nums[0]] = 0
    
    let max = nums[0], curr = nums[0], currMinIdx = 0
    
    for(let i = 1; i < nums.length; i++) {
        
        const el = nums[i], lastIdx = last[el]
        nums[i] += nums[i-1]
        curr += el
        last[el] = i
       
        if(lastIdx >= currMinIdx) {
            
            curr -= nums[lastIdx] 
            curr += currMinIdx === 0 ? 0 : nums[currMinIdx - 1]
            currMinIdx = lastIdx + 1
        }

        max = Math.max(max, curr)
        
    }
    return max
};