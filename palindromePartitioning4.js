/*
#1745. Palindrome Partitioning IV

Given a string s, return true if it is possible to split the string s into three non-empty palindromic substrings. Otherwise, return false.​​​​​

A string is said to be palindrome if it the same string when reversed.

 

Example 1:

Input: s = "abcbdd"
Output: true
Explanation: "abcbdd" = "a" + "bcb" + "dd", and all three substrings are palindromes.
Example 2:

Input: s = "bcbddxy"
Output: false
Explanation: s cannot be split into 3 palindromes.
 

Constraints:

3 <= s.length <= 2000
s​​​​​​ consists only of lowercase English letters.

*/

/**
 * @param {string} s
 * @return {boolean}
 */
 var checkPartitioning = function(s) {

    if(s.length < 3) return false;

    if(s.length === 3) return true;

    const dp = new Array(s.length + 1).fill(0).map ((_ => new Array(s.length).fill(0)));

    for(let i = 0; i < s.length; i++) {

        dp[0][i] = dp[1][i] = 1;
    }
    
    for(let i = 2; i < dp.length; i++) {

        for(let j = i - 1; j < dp[0].length; j++) {

            dp[i][j] = dp[i - 2][j - 1] && s[j] === s[j - i + 1] ? 1 : 0;
        }
    }

    for(let i = 0; i <= s.length - 3; i++) {

        if(!dp[i + 1][i]) continue;

        for(let j = i + 1; j  <= s.length - 2; j++) {

            if(dp[j - i][j] && dp[s.length - j - 1][s.length - 1]) return true;
        }
    }
    
    return false;
};