/*
#3409. Longest Subsequence With Decreasing Adjacent Difference

You are given an array of integers nums.

Your task is to find the length of the longest subsequence seq of nums, such that the absolute differences between consecutive elements form a non-increasing sequence of integers. In other words, for a subsequence seq0, seq1, seq2, ..., seqm of nums, |seq1 - seq0| >= |seq2 - seq1| >= ... >= |seqm - seqm - 1|.

Return the length of such a subsequence.

A subsequence is an non-empty array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

 

Example 1:

Input: nums = [16,6,3]

Output: 3

Explanation: 

The longest subsequence is [16, 6, 3] with the absolute adjacent differences [10, 3].

Example 2:

Input: nums = [6,5,3,4,2,1]

Output: 4

Explanation:

The longest subsequence is [6, 4, 2, 1] with the absolute adjacent differences [2, 2, 1].

Example 3:

Input: nums = [10,20,10,19,10,20]

Output: 5

Explanation: 

The longest subsequence is [10, 20, 10, 19, 10] with the absolute adjacent differences [10, 10, 9, 9].

 

Constraints:

    2 <= nums.length <= 104
    1 <= nums[i] <= 300


*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function(nums) {
    
    const dp = Array.from({length: 301}, (_) => [-1, 0]);
    dp[0] = [0, 1];

    let longest = 1;

    for(let i = 1; i < nums.length; i++) {

        for(let j = 0; j < dp.length; j++) {

            if(dp[j][0] == -1) continue;

            const diff = Math.abs(nums[dp[j][0]] - nums[i]);

            if(diff <= j) {
                dp[diff] = [i, dp[j][1] + 1];
                longest = Math.max(longest, dp[diff][1]);
            } else if(dp[diff][0] == -1) {
                dp[diff] = [i, 2];
            }
        }

    }

    return longest;
};

let nums = [10,20,10,19,10,20]; // 5
nums = [16,6,3]; // 3
nums = [6,5,3,4,2,1]; // 4
nums = [6,197,191,239,61,97,56,118,260,90,153,198,279,70,177,137,31,129,134,272,125,125,52,235,230,288,282,177,28,175,126,215,242,293,239,242,249,103,23,153,214,241,252,172,210,69,221,57,114,274,215,178,6,100,176,227,8,298,52,208,269,90,23,116,27,102,277,251,88,109,188,163,275,271,158,159,219,201,186,190,294,266,217,38,92,116,1,105,25,189,201,37,23,43,234,188,182,284,164,4];

console.log(longestSubsequence(nums));