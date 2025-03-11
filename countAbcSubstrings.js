/*
#1358. Number of Substrings Containing All Three Characters

Given a string s consisting only of characters a, b and c.

Return the number of substrings containing at least one occurrence of all these characters a, b and c.

 

Example 1:

Input: s = "abcabc"
Output: 10
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 

Example 2:

Input: s = "aaacb"
Output: 3
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb". 

Example 3:

Input: s = "abc"
Output: 1

 

Constraints:

    3 <= s.length <= 5 x 10^4
    s only consists of a, b or c characters.

*/

/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {

    let left = 0, right = 0, count = 0, a = 0, b = 0, c = 0;

    while(right < s.length) {

        a += s[right] === 'a' ? 1 : 0;
        b += s[right] === 'b' ? 1 : 0;
        c += s[right] === 'c' ? 1 : 0;

        while(a && b && c) {
            count += s.length - right;
            a -= s[left] === 'a' ? 1 : 0;
            b -= s[left] === 'b' ? 1 : 0;
            c -= s[left] === 'c' ? 1 : 0;
            left++;
        }
        right++;
    }
    
    return count;
};
