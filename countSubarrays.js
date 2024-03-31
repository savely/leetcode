/*
#2444. Count Subarrays With Fixed Bounds

You are given an integer array nums and two integers minK and maxK.

A fixed-bound subarray of nums is a subarray that satisfies the following conditions:

    The minimum value in the subarray is equal to minK.
    The maximum value in the subarray is equal to maxK.

Return the number of fixed-bound subarrays.

A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [1,3,5,2,7,5], minK = 1, maxK = 5
Output: 2
Explanation: The fixed-bound subarrays are [1,3,5] and [1,3,5,2].

Example 2:

Input: nums = [1,1,1,1], minK = 1, maxK = 1
Output: 10
Explanation: Every subarray of nums is a fixed-bound subarray. There are 10 possible subarrays.

 

Constraints:

    2 <= nums.length <= 105
    1 <= nums[i], minK, maxK <= 106
*/

/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    
    let lastMin = lastMax = lastBad = -1, count = 0;

    for(let i = 0; i < nums.length; i++) {

        const num = nums[i];

        lastBad = (num > maxK || num < minK) ? i : lastBad;

        lastMax = num === maxK ? i : lastMax;

        lastMin = (num === minK) ? i : lastMin;

        const left = Math.min(lastMin, lastMax);

        count += left > lastBad ?  left - lastBad : 0;
    }

    return count;
};
