/*
#516. Longest Palindromic Subsequence

Given a string s, find the longest palindromic subsequence's length in s.

A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

 

Example 1:

Input: s = "bbbab"
Output: 4
Explanation: One possible longest palindromic subsequence is "bbbb".

Example 2:

Input: s = "cbbd"
Output: 2
Explanation: One possible longest palindromic subsequence is "bb".

 

Constraints:

    1 <= s.length <= 1000
    s consists only of lowercase English letters.

*/

/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindromeSubseq = function(s) {

    const dp = new Array(s.length).fill(0).map(_ => new Array(s.length).fill(-1));

    const f = (start, end) => {

        if(dp[start][end] > -1) return dp[start][end];

        if(end < start) return 0;

        if(end === start) {
            dp[start][end] = 1;
            return 1;
        }
        
        dp[start][end] = s[start] === s[end] ? 2 + f(start + 1, end - 1) : Math.max(f(start + 1, end), f(start, end - 1));

        return dp[start][end];
    }
    

    return f(0, s.length - 1);
};