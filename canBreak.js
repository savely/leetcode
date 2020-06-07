/*
#1433
Given two strings: s1 and s2 with the same size, check if some permutation of string s1 can break some permutation of string s2 or vice-versa (in other words s2 can break s1).

A string x can break string y (both of size n) if x[i] >= y[i] (in alphabetical order) for all i between 0 and n-1.
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function(s1, s2) {
    
    const cmp = (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
    const check = (s,str)  => {
        for(let i = 0; i < str.length; i++) {
            if(s[i] < str[i]) return false
        }
       return true 
    }
    
    s1 = Array.from(s1).sort(cmp)
    s2 = Array.from(s2).sort(cmp)
    
    return check(s1, s2) || check(s2, s1)
};