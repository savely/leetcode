/*
#1869. Longer Contiguous Segments of Ones than Zeros

Given a binary string s, return true if the longest contiguous segment of 1s is strictly longer than the longest contiguous segment of 0s in s. Return false otherwise.

For example, in s = "110100010" the longest contiguous segment of 1s has length 2, and the longest contiguous segment of 0s has length 3.
Note that if there are no 0s, then the longest contiguous segment of 0s is considered to have length 0. The same applies if there are no 1s.
 */


/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * @param {string} s
 * @return {boolean}
 */
 var checkZeroOnes = function(s) {
    
    const isOne = s[0] === '1', seg = {'0' : isOne ? 0:1 ,'1': isOne ? 1:0} , maxSeg = {...seg}
    
    for(let i = 1; i < s.length; i++) {
        
        const curr = s[i], prev = s[i-1]
        
        if(prev === curr) {
            seg[curr]++
        } else {
            maxSeg[prev] = Math.max(maxSeg[prev], seg[prev])            
            seg[prev] = 0
            seg[curr] = 1
            
        }
    }
    
   maxSeg[0] = Math.max(maxSeg[0], seg[0])      
   maxSeg[1] = Math.max(maxSeg[1], seg[1])   
        
   return maxSeg[1] > maxSeg[0]
};