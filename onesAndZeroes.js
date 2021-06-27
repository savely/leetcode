/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 /**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
  var findMaxForm = function(strs, m, n) {
    
    strs = strs.reduce((acc, word) => {
      if(word.length > m + n) return acc
        
        const zeroes = Array.from(word).filter(ch => ch === '0').length
        
        if(zeroes > m || word.length - zeroes > n) return acc
        
        acc.push([zeroes, word.length - zeroes])
        return acc
    }, [])
     
     console.log(strs)
     
     let maxSteps = 0
     
     const f = function (i, zeroes, ones, steps) {
         

         if(zeroes < 0 || ones < 0) return
         
 
         maxSteps = Math.max(maxSteps, steps) 

         if(zeroes === 0 && ones === 0) return
         if(i === strs.length) return
         
         const [z, o] = strs[i]
         f(i+1, zeroes - z, ones - o, steps+1)
         f(i+1, zeroes, ones, steps) 
     }
     
     f(0, m, n, 0)
     
     return maxSteps
 };

 console.log(findMaxForm(["10", "0", "1"], 1, 1))