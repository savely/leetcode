var lengthOfLongestSubstring = function(s) {
    
    let map = new Map()
    let res = 0
    let i = 0;
    
    for( j = 0; j < s.length; j++) {
          if(map.has(s[j])) {
             i = Math.max(map.get(s[j]), i)
          }
          res = Math.max(res, j-i+1)
          map.set(s[j] , j+1)  
                
    }
    return res
};

console.log(lengthOfLongestSubstring("pwwkew"))