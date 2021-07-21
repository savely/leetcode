/*Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
 const dp = new Array(s.length+1).fill(0).map((_,i) => {
     return new Array(s.length+1).fill(i === 1 ? true : false) 
 })

 let count = s.length

  for (let i = 0; i < s.length; i++) {
      for (let j = i; j < s.length; j++) {
           if(s[i] === s[j] && dp[i+1][j-1]) {
             dp[i][j]  = true
             count++ 
           }
      }
  }

  return count
};

console.log(countSubstrings('aaa'))