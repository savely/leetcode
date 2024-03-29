/*
#1910. Remove All Occurrences of a Substring

Given two strings s and part, perform the following operation on s until all occurrences of the substring part are removed:

    Find the leftmost occurrence of the substring part and remove it from s.

Return s after removing all occurrences of part.

A substring is a contiguous sequence of characters in a string.

 

Example 1:

Input: s = "daabcbaabcbc", part = "abc"
Output: "dab"
Explanation: The following operations are done:
- s = "daabcbaabcbc", remove "abc" starting at index 2, so s = "dabaabcbc".
- s = "dabaabcbc", remove "abc" starting at index 4, so s = "dababc".
- s = "dababc", remove "abc" starting at index 3, so s = "dab".
Now s has no occurrences of "abc".

Example 2:

Input: s = "axxxxyyyyb", part = "xy"
Output: "ab"
Explanation: The following operations are done:
- s = "axxxxyyyyb", remove "xy" starting at index 4 so s = "axxxyyyb".
- s = "axxxyyyb", remove "xy" starting at index 3 so s = "axxyyb".
- s = "axxyyb", remove "xy" starting at index 2 so s = "axyb".
- s = "axyb", remove "xy" starting at index 1 so s = "ab".
Now s has no occurrences of "xy".

 

Constraints:

    1 <= s.length <= 1000
    1 <= part.length <= 1000
    s​​​​​​ and part consists of lowercase English letters.



*/

var removeOccurrences = function(s, part) {
    
    const stack = [], matches = [];
    
    
    for(let i = 0; i < s.length; i++) {

        stack.push(s[i]);
        
        const top = matches.length - 1; p =  top >= 0 ? matches[top] : -1;
        
        if(s[i] === part[p + 1]) {

          if(p + 1 === part.length - 1) {
              stack.length -= part.length;
              matches.pop(); 
              continue;
          } 

          if(top >= 0) {
            matches[top]++;  
          } else {
              matches.push(0);
          }

        continue;
        } 
        
        if(s[i] === part[0]) {
            matches.push(0);
            continue;
        }

        if(top < 0) continue;

        let back = 0;

        while(matches[top] > 0 && s[i - back] != part[0]) {
            matches[top]--;
            back++;
        }
        
        if(matches[top] > 0) {
            matches.push(0);
            stack.length -= back;
            i -= back;
        } else {
            matches.pop();
        }
    }
    
    return stack.join('');
};

s = "daabcbaabcbc", part = "abc";
//s = "axxxxyyyyb", part = "xy";
//s =  "kpygkivtlqoocskpygkpygkivtlqoocssnextkqzjpycbylkaondskivtlqoocssnextkqzjpycbylkaondssnextkqzjpycbylkaonds";
//part = "kpygkivtlqoocssnextkqzjpycbylkaonds";

s = "qtbxqtbxelkekgcdnelkeqtbxelkekgcdnqtbxelkekgcdnkgcdnwqchzunbvyjoq";
part = "qtbxelkekgcdn";

//s = "ckck"
//part = "kk"
console.log(removeOccurrences(s,part));
