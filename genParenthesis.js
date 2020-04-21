/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

    if (n === 0)  return ['']
  
   let res = []
   let i = 0 

   while( i < n) {
      for(let left of  generateParenthesis(i)) {
          for (let right of generateParenthesis(n-i-1))
          res.push(`(${left})${right}`)
      }
      ++i
   }
   return res
};

console.log(generateParenthesis(3))