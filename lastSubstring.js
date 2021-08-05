/*
#1163. Last Substring in Lexicographical Order

Given a string s, return the last substring of s in lexicographical order.

 

Example 1:

Input: s = "abab"
Output: "bab"
Explanation: The substrings are ["a", "ab", "aba", "abab", "b", "ba", "bab"]. The lexicographically maximum substring is "bab".
Example 2:

Input: s = "leetcode"
Output: "tcode"
 

Constraints:

1 <= s.length <= 4 * 105
s contains only lowercase English letters.
*/

/**
 * @param {string} s
 * @return {string}
 */
 var lastSubstring = function(s) {
    
    
    let pos = 0, char = s[0];
    
    for(let i = 1; i < s.length; i ++) {
        
        if(s[i] > char) {
            char = s[i];
            pos = i;
        }
    }

    const maxChar = char, maxCharPositions = [pos];

    for(let i = pos + 1; i < s.length; i++) {

        if(s[i] === maxChar && s[i - 1] !== maxChar) maxCharPositions.push(i);
    }

    if(maxCharPositions.length === 1) return s.slice(maxCharPositions[0]);



    let i = maxCharPositions.length - 1, j = maxCharPositions.length - 2;

    while(j >= 0) {

        let posI = maxCharPositions[i] + 1, posJ = maxCharPositions[j] + 1;
        
        while(posI < s.length && posJ < maxCharPositions[i]) {

            if(s[posJ] === s[posI]) {
                posJ++;
                posI++;
            } else {
                break;
            }
        }

        if(s[posJ] >= (s[posI] || '$')) i = j;
        j--;
    }

    return s.slice(maxCharPositions[i]);
};