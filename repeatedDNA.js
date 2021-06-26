/*
#187 Repeated DNA Sequences

All DNA is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T', for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.
*/

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    
    if (s.length < 11) return []
    
    const map = new Map()
    
    for (let i = 0; i < s.length -10; i++) {
        const pat = s.substring(i, i+10)
        let count = map.get(pat)
        count = count === undefined ? 1 : count + 1
        map.set(pat, count)
    }
    
    return Array.from(map).filter(arr => arr[1] > 1).map(arr => arr[0])
};

let str = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"

console.log(findRepeatedDnaSequences(str))