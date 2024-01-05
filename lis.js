/*
#300. Longest Increasing Subsequence

Given an integer array nums, return the length of the longest strictly increasing subsequence.

A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

 

Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4

Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1

 

Constraints:

    1 <= nums.length <= 2500
    -104 <= nums[i] <= 104

 

Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?

*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {

    const dp = [nums[0]];
    
    const f = num => {
        
        let lo = 0, hi = dp.length - 1;
        
        while(hi >= lo) {
            
            let mid = (hi + lo) >> 1;
            
            if(dp[mid] >= num) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        }
        
        return lo;
    }

    let max = 1;
    
    for(let i = 1; i < nums.length; i++) {
        
        if(nums[i] > dp[dp.length - 1]) {
            dp.push(nums[i]);
        } else {
            dp[f(nums[i])] = nums[i];
        }
    }

    return dp.length;
};


let nums = [3,5,6,2,5,4,19,5,6,7,12]; //6

console.log(lengthOfLIS(nums));