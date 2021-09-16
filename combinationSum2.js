/*
#40. Combination Sum II

Given a collection of candidate numbers (candidates) and a target number (target), 
find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

 

Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]

Example 2:

Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]

 

Constraints:

    1 <= candidates.length <= 100
    1 <= candidates[i] <= 50
    1 <= target <= 30

*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {

    const sorted = candidates.sort((a,b) => a - b);
    const cand = [];
    const res = [];
    const visited = new Set();

    const backTrack = function(idx, tgt) {
         
        if(tgt < 0 ) return;

        if( tgt === 0 && !visited.has(cand.toString())) {
            res.push(Array.from(cand));
            visited.add(cand.toString());
            return;
        }

        for(let i = idx; i < sorted.length && sorted[i] <= tgt; i++) {
          cand.push(sorted[i]);
          backTrack(i+1, tgt - sorted[i]);
          cand.pop();
        }
    }
    backTrack(0, target);

    return res;
};