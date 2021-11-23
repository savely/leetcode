/*
#2062. Count Vowel Substrings of a String

A substring is a contiguous (non-empty) sequence of characters within a string.

A vowel substring is a substring that only consists of vowels ('a', 'e', 'i', 'o', and 'u') and has all five vowels present in it.

Given a string word, return the number of vowel substrings in word.

 

Example 1:

Input: word = "aeiouu"
Output: 2
Explanation: The vowel substrings of word are as follows (underlined):
- "aeiouu"
- "aeiouu"

Example 2:

Input: word = "unicornarihan"
Output: 0
Explanation: Not all 5 vowels are present, so there are no vowel substrings.

Example 3:

Input: word = "cuaieuouac"
Output: 7
Explanation: The vowel substrings of word are as follows (underlined):
- "cuaieuouac"
- "cuaieuouac"
- "cuaieuouac"
- "cuaieuouac"
- "cuaieuouac"
- "cuaieuouac"
- "cuaieuouac"

Example 4:

Input: word = "bbaeixoubb"
Output: 0
Explanation: The only substrings that contain all five vowels also contain consonants, so there are no vowel substrings.

 

Constraints:

    1 <= word.length <= 100
    word consists of lowercase English letters only.
*/

/**
 * @param {string} word
 * @return {number}
 */
 var countVowelSubstrings = function(word) {

    const f = (i, j) => {

        if(j - i < 5) return 0;

        let counter = {'a' : 0, 'e' : 0, 'i' : 0, 'o' : 0, 'u' : 0};
        let start = i, end = i, vowelCount = 0, count = 0;

        while(end <= j) {

            const char = word[end];

            if(counter[char] === 0) vowelCount++;

            counter[char]++;

            if(vowelCount < 5) {
                end++;
                continue;
            }

            while(vowelCount === 5) {

                const stChar = word[start];
                counter[stChar]--;

                if(counter[stChar] === 0) {
                    vowelCount--;
                    break;
                } 
                start++;
            }

            count += 1 + (start - i) + (j - end) + (start - i) * (j - end);
            end++;
        }

        return count;
    };

    return f(0, word.length -1);

};

let word = "aeiouu";
//word = "unicornarihan";
word = "uaieuoua";
//word = "aoeaieauuaaeaiii"; //18
//word = "aoieuuaa"//6;
//word = "uuiaoeaieauuaaiaaieaiii" //75

console.log(countVowelSubstrings(word));