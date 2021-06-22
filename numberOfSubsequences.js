/*
#92. Number of Matching Subsequences

Given a string s and an array of strings words, return the number of words[i] that is a subsequence of s.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

    For example, "ace" is a subsequence of "abcde".

 

Example 1:

Input: s = "abcde", words = ["a","bb","acd","ace"]
Output: 3
Explanation: There are three strings in words that are a subsequence of s: "a", "acd", "ace".

Example 2:

Input: s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]
Output: 2

 

Constraints:

    1 <= s.length <= 5 * 104
    1 <= words.length <= 5000
    1 <= words[i].length <= 50
    s and words[i] consist of only lowercase English letters.


*/


/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
 var numMatchingSubseq = function(S, words) {
    
    const search = function (word, pos = 0, fromPos = 0) {
        
        const ch = word[pos], idx = S.indexOf(ch, fromPos);

        if(idx < 0) return false;

        if(pos === word.length - 1) return true;

        return search(word, pos + 1, idx + 1);
    }

    return words.reduce((acc, word) => acc + (search(word) ? 1 :0), 0);
};

let s = "abcde", words = ["a","bb","acd","ace"];
s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"];

console.log(numMatchingSubseq(s, words));