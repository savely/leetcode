/*
#2419. Longest Subarray With Maximum Bitwise AND

You are given an integer array nums of size n.

Consider a non-empty subarray from nums that has the maximum possible bitwise AND.

    In other words, let k be the maximum value of the bitwise AND of any subarray of nums. Then, only subarrays with a bitwise AND equal to k should be considered.

Return the length of the longest such subarray.

The bitwise AND of an array is the bitwise AND of all the numbers in it.

A subarray is a contiguous sequence of elements within an array.

 

Example 1:

Input: nums = [1,2,3,3,2,2]
Output: 2
Explanation:
The maximum possible bitwise AND of a subarray is 3.
The longest subarray with that value is [3,3], so we return 2.

Example 2:

Input: nums = [1,2,3,4]
Output: 1
Explanation:
The maximum possible bitwise AND of a subarray is 4.
The longest subarray with that value is [4], so we return 1.

 

Constraints:

    1 <= nums.length <= 105
    1 <= nums[i] <= 106

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    
    const maxEl = Math.max(...nums);

    let i = 0, minRightIdx = -1, maxLength = 1;

    while(i < nums.length) {

        if(nums[i] < maxEl) {
            i++;
            continue;
        }

        let left = i, curr = maxEl;

        while(left - 1 > minRightIdx) {
            curr &= nums[left - 1];
            if(curr < maxEl) break;
            left--;
        }

        let right = i;
        curr = maxEl;

        while(right + 1 < nums.length) {
            curr &= nums[right + 1];
            if(curr < maxEl) break;
            right++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
        minRightIdx = right;
        i = minRightIdx + 1;
    }

    return maxLength;
};

let  nums = [7,8,1,2,3,3,2,2];
//nums = [1,2,3,4];

console.log(longestSubarray(nums));