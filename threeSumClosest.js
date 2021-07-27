/*
#16. 3Sum Closest

Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. 
You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 

Constraints:

3 <= nums.length <= 10^3
-10^3 <= nums[i] <= 10^3
-10^4 <= target <= 10^4
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    
    nums.sort((a,b) => a - b);

    const findClosest = (from, tgt) => {

        let lo = from, hi = nums.length - 1;

        if(nums[lo] >= tgt) return nums[lo];

        if(nums[hi] <= tgt) return nums[hi];

        while(hi > lo) {

            const mid = (hi + lo) / 2 >> 0;

            if(nums[mid] === tgt) return nums[mid];

            if(nums[mid] > tgt) {

                if(nums[mid - 1] <= tgt) {

                    return (tgt - nums[mid - 1]) < (nums[mid] - tgt) ? nums[mid - 1]  : nums[mid] ;
                }
                hi = mid - 1; 

            } else {

                if(nums[mid + 1] >=  tgt) {

                    return (tgt - nums[mid]) < (nums[mid + 1] - tgt) ? nums[mid]: nums[mid + 1];
                }
                lo = mid + 1;                
            }
        }

        return nums[lo];
    }

    let closest = Infinity;

    for(let i = 0; i < nums.length - 2; i++) {

        for(let j = i + 1; j < nums.length - 1; j++) {

        const currClosest = nums[i] + nums[j] + findClosest(j + 1, target - nums[i] - nums[j]);

        if(currClosest === target) return target;

        closest = Math.abs(target - currClosest) < Math.abs(target - closest) ? currClosest : closest;
        }
    }

    return closest;
};