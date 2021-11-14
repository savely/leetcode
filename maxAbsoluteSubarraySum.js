/*
#1749. Maximum Absolute Sum of Any Subarray

You are given an integer array nums. The absolute sum of a subarray [numsl, numsl+1, ..., numsr-1, numsr] is abs(numsl + numsl+1 + ... + numsr-1 + numsr).

Return the maximum absolute sum of any (possibly empty) subarray of nums.

Note that abs(x) is defined as follows:

If x is a negative integer, then abs(x) = -x.
If x is a non-negative integer, then abs(x) = x.
 

Example 1:

Input: nums = [1,-3,2,3,-4]
Output: 5
Explanation: The subarray [2,3] has absolute sum = abs(2+3) = abs(5) = 5.
Example 2:

Input: nums = [2,-5,1,-4,3,-2]
Output: 8
Explanation: The subarray [-5,1,-4] has absolute sum = abs(-5+1-4) = abs(-8) = 8.
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxAbsoluteSum = function(nums) {

    if(nums.length < 2) return Math.abs(nums[0]);

    const maxPositiveSum = () => {

    let start = 0, end = 0, sum = 0, max = 0;

        while(end < nums.length) {

            sum += nums[end];

            while(start < end && nums[start] <= 0) sum -= nums[start++];

            if(sum <= 0) {
                start = end;
                sum = nums[end];
            }

            max = Math.max(max, sum);
            end++;
        }

        return Math.max(0, max);
    };

    const positive = maxPositiveSum();

    nums = nums.map(n => -1 *n);

    return Math.max(positive, maxPositiveSum())
};