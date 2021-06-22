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
    
    const pointers = new Array(S.length + 1).fill(0), pointer = new Array(26).fill(-1);

    for(let i = S.length -1; i >= 0; i--) {

        const code = S.charCodeAt(i) - 97;

        pointers[i + 1] = Array.from(pointer);
        pointer[code] = i + 1;
    }

    pointers[0] = pointer;

    const search = function (word) {

        let pos = 0;

        for(let i = 0; i < word.length; i++) {

            const code = word.charCodeAt(i) - 97, nextPos = pointers[pos][code];

            if(nextPos < 0 || nextPos < i) return false;

            if(i === word.length -1) return true;

            pos = nextPos;
        }
    }

    return words.reduce((acc, word) => acc + (search(word) ? 1 :0), 0);
};