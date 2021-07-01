/*
#76. Minimum Window Substring

Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.
 

Follow up: Could you find an algorithm that runs in O(m + n) time?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {

    if(t.length > s.length) return "";

    const toIdx = (char) => {
        return (char < 'a')  ? char.charCodeAt(0) - 'A'.charCodeAt(0) : (char.charCodeAt(0) - 97 + 26)
    }
    
    const addChar  = (char) => {
       const idx = toIdx(char) , targetCount = freqT[idx];
       if(targetCount === 0) return 0;
       freqS[idx]++;       
       return freqS[idx] > targetCount ? 0 : 1;
    };

    const removeChar = (char) => {
        const idx = toIdx(char) , targetCount = freqT[idx];
        if(targetCount === 0) return 0;        
        freqS[idx]--;        
        return freqS[idx] < targetCount ? 1 : 0;
    }
        
    const freqT = new Array(52).fill(0), freqS = new Array(52).fill(0);
    
    for(let i = 0; i < t.length; i++) {
        freqT[toIdx(t[i])]++;
    }
 
    let numMatchedChars = 0, start = 0, end = 0, minSbString = [0,s.length + 1];

    while(start <= s.length - t.length) {

        if(numMatchedChars < t.length && end < s.length) {
            numMatchedChars += addChar(s[end++]);
            continue;
        }

        const len = minSbString[1] - minSbString[0];

        if(numMatchedChars === t.length && end - start < len) {
            minSbString[0] = start;
            minSbString[1] = end;
        }
        numMatchedChars -= removeChar(s[start++]);
    }

    let [st,e] = minSbString;

    if(e - st > s.length) return "";

    return s.slice(st,e);
};

let s = "BEACODEBANCA", t = "ABC";
//s = "ADOBECODEBANC", t = "ABC";
//s = 'a', t = 'aa'
//s = "abc", t = "cba"

//s = "aasasaa", t = "aaa";
//s = "BbabBbbaab", t= "Baa" //"Bbbaa";
//s = "ancbbcaa", t = "abc";
//s = "baaaabab", t = "abb";
s = 'a', t = 'b';

console.log(minWindow(s,t))