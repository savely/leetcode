/*
#15. 3Sum

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, 
and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Example 2:

Input: nums = []
Output: []

Example 3:

Input: nums = [0]
Output: []

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

    if(nums.length < 3) return [];

    nums = nums.sort((a, b) => a - b);

    const res = [], len = nums.length - 1;

    for (let i = 0; i < len - 1; i++) {

        if(nums[i] > 0) return res;

        if (nums[i] === nums[i - 1]) continue;

       let lo = i + 1, hi = len;

        const el = nums[i];

        while(lo < hi) {

            while(lo > i + 1 && nums[lo - 1] === nums[lo]) lo++;
            while(nums[hi + 1] === nums[hi]) hi--;

            if(lo >= hi) break;

            const sum = el + nums[lo] + nums[hi];

            if(sum === 0) {
                res.push([el, nums[lo], nums[hi]]);
                lo++;
                hi--;
            }

            if(sum > 0) hi--;

            if(sum < 0) lo++;

        }
    }

    return res;
};
