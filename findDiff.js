/*
#389 Find the Difference

You are given two strings s and t.

String t is generated by random shuffling string s and then add one more letter at a random position.

Return the letter that was added to t.

 

Example 1:

Input: s = "abcd", t = "abcde"
Output: "e"
Explanation: 'e' is the letter that was added.
Example 2:

Input: s = "", t = "y"
Output: "y"
 

Constraints:

0 <= s.length <= 1000
t.length == s.length + 1
s and t consist of lowercase English letters.


*/

const f = function(str) {
    return Array.from(str).reduce((acc, c) => {
    if(acc[c] === undefined) {
        acc[c] = 0;
    }
    acc[c] ++;  
    return acc;
    }, {})
 }

 /**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

var findTheDifference = function(s, t) {

    const freq  = f(s);
    
    for(let i = 0; i < t.length; i++) {
        const ch = t[i];
        if(freq[ch] === undefined || freq[ch] === 0)  {
            return ch;
        }
        freq[ch] -= 1;
    }
};

findTheDifference('abcd', 'abcde');