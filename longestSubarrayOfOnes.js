/*
#1493. Longest Subarray of 1's After Deleting One Element

Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array.

Return 0 if there is no such subarray.

 

Example 1:

Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
Example 2:

Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
Example 3:

Input: nums = [1,1,1]
Output: 2
Explanation: You must delete one element.
Example 4:

Input: nums = [1,1,0,0,1,1,1,0,1]
Output: 4
Example 5:

Input: nums = [0,0,0]
Output: 0
 

Constraints:

1 <= nums.length <= 10^5
nums[i] is either 0 or 1.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestSubarray = function(nums) {
    
    let left = 0, right = 0, countZeroes = 0, maxLen = 0;
    
    while(right < nums.length) {
        
        if(countZeroes < 2) {
            countZeroes += nums[right] === 0 ? 1 : 0;
            maxLen = Math.max(maxLen, right - left + 1 - countZeroes);
            right++;
        } else {
            countZeroes -= nums[left++] === 0 ? 1 : 0;
        }
    }
          
  return maxLen === nums.length ? nums.length - 1 : maxLen;        
};