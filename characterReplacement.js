/*
#424. Longest Repeating Character Replacement

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
 

Constraints:

1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
    
    if(k === s.length) return s.length;
    
    const letters = new Set(s);
    
    if(letters.size === 1) return s.length;
    
    const f = function (letter) {
        
        let start = 0, end = 0, curr = 0, max = 0, replacements = k;
        
        while (end < s.length) {
            
            if(s[end] === letter || replacements > 0) {
                replacements -= s[end] === letter ? 0 : 1;
                curr++;
                max = Math.max(max, curr);
                end++;
            } else {
                replacements += s[start] === letter ? 0 : 1;
                curr--;
                start++;
            }
        }
        return max;
    };
    
    let max = 0;
    
    for(const letter of letters) {    
        max = Math.max(max, f(letter));

        if(max === s.length) return s.length;
       
    }
    
    return max;
};


let s = "ABAB", k = 2;
s = "AABABBA", k = 1;
//s = "ABAA", k = 0;

console.log(characterReplacement(s, k));