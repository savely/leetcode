/*
#16. 3Sum Closest

Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. 
Return the sum of the three integers. 
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

        let closest = Infinity;

        let i = from, j = nums.length - 1;

        while(j > i) {

            const sum = nums[i] + nums[j];

            if(sum === tgt) return tgt;

            if(Math.abs(tgt - sum) < Math.abs(tgt - closest)) {
                closest = sum;
            }

            sum < tgt ? i++ : j --;
        }

        return closest;
    }

    let closest = Infinity;

    for(let i = 0; i < nums.length - 2; i++) {

        const currClosest =  nums[i] + findClosest(i  + 1, target - nums[i]);

        closest = Math.abs(target - currClosest) < Math.abs(target - closest) ? currClosest : closest;        
    }

    return closest;
};