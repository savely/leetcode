/*
#1658. Minimum Operations to Reduce X to Zero

You are given an integer array nums and an integer x. 
In one operation, you can either remove the leftmost or the rightmost
 element from the array nums and subtract its value from x. 
 Note that this modifies the array for future operations.

Return the minimum number of operations to reduce x to exactly 0 if it is possible, 
otherwise, return -1.

 

Example 1:

Input: nums = [1,1,4,2,3], x = 5
Output: 2
Explanation: The optimal solution is to remove the last two elements to reduce x to zero.

Example 2:

Input: nums = [5,6,7,8,9], x = 4
Output: -1

Example 3:

Input: nums = [3,2,20,1,1,3], x = 10
Output: 5
Explanation: The optimal solution is to remove the last three elements and the first two elements (5 operations in total) to reduce x to zero.

 

Constraints:

    1 <= nums.length <= 105
    1 <= nums[i] <= 104
    1 <= x <= 109


*/

/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
 var minOperations = function(nums, x) {

    const target = nums.reduce((acc, n) => acc + n) - x;

    if(target < 0) return -1;

    if(target === 0) return nums.length;


    let start = 0, end = 0, curr = 0, maxLen = 0;
 
    while(start < nums.length || (end === nums.length && curr >= target) ) {

        if(curr === target) {
            maxLen = Math.max(maxLen, end === start ? 1 : end - start);
        }

        if(curr <= target) {

            if(end === nums.length) break;
            curr += nums[end++];
            continue;
        }

        curr -= nums[start++];
    }
    
    return maxLen ? nums.length - maxLen : -1;
};

let nums = [1,1,4,2,3], x = 6;
//nums = [5,6,7,8,9], x = 4;
nums = [3,2,20,1,1,3], x = 9;
nums = [5,2,3,1,1], x = 5;

console.log(minOperations(nums, x));

