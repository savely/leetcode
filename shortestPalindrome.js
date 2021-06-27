/*
#214. Shortest Palindrome

You are given a string s. You can convert s to a palindrome by adding characters in front of it.

Return the shortest palindrome you can find by performing this transformation.

 

Example 1:

Input: s = "aacecaaa"
Output: "aaacecaaa"
Example 2:

Input: s = "abcd"
Output: "dcbabcd"
 

Constraints:

0 <= s.length <= 5 * 104
s consists of lowercase English letters only.

*/

/**
 * @param {string} s
 * @return {string}
 */
 var shortestPalindrome = function(s) {

    if(s.length < 2) return s;
    
   const half = s.length % 2 === 0? s.length / 2 : (s.length + 1)/ 2;

   let rev = '', start = 0;

   for (let i = 0; i < half; i++) {
       
        rev  = s[i] + rev;

        if(rev === s.substring(i, i + rev.length)) {
          start = i + rev.length;
        }

        if(rev === s.substring(i+1, i + rev.length + 1)) {
            start = i + rev.length + 1;
          }
   }
    
   const palindromePart = [...s.substring(start)].reverse().join('');

    return palindromePart + s;
};


let s = 'a'.repeat(20000) + 'cd' + 'a'.repeat(20000);

s = "aacecaaa";
//s = "aaaaa";
//s = "ababbbabbaba"; //"ababbabbbababbbabbaba"

console.log(shortestPalindrome(s));