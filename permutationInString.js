/*
#567. Permutation in String

Given two strings s1 and s2, return true if s2 contains the permutation of s1.

In other words, one of s1's permutations is the substring of s2.

 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 

Constraints:

1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.
*/

var checkInclusion = function(s1, s2) {

    if(s1.length > s2.length) return false;

    const freq  = {};

    for(let c of s1) {
        freq[c] = (freq[c] || 0) + 1;
    }

    const dict = new Array(26).fill(0);

    let start = 0, end = 0;

       while(end < s2.length) {

        const ch = s2[end];
          
        if(!freq[ch]) {
            dict.fill(0);
            end++;
            start = end;
            continue;
        }

        dict[s2.charCodeAt(end) - 97]++;

        while(dict[s2.charCodeAt(end) - 97] > freq[ch]) {
            dict[s2.charCodeAt(start++) - 97]--;
        }

        end++;

        if(end - start === s1.length) return true;

       } 

       return false;
  };