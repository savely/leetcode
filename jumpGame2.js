/*
45. Jump Game II
Hard

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

Example:

Input: [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2.
    Jump 1 step from index 0 to 1, then 3 steps to the last index.

Note:

You can assume that you can always reach the last index.

*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {

    if(nums.length < 3) return nums.length -1

    let jumps = 0, pos = 0

    while(pos < nums.length) {
        let maxJump = nums[pos]

        if(pos + maxJump >= nums.length-1) return jumps+1   
        
        let j = pos+1
        let maxPos = j
        let maxReach =  j + nums[j]

        while(j <= pos + maxJump) {
            if(maxReach < j + nums[j]) {
                maxReach =  j + nums[j]
                maxPos = j
            }       
            j++
        }

        pos = maxPos
        jumps++
    }

    return jumps
};

console.log(jump([1,2,1,1,1]))