/*
# 336. Palindrome Pairs

Given a list of unique words, return all the pairs of the distinct indices (i, j) in the given list, so that the concatenation of the two words words[i] + words[j] is a palindrome.

 

Example 1:

Input: words = ["abcd","dcba","lls","s","sssll"]
Output: [[0,1],[1,0],[3,2],[2,4]]
Explanation: The palindromes are ["dcbaabcd","abcddcba","slls","llssssll"]

Example 2:

Input: words = ["bat","tab","cat"]
Output: [[0,1],[1,0]]
Explanation: The palindromes are ["battab","tabbat"]

Example 3:

Input: words = ["a",""]
Output: [[0,1],[1,0]]

 

Constraints:

    1 <= words.length <= 5000
    0 <= words[i].length <= 300
    words[i] consists of lower-case English letters.


*/

/**
 * @param {string[]} words
 * @return {number[][]}
 */
 var palindromePairs = function(words) {
    
    const toFreq = (word) => {

        const freq = {};

        for(let i = 0; i < word.length; i++) {
            const ch = word[i];
            freq[ch] = freq[ch] || 0;
            freq[ch]++;
        }
        return freq;
    }

    const isPalindrome = (word) => {

        let start = 0, end = word.length -1;

        while(end > start) {
            if(word[end--] !== word[start++]) return false;
        }
        return true;
    }

    const canFormPalindrome = (freq1, freq2, isEven) => {

        for(const ch in freq2) {

            if(freq1[ch] === undefined) return false;

            const count = freq1[ch] + freq2[ch];

            if(count % 2 && isEven) return false;
        }

        return true;
    }

    const res = [], freqs = words.map(toFreq);

    for (let i = 0; i < words.length - 1; i++) {

        const word1 = words[i], freq1 = freqs[i];

        for(let j = i + 1; j < words.length; j++) {

            const word2 = words[j], freq2 = freqs[j], isEven = (word1.length + word2.length) % 2 === 0;
            const canForm = word1.length > word2.length ? canFormPalindrome(freq1,freq2, isEven)
                                                        : canFormPalindrome(freq2, freq1, isEven);
            if(!canForm) continue;

            if(isPalindrome(word1 + word2)) res.push([i,j]);
            if(isPalindrome(word2 + word1)) res.push([j,i]);
        }
    }
    return res;
};

let words = ["abcd","dcba","lls","s","sssll"];
words = ["tacb","tab","cat"];
words = ["a",""];

console.table(palindromePairs(words));