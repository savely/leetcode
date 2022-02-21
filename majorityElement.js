/*
#169. Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.
 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-231 <= nums[i] <= 231 - 1

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    
    let idx = 0, count = 1;

    for(let i = 1; i < nums.length; i++) {

        count += nums[i] === nums[idx] ? 1 : -1;

        if(count < 0) {
            count = 1;
            idx = i;
        }
    }

    return nums[idx];
};