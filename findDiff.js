/*
#389
*/

const f = function(str) {
    return Array.from(str).reduce((acc, c) => {
    if(acc[c] === undefined) {
        acc[c] = 0
    }
    acc[c] ++   
    return acc
    }, {})
 }

var findTheDifference = function(s, t) {

    const freq  = f(s)
    
    for(let i = 0; i < t.length; i++) {
        const ch = t[i]
        if(freq[ch] === undefined || freq[ch] === 0)  {
            return ch
        }
        freq[ch] -= 1
    }
};

findTheDifference('abcd', 'abcde')