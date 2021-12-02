/*
#1793. Maximum Score of a Good Subarray

You are given an array of integers nums (0-indexed) and an integer k.

The score of a subarray (i, j) is defined as min(nums[i], nums[i+1], ..., nums[j]) * (j - i + 1). A good subarray is a subarray where i <= k <= j.

Return the maximum possible score of a good subarray.

 

Example 1:

Input: nums = [1,4,3,7,4,5], k = 3
Output: 15
Explanation: The optimal subarray is (1, 5) with a score of min(4,3,7,4,5) * (5-1+1) = 3 * 5 = 15. 
Example 2:

Input: nums = [5,5,4,5,4,1,1,1], k = 0
Output: 20
Explanation: The optimal subarray is (0, 4) with a score of min(5,5,4,5,4) * (4-0+1) = 4 * 5 = 20.
 

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 2 * 104
0 <= k < nums.length

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var maximumScore = function(nums, k) {

    if(nums.length < 2) return nums[0];

    let left = k - 1, right = k + 1, min = nums[k], maxScore = min;

    while(min > 0 && (left >= 0 || right < nums.length)) {

        while(left >= 0 && nums[left] >= min) left--;

        while(right < nums.length && nums[right] >= min) right++;

        maxScore = Math.max(maxScore, min * (right - left - 1));

        if(left < 0) {
            min = nums[right];
        } else if(right === nums.length) {
            min = nums[left];
        } else {
            min = Math.max(nums[left], nums[right]);
        }
    }
    
    return maxScore;
};

let nums = [1,4,3,7,4,5], k = 3;
nums = [5,5,4,5,4,1,1,1], k = 0;

console.log(maximumScore(nums, k));