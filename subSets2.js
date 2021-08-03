/*
#90. Subsets II

Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
 

Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
**/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
    
    const superSet = [[]]
    const set      = []
    const visited  = new Set()
    
    const backTrack = function(idx) {
        for(let i = idx; i < nums.length; i++) {
            set.push(nums[i])
            backTrack(i+1)
            const hash = set.toString()
            if(!visited.has(hash)) {
              visited.add(hash)  
              superSet.push(Array.from(set))
            }
            set.pop()
        }
    }
    nums.sort((a,b) => a - b)
    backTrack(0)
    return superSet
};