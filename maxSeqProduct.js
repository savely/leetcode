/*
#3584. Maximum Product of First and Last Elements of a Subsequence

You are given an integer array nums and an integer m.

Return the maximum product of the first and last elements of any

of nums of size m.

 

Example 1:

Input: nums = [-1,-9,2,3,-2,-3,1], m = 1

Output: 81

Explanation:

The subsequence [-9] has the largest product of the first and last elements: -9 * -9 = 81. Therefore, the answer is 81.

Example 2:

Input: nums = [1,3,-5,5,6,-4], m = 3

Output: 20

Explanation:

The subsequence [-5, 6, -4] has the largest product of the first and last elements.

Example 3:

Input: nums = [2,-1,2,-6,5,2,-5,7], m = 2

Output: 35

Explanation:

The subsequence [5, 7] has the largest product of the first and last elements.

 

Constraints:

    1 <= nums.length <= 105
    -105 <= nums[i] <= 105
    1 <= m <= nums.length

*/

/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var maximumProduct = function(nums, m) {
    
    const n = nums.length;

    let maxProduct = -Infinity, min = Infinity, max = -Infinity;

    for(let i = m - 1; i < n; i++) {
        min = Math.min(min, nums[i- m + 1]);
        max = Math.max(max, nums[i - m + 1]);
        maxProduct = Math.max(maxProduct, nums[i] * min, nums[i] * max);
    }

    return maxProduct;
};

