/*
#1408. String Matching in an Array


Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.

A substring is a contiguous sequence of characters within a string

 

Example 1:

Input: words = ["mass","as","hero","superhero"]
Output: ["as","hero"]
Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer.

Example 2:

Input: words = ["leetcode","et","code"]
Output: ["et","code"]
Explanation: "et", "code" are substring of "leetcode".

Example 3:

Input: words = ["blue","green","bu"]
Output: []
Explanation: No string of words is substring of another string.

 

Constraints:

    1 <= words.length <= 100
    1 <= words[i].length <= 30
    words[i] contains only lowercase English letters.
    All the strings of words are unique.


*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {

    const computeLps = (str) => {

        const lps = new Array(str.length).fill(0);

        let len = 0, i = 1;

        while(i < str.length) {

            if(str[i] === str[len]) {
                len++;
                lps[i] = len;
                i++;
            } else {

                if(len !== 0) {
                    len = lps[len-1];

                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }
        return lps;
    }

    const kmp = (text, pattern, from = 0) => {

        const lps = computeLps(pattern);
        let i = from, j = 0;

        while(i < text.length) {
            if(text[i] === pattern[j]) {
                i++;
                j++;
            }

            if(j === pattern.length) {
                return i - pattern.length;
            } else if(i < text.length && text[i] !== pattern[j]) {
                if(j !== 0) {
                    j = lps[j - 1];
                } else {
                    i++;
                }
            }
        }
        return -1;
    }
    
    const str = words.join('|'), res = [];

    for(const word of words) {

        if(kmp(str, word, kmp(str, word) + word.length) !== -1) {
            res.push(word);
        }
    }

    return res;
};