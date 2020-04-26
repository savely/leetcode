
/*
A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26

Given a non-empty string containing only digits, determine the total number of ways to decode it.

Example 1:

Input: "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).

Example 2:

Input: "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).


*/
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {

    if (s.length === 0) return 0
    
    const is1 = chr => chr === '1'
    const is2 = chr => chr === '2' 
    const is0 = chr => chr === '0'
    const is1or2 = chr => is1(chr) || is2(chr)
    const is1to6 = chr => Array.from('123456').some(c => c === chr)
    const is1to9 = chr => Array.from('123456789').some(c => c === chr)

    for(let i = 0; i < s.length; i++) {
     if(s[i] === '0' && ! is1or2(s[i-1])) return 0
    }
    

    const dp = Array(s.length+1).fill(0)
    dp[0] = 1
    dp[1] = 1 

    for(let i = 2; i <= s.length; i++) {
       const pred = (is2(s[i-2]) && is1to6(s[i-1])) || (is1(s[i-2]) && is1to9(s[i-1]))
       dp[i] = dp[i-1] + (!is0(s[i]) && pred ? dp[i-2] : 0)
    } 
    return dp[s.length]
    
};

console.log(numDecodings('110'))