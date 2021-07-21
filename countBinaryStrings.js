

/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
 var countBinarySubstrings = function(s) {
    
    if(s.length < 2) return 0
    
    let count = 0, fst = 1, snd = 0
    
    for(let i = 1; i < s.length; i++) {
        
        if(s[i - 1] !== s[i]) {
           count += Math.min(fst, snd)
           snd = fst
           fst = 1
        }  else {
         fst++   
        }
    }
    
    count += Math.min(fst, snd)
    
    return count 
};

let str = "00110"

str = "00010101000111111001010011011"

console.log(countBinarySubstrings(str))