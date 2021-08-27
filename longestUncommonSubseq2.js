/*
# 522. Longest Uncommon Subsequence II

iven an array of strings strs, return the length of the longest uncommon subsequence between them. If the longest uncommon subsequence does not exist, return -1.

An uncommon subsequence between an array of strings is a string that is a subsequence of one string but not the others.

A subsequence of a string s is a string that can be obtained after deleting any number of characters from s.

For example, "abc" is a subsequence of "aebdc" because you can delete the underlined characters in "aebdc" to get "abc". Other subsequences of "aebdc" include "aebdc", "aeb", and "" (empty string).
 

Example 1:

Input: strs = ["aba","cdc","eae"]
Output: 3
Example 2:

Input: strs = ["aaa","aaa","aa"]
Output: -1
 

Constraints:

1 <= strs.length <= 50
1 <= strs[i].length <= 10
strs[i] consists of lowercase English letters.
*/

var findLUSlength = function(strs) {
    
    strs.sort((a,b) => a.length - b.length);
    
    const isSubSeq = (str, s) => {

        let i = 0;

        for(const c of s) {

            if(c === str[i]) {
                i++;
                if(i === str.length) return true;
            }
        }
        return i === str.length;
    };

    const deleted = new Set();

    for(let i = 0; i < strs.length; i++) {

        const str = strs[i];

        if(deleted.has(str)) continue;

        let isSubstr = false;

        for(let j = i + 1; j < strs.length; j++) {

            if(isSubSeq(str, strs[j])) {
                deleted.add(str);
                break;
            }
        }
    }
    
    for(let i = strs.length - 1; i >= 0; i--) {

        if(!deleted.has(strs[i])) return strs[i].length;
    }

    return -1;
};

let strs = ["aba","cdc","eae", "zzaa","aazz","zzaa","aazzz","aazzz"];
//strs = ["aabbcc", "aabbcc","c","e","aabbcd"];

console.log(findLUSlength(strs));