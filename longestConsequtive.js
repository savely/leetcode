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
  
    const set = new Set(nums), map = {};
    
    let maxSeq = 0;
    
    for(const n of set) {
       
        map[n] = 1;
        set.delete(n);
        
        let next = n+1;
    
        while(map[next] !== undefined || set.has(next)) {

            if(map[next] !== undefined) {
                map[n] += map[next];
                maxSeq = Math.max(maxSeq, map[n]);
               break;
            }

            map[n]++;
            set.delete(next);
            next++;
        }
        
        maxSeq = Math.max(maxSeq, map[n])
    }

   return maxSeq; 
};