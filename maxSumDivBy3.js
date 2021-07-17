/*
#1262. Greatest Sum Divisible by Three

Given an array nums of integers, we need to find the maximum possible sum of elements of the array such that it is divisible by three.

 

Example 1:

Input: nums = [3,6,5,1,8]
Output: 18
Explanation: Pick numbers 3, 6, 1 and 8 their sum is 18 (maximum sum divisible by 3).

Example 2:

Input: nums = [4]
Output: 0
Explanation: Since 4 is not divisible by 3, do not pick any number.

Example 3:

Input: nums = [1,2,3,4,4]
Output: 12
Explanation: Pick numbers 1, 3, 4 and 4 their sum is 12 (maximum sum divisible by 3).

 

Constraints:

    1 <= nums.length <= 4 * 10^4
    1 <= nums[i] <= 10^4


*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSumDivThree = function(nums) {
    
    const sum = nums.reduce((acc, n) => acc + n);
    
    if(sum % 3 === 0) return sum;
    
    let maxSum = 0;
    
    const dp = [[sum, new Set()]];
    
    while (dp.length) {
        
        const newDp = [];
        
        const [sum , used] = dp.pop();
        
        for(let i  = 0; i < nums.length; i ++) {
            
            if(used.has(i)) continue;
            
            const newSum = sum - nums[i];
            
            if(newSum % 3 === 0) maxSum = Math.max(maxSum, newSum)
            
            const newSet = new Set(used);
            newSet.add(i);
            
            newDp.push([newSum,newSet]);
        }
        
        dp.push(...newDp);
    }
    
    return maxSum;
};