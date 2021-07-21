var restoreIpAddresses = function(s) {
    
    const res = new Set()
    
    const req = function(str, parts = []) {
        
         if(parts.length === 4 && str.length === 0) {
             res.add(parts.join('.'))
             return 
         }
        
        if(str.length === 0 || parts.length === 4) {
            return
        }
        
        if(str.length > (4 - parts.length) * 3) {
            return
        }
        
        if(str[0] === '0') {
           return req(str.slice(1), [...parts, '0']) 
        }
        
        for(let i = 0; i <  Math.min(3, str.length); i++) {
            const part = str.slice(0, i + 1)
            
            if(parseInt(part) > 255) return;
            
           req(str.slice(i+1), [...parts, part])
        }        
        
    }
    
    req(s)
    
    return [...res]
};

let str = "25525511135"

console.log(restoreIpAddresses(str))