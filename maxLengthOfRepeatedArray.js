/*
#718. Maximum Length of Repeated Subarray

Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears in both arrays.
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findLength = function(nums1, nums2) {
    
    const dp = new Array(nums1.length + 1).fill(0).map(_ => new Array(nums2.length + 1).fill(0))

    let max = 0

    for(let i = 1; i < dp.length; i++) {
        for (let j = 0; j < dp[0].length; j++) {
            if(nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i-1][j-1] + 1
                max = Math.max(max, dp[i][j])
            }
        }
    }

    return max
};