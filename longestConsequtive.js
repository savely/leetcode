/*
128
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(n) complexity.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  
    const set = new Set(nums)
    let maxSeq = 1

    for(let i = 0; i < nums.length; i++) {
        const num = nums[i]        
        if(!set.has(num)) continue

        if(set.size() < maxSeq) break

        let min = num, max = num
        set.delete(num)
        while(set.has(min-1)) {
            set.delete(min)
            min--
        }
        while(set.has(max+1)) {
            set.delete(max)
            max++
        }

        maxSeq = Math.max(maxSeq, max-min+1)
    }

    return maxSeq
};