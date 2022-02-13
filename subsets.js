/*
#78. Subsets

Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
 

Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.

*/


var subsets = function(nums) {
    
    const superSet = [[]]
    const set      = []
    const visited  = new Set()
    
    const backTrack = function(idx) {
        for(let i = idx; i < nums.length; i++) {
            set.push(nums[i]);
            backTrack(i+1);
            const hash = set.sort().toString();
            if(!visited.has(hash)) {
              visited.add(hash);
              superSet.push(Array.from(set));
            }
            set.pop();
        }
    }
    
    backTrack(0);
    return superSet;
};

console.log(subsets([4,4,4,1,4]));