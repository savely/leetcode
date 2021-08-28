/*
#3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/


var lengthOfLongestSubstring = function(s) {
    
    if(s.length < 2) return s.length;
    
    const set = new Set([s[0]]);
    
    let max = 1, i = 1, j = 0;
    
    while(i < s.length || (s.length - j - 1) >= max) {
        
        if(i < s.length && !set.has(s[i])) {
            set.add(s[i]);
            max = Math.max(max, i - j  + 1);
            i++;
        } else {
            set.delete(s[j++]);
        }
    }
    return max;
};