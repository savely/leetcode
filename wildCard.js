/*
#44. Wildcard Matching

Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).

 

Example 1:

Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input: s = "aa", p = "*"
Output: true
Explanation: '*' matches any sequence.
Example 3:

Input: s = "cb", p = "?a"
Output: false
Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
Example 4:

Input: s = "adceb", p = "*a*b"
Output: true
Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".
Example 5:

Input: s = "acdcb", p = "a*c?b"
Output: false

*/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
    
    p = p.replace(/\*{2,}/g, '*')

    if(p === '*') return true
     
    if(!p.length) return !s.length

    if(!s.length) return false

    const dp = new Array(s.length + 1).fill(0).map(_ => new Array(p.length + 1).fill(false))

    dp[0][0] = true
     
    for (let i=1;i<=p.length;i++) {
        dp[0][i] = dp[0][i-1] && p[i-1] == "*";
    }     

    for(let i = 1 ; i <dp.length; i++) {

        const char = s[i - 1] 

        for(let j= 1; j < dp[0].length; j++) {
            
            const pattern  = p[j - 1]

            if(char === pattern || pattern === '?') {
                dp[i][j] = dp[i-1][j-1]

            }

            if(pattern === '*') {
                dp[i][j] = dp[i - 1][j] || dp[i][j-1]
            }
        }
    }

    return dp[dp.length - 1][dp[0].length - 1]
};