/*
# 459 Repeated Substring Pattern
Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    
    if(s.length < 2) return false
    
   for(let i = Math.floor(s.length /2); i > 0; i--) {
       
       if(s.length % i !== 0) continue
       
       const pattern = s.slice(0,i), times = s.length / i, len = pattern.length
       let match = true
       
       for(j = 1; j < times; j++) {
           if(s.slice(len * j, len * (j+1)) !== pattern){
               match = false
               break
           }
       }
     
       if(match) return true
   }
    
    return false
};

console.log(repeatedSubstringPattern("bb"))
