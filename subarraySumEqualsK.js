/*
#560. Subarray Sum Equals K

Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

 

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2
 

Constraints:

1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {

    const map = {0 : 1};
    let sum = 0, res = 0;

    for(const num of nums) {
        sum += num;
        res += map[sum - k] || 0;
        map[sum] = map[sum] || 0;
        map[sum]++;
    }
    
    return res;
};
