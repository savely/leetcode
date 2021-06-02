/*
#1839. Longest Substring Of All Vowels in Order

A string is considered beautiful if it satisfies the following conditions:

Each of the 5 English vowels ('a', 'e', 'i', 'o', 'u') must appear at least once in it.
The letters must be sorted in alphabetical order (i.e. all 'a's before 'e's, all 'e's before 'i's, etc.).
For example, strings "aeiou" and "aaaaaaeiiiioou" are considered beautiful, but "uaeio", "aeoiu", and "aaaeeeooo" are not beautiful.

Given a string word consisting of English vowels, return the length of the longest beautiful substring of word. If no such substring exists, return 0.

A substring is a contiguous sequence of characters in a string.

 

Example 1:

Input: word = "aeiaaioaaaaeiiiiouuuooaauuaeiu"
Output: 13
Explanation: The longest beautiful substring in word is "aaaaeiiiiouuu" of length 13.
Example 2:

Input: word = "aeeeiiiioooauuuaeiou"
Output: 5
Explanation: The longest beautiful substring in word is "aeiou" of length 5.
Example 3:

Input: word = "a"
Output: 0
Explanation: There is no beautiful substring, so return 0.
 

Constraints:

1 <= word.length <= 5 * 105
word consists of characters 'a', 'e', 'i', 'o', and 'u'.

*/

/**
 * @param {string} word
 * @return {number}
 */
 var longestBeautifulSubstring = function(word) {
    
    let max = 0,  count = word[0] == 'a' ? 1 : 0, len = count;
    
   
    for(let i = 1; i < word.length; i++) {
        
        const ch = word.charCodeAt(i), prev =word.charCodeAt(i-1);
        
        if(prev > ch) {

            if(count === 5) {
                max = Math.max(max, len)
            } 

            len = 1;
            count = 1;
            continue;
        }

        if(ch === prev)  {
            len++
        }  else if(ch > prev) {
            len++
            count++
        }
    }
     
    if(count === 5) {
       max = Math.max(max, len)     
    }

    return max
};

let str = "aeiaaioaaaaeiiiiouuuooaauuaeiu";
//str = 'aeiou';
//str = "aaaaaaeiiiioou";
//str = "aiaeioouaaeeiouuiuieeo"; //8
console.log(longestBeautifulSubstring(str))