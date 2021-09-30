/*
698. Partition to K Equal Sum Subsets

Given an integer array nums and an integer k, return true if it is possible to divide this array into k non-empty subsets whose sums are all equal.

 

Example 1:

Input: nums = [4,3,2,3,5,2,1], k = 4
Output: true
Explanation: It's possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.
Example 2:

Input: nums = [1,2,3,4], k = 3
Output: false
 

Constraints:

1 <= k <= nums.length <= 16
1 <= nums[i] <= 104
The frequency of each element is in the range [1, 4].
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var canPartitionKSubsets = function(nums, k) {

    const sum = nums.reduce((acc, n) => acc + n);

    if(sum % k) return false;

    const targetSum = sum / k;

    nums.sort((a, b) => b - a);

    if(nums[0] > targetSum) return false;

    const f = (idx, target, mask) => {

        if(idx > nums.length || target < 0) return 0;

        const flag = 1 << idx, canUse = ! (mask & flag);        

        if(canUse && target === nums[idx]) return (mask | flag);



        return  (canUse && f(idx + 1, target - nums[idx], mask | flag)) || f(idx + 1, target, mask);
    }

    let mask = 0;

    for(let i = 0; i < k; i++) {

        const currMask = f(0, targetSum, mask);

        if(currMask === 0) return false;

        mask |= currMask;
    }


    return true;    
};