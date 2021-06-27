/*
#28. Implement strStr()

Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Example 3:

Input: haystack = "", needle = ""
Output: 0
 

Constraints:

0 <= haystack.length, needle.length <= 5 * 104
haystack and needle consist of only lower-case English characters.
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    if(!needle.length) return 0;

    const prefix = (str) => {

        const p = new Array(str.length).fill(0);

        for(let i = 1; i < str.length; i++) {
        
            let j = p[i-1];

            while(j >= 0 && str[i] !== str[j]) {
                j = p[j - 1];
            }

                if(str[i] === str[j]) {
                    j++;
                    p[i] = j;                     
                }
        }

        return p;
    }

    const pi = prefix(needle), nLength = needle.length - 1;

    let i = 0, j = 0; 

    while(i <= haystack.length) {

        const hChar = haystack[i];

        if(hChar ===  needle[j]) {

            if(j === nLength) return i - nLength;

            i++;
            j++;
            continue;
        }

        if(j === 0) {
            i++;
            continue;
        }

        j = pi[j - 1];  
    }

   return -1;
};