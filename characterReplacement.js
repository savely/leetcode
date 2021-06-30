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
    
    if(s.length < 2 || k === s.length) return s.length;

    const freq = new Array(26).fill(0), shift = 'A'.charCodeAt(0);

    const mostFreqChar = () => {

        let max = 0, idx = -1;

        for(let i = 0; i < 26; i++) {
           if(freq[i] >= max) {
               max = freq[i];
               idx = i ;
           }
        }
        return idx;
    }

    let start = 0,  max = 0;

    freq[s.charCodeAt(0) - shift]++;

    for(let i = 1; i < s.length; i++) {

        const idx = s.charCodeAt(i) - shift;

        freq[idx]++;

        let  maxCode = mostFreqChar(),  countOthers = i - start + 1 - freq[maxCode];
        
        while(countOthers > k) {

            freq[s.charCodeAt(start++) - shift]--;
            maxCode = mostFreqChar();
            countOthers = i - start + 1 - freq[maxCode];
        }

        max = Math.max(max, i - start + 1);
    }
    
    return max;
};


let s = "ABAB", k = 2;
//s = "AABABBA", k = 1;
//s = "ABAA", k = 0;

console.log(characterReplacement(s, k));