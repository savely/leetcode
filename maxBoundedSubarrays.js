/*
#795. Number of Subarrays with Bounded Maximum

We are given an array nums of positive integers, and two positive integers left and right (left <= right).

Return the number of (contiguous, non-empty) subarrays such that the value of the maximum array element in that subarray is at least left and at most right.

Example:
Input: 
nums = [2, 1, 4, 3]
left = 2
right = 3
Output: 3
Explanation: There are three subarrays that meet the requirements: [2], [2, 1], [3].

Note:

    left, right, and nums[i] will be an integer in the range [0, 109].
    The length of nums will be in the range of [1, 50000].


*/

/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
 var numSubarrayBoundedMax = function(nums, left, right) {
    
    let lastInRange = -1, lastOverBound = -1, sum = 0;
    
    for(let i = 0; i < nums.length; i++) {
        
        const el = nums[i];
        
        if(el > right) {
            lastOverBound = i;
            continue;
        }
        
        if(el >= left && el <= right) {
            lastInRange = i;
            sum += i - lastOverBound;
            continue;
        }
        
        if(lastInRange <= lastOverBound) continue;
        
        sum += lastInRange - lastOverBound;
    }
    
    return sum;
};

arr = [2, 1, 4, 3], l = 2, r = 3;

arr = [73,55,36,5,55,14,9,7,72,52], l = 32, r = 69;

console.log(numSubarrayBoundedMax(arr, l, r));