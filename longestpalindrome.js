var longestPalindrome = function(s) {
    
    if(s.length < 2) return s

    let low = 1, hi = 1 
    let start = 0, end = 1

    for (let i = 1; i < s.length ; i++) {
       
        low = i-1
        hi = i
         
        while (low > -1 && hi < s.length
               && s[low] === s[hi]) {
           if((hi - low + 1) > (end - start)) {
               end = hi + 1 
               start = low
           }
           low--
           hi++ 
       }

       low = i-1
       hi  = i+1
        
       while (low > -1 && hi < s.length
              && s[low] === s[hi]) {
          if((hi - low + 1) > (end - start)) {
              end = hi + 1
              start = low
          } 
          low--
          hi++          
      }       
    }


    return s.substring(start, end)
};

console.log(longestPalindrome('c'))