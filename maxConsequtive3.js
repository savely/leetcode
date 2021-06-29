/*
#1004. Max Consecutive Ones III

Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
0 <= k <= nums.length
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var longestOnes = function(nums, k) {

    if(nums.length <= k) return k;

    let start = 0, end = 0, numZeroes = 0, max = 0, curr = 0;

    while(end < nums.length) {

        if(nums[end] === 1 || numZeroes < k) {
            curr++;
            numZeroes += nums[end] === 0 ? 1 : 0;             
            max = Math.max(max, curr);
            end++;
        } else {
            numZeroes -= nums[start] === 0 ? 1 : 0;
            curr--;
            start++;
        }
    }
  return max;  
};