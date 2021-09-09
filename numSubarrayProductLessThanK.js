/*
#713. Subarray Product Less Than K

Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

 

Example 1:

Input: nums = [10,5,2,6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
Example 2:

Input: nums = [1,2,3], k = 0
Output: 0
 

Constraints:

1 <= nums.length <= 3 * 104
1 <= nums[i] <= 1000
0 <= k <= 106
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var numSubarrayProductLessThanK = function(nums, k) {

    if(k === 0) return 0;

    let res = 0, left = 0, right = 0, product = nums[0];


    while (right < nums.length) {

        if(left === right && product >= k) {
            right++;
            left = right;
            product = right < nums.length ? nums[right] : Infinity;
            continue;
        }

        if(product < k) {
            res += right - left + 1;
            right++;
            product *= right < nums.length ? nums[right] : Infinity;
        } else {
            product /= nums[left++];
        }
    }

    return res;
};