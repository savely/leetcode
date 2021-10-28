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

let nums = [-1,0,1,2,-1,-4];

nums = [9,-9,4,12,12,0,-14,-7,10,-1,11,-10,-3,2,-9,0,8,-9,-5,-1,10,5,13,-5,-9,-12,9,-3,10,10,-10,4,8,1,-7,-2,-14,-6,6,11,8,-6,9,13,11,7,-10,-4,14,0,3,1,-10,-7,3,-12,-3,-11,0,-8,-15,5,3,8,13,11,13,-15,-9,4,3,6,5,-11,-4,-6,4,1,5,-5,-13,-7,11,-8,2,-1,-12,14,3,3,13,-5,-14,-7,11,14,-11,9,6,-13,-9,-13,1,11,-9,12,-10,2,-1,3,12,-7,3,0,0,12,6,3,3,-13,14,1,-3];

console.table(threeSum(nums));

console.table()
