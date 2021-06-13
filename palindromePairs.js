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

    const map = {};

    for(let i = 0; i < words.length; i++) {

        const rev = [...words[i]].reverse().join('');
        map[rev] = i;
    }
    
    const isPalindrome = (word) => {

        if(word.length === 1) return true;

        let start = 0, end = word.length -1;

        while(end > start) {
            if(word[end--] !== word[start++]) return false;
        }
        return true;
    }

    const res = [];

    for (let i = 0; i < words.length; i++) {

        const word = words[i];

        if(word === '') continue;

        if(map[word] !== undefined && map[word] !== i) {
           res.push([map[word], i]);
        }

        if(map[''] !== undefined && isPalindrome(word)) {
            res.push([map[''], i], [i, map['']]);
        }

          for(let j = 1; j < word.length; j++) {

            const left =word.slice(0, j), right = word.slice(j);

            if(map[left] !== undefined && map[left] !== i && isPalindrome(right)) {
                res.push([map[left], i]);
            }
            if(map[right] !== undefined && map[right] !== i && isPalindrome(left)) {
                res.push([map[right], i]);
            }
          }  
    }
    return res;
};

let words = ["abcd","dcba","lls","s","sssll"];
words = ["bat","tab","cat"];
words = ["a",""];
words = ["tacb","tab","cat"];

console.table(palindromePairs(words));