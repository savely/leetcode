/*
#1567. Maximum Length of Subarray With Positive Product

Given an array of integers nums, find the maximum length of a subarray where the sign of all its elements is positive.

A subarray of an array is a consecutive sequence of zero or more values taken out of that array.

Return the maximum length of a subarray with positive sign.

 

Example 1:

Input: nums = [1,-2,-3,4]
Output: 4
Explanation: The array nums already has a positive sign of 24.
Example 2:

Input: nums = [0,1,-2,-3,-4]
Output: 3
Explanation: The longest subarray with positive sign is [1,-2,-3] which has a sign of 6.
Notice that we cannot include 0 in the subarray since that'll make the sign 0 which is not positive.
Example 3:

Input: nums = [-1,-2,-3,0,1]
Output: 2
Explanation: The longest subarray with positive sign is [-1,-2] or [-2,-3].
Example 4:

Input: nums = [-1,2]
Output: 1
Example 5:

Input: nums = [1,2,3,5,-6,4,0,10]
Output: 4

Constraints:

1 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var getMaxLen = function(nums) {
    
    const getMaxSubLen = (from, to) => {

        if(to < from) return 0;

        let left = from;
    
        while( left < to && nums[left] > 0) left++;

        if(left === from) return to - left;

        let right = to;

        while(right > from && nums[right] > 0 && right - from < to - left) right--;

        return Math.max(to - left, right - from);

    };

    let lastZero = -1, sign = 1, maxLen = 0;    

    for(let i = 0; i < nums.length; i++) {

        if(nums[i] === 0) {
            const len = sign > 0 ? i  - (lastZero + 1) : getMaxSubLen(lastZero + 1, i - 1);
            maxLen = Math.max(maxLen, len);
            lastZero = i;
            sign = 1;
        } else {
            sign *= nums[i] > 0 ? 1 : -1;
        }
    }

    if(lastZero < 0 && sign > 0) return nums.length;

    if(lastZero === nums.length - 1) return maxLen;

    const len =  sign > 0 ? nums.length - lastZero - 1 : getMaxSubLen(lastZero + 1, nums.length - 1);

    return Math.max(maxLen, len);
};

let nums = [1,-2,-3,4];
//nums = [0,1,-2,-3,-4];
//nums = [-1,-2,-3,0,1];
//nums = [0,-1,-2,-2,0,0,-2];
nums = [-16,0,-5,2,2,-13,11,8]// 6
//nums = [0,-19,26,-24,-13,-2,26,10,0,4,0,-26,-22,9,35,-11,-14,0,-29]; //7
console.log(getMaxLen(nums));