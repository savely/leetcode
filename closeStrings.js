/**
 * #1657. Determine if Two Strings Are Close
 * 
 * Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.



 */

 /**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {

    if(word1.length !== word2.length) return false

    const set1 = new Set(word1), set2 = new Set(word2)

    if(set1.size !== set2.size) return false

    for(let el of Array.from(set1)) {
        
        if(!set2.has(el)) return false
    }

    const freq =  (s) => { return Object.values(Array.from(s).reduce((acc, ch) => {
        if(acc[ch] === undefined) {
            acc[ch] = 0
        }
         acc[ch]++
         return acc
       }, {})).sort((a,b) => a-b)  
    }  

    const freq1 = freq(word1), freq2 = freq(word2)

    for(let i = 0; i < freq1.length; i++) {
        if(freq1[i] !== freq2[i]) return false
    }

    
    return true
};

console.log(closeStrings("abbzzca", "babzzcz"))