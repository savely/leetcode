
/**
 * @param {number} N
 * @return {number}
 */
 var binaryGap = function(N) {
    
    let curr = 0, max = 0, prev = false
    
    while(N > 0) {
        
        if(N % 2) {
            max = Math.max(max, curr + (prev ? 1 : 0))
            curr = 0
            prev = true
        }
           
        if(prev && !(N % 2)) {
            curr++
        }

        N = N >> 1
    }
    
    return max
};