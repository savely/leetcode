/*
#2516. Take K of Each Character From Left and Right

You are given a string s consisting of the characters 'a', 'b', and 'c' and a non-negative integer k. Each minute, you may take either the leftmost character of s, or the rightmost character of s.

Return the minimum number of minutes needed for you to take at least k of each character, or return -1 if it is not possible to take k of each character.

 

Example 1:

Input: s = "aabaaaacaabc", k = 2
Output: 8
Explanation: 
Take three characters from the left of s. You now have two 'a' characters, and one 'b' character.
Take five characters from the right of s. You now have four 'a' characters, two 'b' characters, and two 'c' characters.
A total of 3 + 5 = 8 minutes is needed.
It can be proven that 8 is the minimum number of minutes needed.

Example 2:

Input: s = "a", k = 1
Output: -1
Explanation: It is not possible to take one 'b' or 'c' so return -1.

 

Constraints:

    1 <= s.length <= 105
    s consists of only the letters 'a', 'b', and 'c'.
    0 <= k <= s.length


*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function(s, k) {

    if(k === 0) return 0;

    const maxLen = s.length, chars = {a:0, b:0, c:0};

    if(maxLen < k * 3) return -1;

    let minSpan = Infinity;

    for(let i = 0; i < maxLen; i++) {

        chars[s[i]]++;

        if(!isFinite(minSpan) && chars['a'] >= k && chars['b'] >= k && chars['c'] >= k) {
            minSpan = i + 1;
        }
    }

    if(!isFinite(minSpan)) return -1;

    if(minSpan === k * 3) return minSpan; 

    s += s;

    let left = 0, right = maxLen;

    while(left < maxLen && right < s.length) {

        while(left < maxLen && chars['a'] >= k && chars['b'] >= k && chars['c'] >= k) {
            minSpan = Math.min(minSpan, right - left);
            chars[s[left++]]--;
        }
        
        while(right < s.length && (chars['a'] < k || chars['b'] < k || chars['c'] < k)) {
            chars[s[right++]]++;
        }
    }
    
    return minSpan;
};

let  s = "aabaaaacaabc", k = 2;

//s = "abc", k = 1;

s = "acba", k = 1;
s = "ccbabcc", k = 1;


console.log(takeCharacters(s, k));