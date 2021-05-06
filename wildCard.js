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
 var isMatch = function(s, p) {
    
    p = p.replaceAll(/\*{2,}/g, '*')

    if(p === '*') return true

    let i = 0, j = 0
        
    while(i < p.length && j < s.length) {
        
        if(p[i] === '?') {
            i++
            j++
            continue
        }
        
        if(p[i] === '*') {
            
            if(i === p.length - 1) return true
            
           
            while(j < s.length) {
                if((nextPattern === '?' || s[j] === nextPattern)
                   && isMatch(s.slice(j+1,s.length), p.slice(i+1, p.length))) return true; 
                j++
            }
            return false    
        }
        
        if(p[i] !== s[j]) return false;
        
         i++
         j++        
    }
    
    while(i < p.length) {
       if(p[i++] !== '*') return false;
    }    
    
    return i === p.length && j === s.length
};

let s = "abcabczzzde"
let p = "*abc???de*"

s = "acdcb"
p = "a*c*?b"

s = "sissippi"
p = "*ss*?i*pi"

s = "ippi"
p = "*?i*pi"

s = "abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb"
p = "*aa*ba*a*bb*aa*ab*a*aaaaaa*a*aaaa*bbabb*b*b*aaaaaaaaa*a*ba*bbb*a*ba*bb*bb*a*b*bb"


console.log(isMatch(s, p))
