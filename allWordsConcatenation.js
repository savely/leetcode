/*
#30. Substring with Concatenation of All Words

You are given a string s and an array of strings words of the same length. 
Return all starting indices of substring(s) in s that is a concatenation of each word in words exactly once, in any order, and without 
any intervening characters.

You can return the answer in any order.

 

Example 1:

Input: s = "barfoothefoobarman", words = ["foo","bar"]
Output: [0,9]
Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
The output order does not matter, returning [9,0] is fine too.
Example 2:

Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
Output: []
Example 3:

Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
Output: [6,9,12]
 

Constraints:

1 <= s.length <= 104
s consists of lower-case English letters.
1 <= words.length <= 5000
1 <= words[i].length <= 30
words[i] consists of lower-case English letters.
*/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
 var findSubstring = function(s, words) {

    const wlen = words[0].length, wsLength = wlen * words.length;

    if(s.length < wsLength) return [];

    const freq = words.reduce((acc, w) => {
        acc[w] = (acc[w] || 0) + 1;
        return acc;
    }, {});

    const res = [];

    for(let i = 0; i < wlen; i++) {

        if(s.length - i < wsLength) break;

        let usedWords = {}, count  = 0;

        let start = i, end = i, currWord = '';

        while(end < s.length) {

            while(end < s.length && currWord.length < wlen) {
                currWord += s[end++];
            }


        if(freq[currWord] === undefined) {
            start = end = end;
            currWord = '';
            usedWords = {};
            count = 0;
            continue;
        }

        while(usedWords[currWord] === freq[currWord]) {

            const firstWord = s.slice(start, start + wlen); 

            usedWords[firstWord]--;
            count--;

            start += wlen;
        }

        usedWords[currWord] = (usedWords[currWord] || 0) + 1;
        count++;
        currWord = '';

        if(count === words.length) {
            res.push(start);
        }
     }
    }

    return res;    
};

let s = "barfoothefoobarman", words = ["foo","bar"];
//s = "wordgoodgoodwordgoodbestword", words = ["word","good","best","word"];
s = "barfoofoobarthefoobarman", words = ["bar","foo","the"];

console.table(findSubstring(s, words));