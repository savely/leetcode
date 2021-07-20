/*
#720. Longest Word in Dictionary

Given an array of strings words representing an English Dictionary, return the longest word in words that can be built one character at a time by other words in words.

If there is more than one possible answer, return the longest word with the smallest lexicographical order. If there is no answer, return the empty string.

 

Example 1:

Input: words = ["w","wo","wor","worl","world"]
Output: "world"
Explanation: The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".
Example 2:

Input: words = ["a","banana","app","appl","ap","apply","apple"]
Output: "apple"
Explanation: Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".
 

Constraints:

1 <= words.length <= 1000
1 <= words[i].length <= 30
words[i] consists of lowercase English letters.
*/

/**
 * @param {string[]} words
 * @return {string}
 */
 var longestWord = function(words) {
    

    words.sort((w1, w2) => w1.length === w2.length ? (w1 === w2 ? 0 : ((w1 > w2) ?  1 : - 1)) : w2.length - w1.length);

    if(words[words.length - 1] > 1) return "";

    let maxLength = 1, maxIndex = 0;

    const set = new Set();

    for(let i = words.length - 1; i >= 0; i--) {

        const word = words[i];

        if(word.length > maxLength + 1) break;

        if(word.length === maxLength + 1) maxLength++;

        set.add(word);

        maxIndex = words.length  - i;
    }


    for(let i = 0; i < maxIndex; i++) {

        const word = words[i];

        let key = "", found = true;
         
        for(let j = 0; j < word.length - 1; j++) {

            key += word[j];

            if(!set.has(key)) {
                found = false;
                break;
            }
        }

        if(found) return word;        
    }

    return "";
};