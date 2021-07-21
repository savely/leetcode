/*
You have two strings, s and t. The string t contains only unique elements. Find and return the minimum consecutive substring of s that contains all of the elements from t.

It's guaranteed that the answer exists. If there are several answers, return the one which starts from the smallest index.

Example

For s = "adobecodebanc" and t = "abc", the output should be
minSubstringWithAllChars(s, t) = "banc".
*/

function minSubstringWithAllChars(s, t) {

   const len = s.length

   const freq = function(str) {
       const h = new Map()
       for(let i = 0; i < str.length; i++) {
           const char = str[i]
           
           if(!h.has(char)) {
            h.set(char, 0)
          }
         
          const count = h.get(char)
          h.set(char, ++count)
       }

     return h
   }

   let start = 0, end = 0

   while(end < t.length) {
       
   }

}