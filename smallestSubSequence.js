/*
#1081. Smallest Subsequence of Distinct Characters

Return the lexicographically smallest subsequence of s that contains all the distinct characters of s exactly once.

Note: This question is the same as 316: https://leetcode.com/problems/remove-duplicate-letters/

 

Example 1:

Input: s = "bcabc"
Output: "abc"
Example 2:

Input: s = "cbacdcbc"
Output: "acdb"
 

Constraints:

1 <= s.length <= 1000
s consists of lowercase English letters.
*/

/**
 * @param {string} s
 * @return {string}
 */
 var smallestSubsequence = function(s) {
    
    const sorted = new Array(26).fill(-1), counter = new Array(26).fill(0);
    
    for(let i = 0; i < s.length; i++) {
       counter[s.charCodeAt(i) - 97]++
    }
    
    for(let i = 0; i < s.length; i++) {
        
        const idx = s.charCodeAt(i) - 97,  last = sorted[idx];
        
        counter[idx]--;
        
        if(last < 0) {
            sorted[idx] = i
            continue
        }
        
        let hasLastBiggerAfter = false
        
        for(let j = idx + 1; j < 26; j++) {
            
            if(sorted[j] < 0) continue;
            
            if(counter[j] === 0 && sorted[idx] < sorted[j]) {

                if(counter[j] === 0) {
                    hasLastBiggerAfter = true
                    break
                }
                ids.push(j)                
            }
        }
        
        if(!hasLastBiggerAfter) {
           sorted[idx] = i;
            ids.map(id => sorted[id] = -1)
        }

    }
    
    const res = []

    for(let i = 0; i < 26; i++) {
        
        if(sorted[i] < 0) continue;

        res[sorted[i]] = String.fromCharCode(i + 97)
    }
    
    return res.join('')
}

//let str = "bcabc"
str = "cbacdcbc"

console.log(smallestSubsequence(str)) // "acdb"