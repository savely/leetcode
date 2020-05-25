/*
Given a string s and an integer k.

Return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are (a, e, i, o, u).
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    
    if(s.length === 0) return 0

    if(k === 1) return s.search(/[aeiou]/) > -1 ? 1 : 0

    let max  = 0, lo = 0, hi = Math.min(k, s.length) -1

    const vowels = new Set(Array.from('aeiou'))
    
    for(let i = 0; i <= hi; i++) {
        if(vowels.has(s[i])) max++
        if(max === k) return k
    } 

    let locMax = max
 
    while(lo + k < s.length) {
        if(vowels.has(s[lo++])) {
            locMax--
        }
        if(vowels.has(s[++hi])) {
            locMax++
            max = Math.max(max, locMax)
            if(max === k) return k
        }
    }
    
   return max
};
"weallloveyou"
7

console.log(maxVowels("weallloveyou", 7))