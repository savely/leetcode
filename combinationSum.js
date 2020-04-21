/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

 
var combinationSum = function(candidates, target) {

    const sorted = candidates.sort((a,b) => a-b)
    const cand = []
    const res = []

    const backTrack = function(idx,tgt) {
         
        if(tgt < 0 ) return

        if( tgt === 0) {
            res.push(Array.from(cand))
            return 
        }

        for(let i = idx; i < sorted.length && sorted[i] <= tgt; i++) {
          cand.push(sorted[i])
          backTrack(i, tgt - sorted[i])
          cand.pop()
        }
    }
    backTrack(0, target)

    return res
};

//console.log(combinationSum([2,3,5], 8))

var subsets = function(nums) {
    
    const superSet = [[]]
    const set      = []
    const visited  = new Set()
    
    const backTrack = function(idx) {
        for(let i = idx; i < nums.length; i++) {
            set.push(nums[i])
            backTrack(i+1)
            const hash = set.sort().toString()
            if(!visited.has(hash)) {
              visited.add(hash)  
              superSet.push(Array.from(set))
            }
            set.pop()
        }
    }
    
    backTrack(0)
    return superSet
};

console.log(subsets([4,4,4,1,4]))