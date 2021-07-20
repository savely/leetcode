/*
#962. Maximum Width Ramp

Given an array nums of integers, a ramp is a tuple (i, j) for which i < j and nums[i] <= nums[j].  The width of such a ramp is j - i.

Find the maximum width of a ramp in nums.  If one doesn't exist, return 0.

 

Example 1:

Input: nums = [6,0,8,2,1,5]
Output: 4
Explanation: 
The maximum width ramp is achieved at (i, j) = (1, 5): nums[1] = 0 and nums[5] = 5.
Example 2:

Input: nums = [9,8,1,0,1,9,4,0,4,1]
Output: 7
Explanation: 
The maximum width ramp is achieved at (i, j) = (2, 9): nums[2] = 1 and nums[9] = 1.
 

Note:

2 <= nums.length <= 50000
0 <= nums[i] <= 50000
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxWidthRamp = function(nums) {

    const minStack = [0];
    
    let maxRamp = 0;

    for(let i = 1; i < nums.length; i++) {

        let top = minStack.length - 1, idx = minStack[ top ];

        while(top >= 0 && nums[ idx ] <= nums[i]) {
            maxRamp = Math.max(maxRamp, i - idx);
            top--;
            idx = minStack[top];
        }

        if(nums[i] < nums [ minStack[ minStack.length  - 1] ]) minStack.push(i);
    }
    
    return maxRamp;
};
let nums = [6,0,8,2,1,5];
//nums = [9,8,1,0,1,9,4,0,4,1];
 nums = [1,6,0,8,2,1,5,3];
 //nums = [9,2,8,1,0,1,9,4,0,4,1];

console.log(maxWidthRamp(nums));