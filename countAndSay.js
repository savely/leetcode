/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    
    const cs = function(term) {
        res = ''        
        curr = term[0]
        pos = 0
        count = 0
        
        while(pos < term.length) {
           while(term[pos] === curr) {
              count++
              pos++ 
            }
            res +=  count.toString() + curr 
            
            count = 0
            curr  = term[pos]
        }
        
        return res
    }
    
    let res = '1'
    
    while(n > 1) {
        res = cs(res)
        n--
    }
    
    return res
};

console.log(countAndSay(5))