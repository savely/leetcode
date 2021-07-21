/*
#532. K-diff Pairs in an Array
Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.

A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:

0 <= i, j < nums.length
i != j
a <= b
b - a == k
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  
    if(nums.length === 0) return 0
    
    const sorted = Array.from(new Set(nums)).sort((a,b) => a-b)
    let pairs = 0
    
    for(let i = 0; i < sorted.length; i++) {
        const ith = sorted[i]
       for(let j = i+1; j < sorted.length; j++) {
           const jth = sorted[j]
           
           if(jth - ith === k) {
               pairs++
               break
           }
           
           if(jth - ith > k) break
       }
    }
    
    return pairs
};


let nums = [3,1,4,1,5]

console.log(findPairs(nums,2))