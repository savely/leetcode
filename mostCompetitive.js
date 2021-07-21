/*
#1673. Find the Most Competitive Subsequence

Given an integer array nums and a positive integer k, return the most competitive subsequence of nums of size k.

An array's subsequence is a resulting sequence obtained by erasing some (possibly zero) elements from the array.

We define that a subsequence a is more competitive than a subsequence b (of the same length) if in the first position where a and b differ, subsequence a has a number less than the corresponding number in b. For example, [1,3,4] is more competitive than [1,3,5] because the first position they differ is at the final number, and 4 is less than 5.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function(nums, k) {
    
    if(nums.length < 1) return []
    
    const stack = [nums[0]]
    let max = nums.length - k, i = 1
    
    while(i < nums.length) {
       
        if(max < 1) {
            stack.push(nums[i++])
            continue
        }
        
        const el = nums[i++]        

        while(max > 0 && stack[stack.length-1] > el) {
           stack.pop() 
           max-- 
        } 
       
       if(stack.length < k) {
           stack.push(el)
       } else {
           max--
       }
    }
    
    return stack
};

let arr = [71,18,52,29,55,73,24,42,66,8,80,2]
console.log(mostCompetitive(arr, 3))