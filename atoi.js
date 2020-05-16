/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    
    if(str.length === 0) return 0
    
    let start = 0, end = str.length-1 
    
    while(start < str.length && str[start] === ' ') {
        start++
    }

    while(end >= 0 && isNaN(parseInt(str[end]))) {
        end--
    }
    
    if(end < 0 || start > str.length-1) return 0
    
    if(!['+','-'].includes(str[start])
       && isNaN(parseInt(str[start]))) return 0
    
    let sign = 1, pow10 = 1, int  = 0
    
    if(str[start] === '+') {
        start++
    }else if(str[start] === '-') {
        start++
        sign = -1
    }
    
    for(let i = end; i >= start; i--) {
        if(str[i] === '.') {
         int = 0
         pow10 = 1
         continue
        }

        const digit = parseInt(str[i])
        
        if(isNaN(digit)) return 0
        
        int += digit * pow10
        pow10 *= 10
    }
    return sign * Math.min(2147483648, int)
};

console.log(myAtoi('+-2'))