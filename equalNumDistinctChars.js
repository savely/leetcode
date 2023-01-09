/*
#2531. Make Number of Distinct Characters Equal

You are given two 0-indexed strings word1 and word2.

A move consists of choosing two indices i and j such that 0 <= i < word1.length and 0 <= j < word2.length and swapping word1[i] with word2[j].

Return true if it is possible to get the number of distinct characters in word1 and word2 to be equal with exactly one move. Return false otherwise.

 

Example 1:

Input: word1 = "ac", word2 = "b"
Output: false
Explanation: Any pair of swaps would yield two distinct characters in the first string, and one in the second string.

Example 2:

Input: word1 = "abcc", word2 = "aab"
Output: true
Explanation: We swap index 2 of the first string with index 0 of the second string. The resulting strings are word1 = "abac" and word2 = "cab", which both have 3 distinct characters.

Example 3:

Input: word1 = "abcde", word2 = "fghij"
Output: true
Explanation: Both resulting strings will have 5 distinct characters, regardless of which indices we swap.

 

Constraints:

    1 <= word1.length, word2.length <= 105
    word1 and word2 consist of only lowercase English letters.


*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var isItPossible = function(word1, word2) {

    const chars1 = new Array(26).fill(0), chars2 = new Array(26).fill(0);
    
    let distinct1 = 0, distinct2 = 0;

    for(const char of word1) {

        const id = char.charCodeAt(0) - 97;

        distinct1 += chars1[id] === 0 ? 1 : 0;
        chars1[id]++;
    }

    for(const char of word2) {

        const id = char.charCodeAt(0) - 97;

        distinct2 += chars2[id] === 0 ? 1 : 0;
        chars2[id]++;
    }

    if(Math.abs(distinct1 - distinct2) > 2) return false;
    
    for(let i = 0; i < 26; i++) {
        for(let j = 0; j < 26; j++) {

            if(!chars1[i] || !chars2[j]) continue;

            if(i == j) {

                if(distinct1 === distinct2) return true;

                continue;
            }

            let curr1 = 0, curr2 = 0;

            curr1 -= (chars1[i] === 1) ? 1 : 0;
            curr1 += chars1[j] == 0 ? 1 : 0;

            curr2 -= (chars2[j] === 1) ? 1 : 0;
            curr2 += chars2[i]  === 0 ? 1 : 0;

             if(distinct1 + curr1 === distinct2 + curr2) return true;   
        }
    }

    return false;
};

let word1 = "abcc", word2 = "aab";
//word1 = "ac", word2 = "b";
//word1 = "ab", word2 = "abcc";
//word1 = "aa", word2 = "ab";


console.log(isItPossible(word1, word2));