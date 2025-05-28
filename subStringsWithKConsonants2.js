/*
#3306. Count of Substrings Containing Every Vowel and K Consonants II

You are given a string word and a non-negative integer k.

Return the total number of

of word that contain every vowel ('a', 'e', 'i', 'o', and 'u') at least once and exactly k consonants.

 

Example 1:

Input: word = "aeioqq", k = 1

Output: 0

Explanation:

There is no substring with every vowel.

Example 2:

Input: word = "aeiou", k = 0

Output: 1

Explanation:

The only substring with every vowel and zero consonants is word[0..4], which is "aeiou".

Example 3:

Input: word = "ieaouqqieaouqq", k = 1

Output: 3

Explanation:

The substrings with every vowel and one consonant are:

    word[0..5], which is "ieaouq".
    word[6..11], which is "qieaou".
    word[7..12], which is "ieaouq".

 

Constraints:

    5 <= word.length <= 2 * 105
    word consists only of lowercase English letters.
    0 <= k <= word.length - 5

*/

/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function(word, k) {

    return atLeastK(word, k) - atLeastK(word, k+1);
};

const atLeastK = (word, k) => {
    const wovels = {'a':0,'e':0,'i':0,'o':0,'u':0};
    const isCons = (ch) => wovels[ch] === undefined;
    const checkWovels = () => {
        for(const wovel in wovels) {
            if(wovels[wovel] === 0) return false;
        }
        return true;
    };

    let left = 0, right = 0, cons = 0, hasAllWovels = false, count = 0;

    while(right < word.length) {

        const ch = word[right];

        if(!isCons(ch)) {
            wovels[ch]++;
            hasAllWovels = wovels[ch] === 1 ? checkWovels() : hasAllWovels;
        } else {
            cons++;

            while(right >= left && cons > k) {
                chLeft = word[left++];
                cons -= isCons(chLeft) ? 1 : 0;
                if(!isCons(chLeft)) {
                 wovels[chLeft]--;
                hasAllWovels &= wovels[chLeft] !== 0;
                }
            }
        }

        count += cons === k && hasAllWovels ? word.length - right : 0;
        right++;
    }
    return count;
};

let word = "aeioufasd", k = 1;

console.log(countOfSubstrings(word, k)); // 3

