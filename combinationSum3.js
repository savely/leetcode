/*
  #216. Combination Sum III 

  Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

Only numbers 1 through 9 are used.
Each number is used at most once.
Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

 

Example 1:

Input: k = 3, n = 7
Output: [[1,2,4]]
Explanation:
1 + 2 + 4 = 7
There are no other valid combinations.
Example 2:

Input: k = 3, n = 9
Output: [[1,2,6],[1,3,5],[2,3,4]]
Explanation:
1 + 2 + 6 = 9
1 + 3 + 5 = 9
2 + 3 + 4 = 9
There are no other valid combinations.
*/

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
 var combinationSum3 = function(k, n) {
    
    const res = []
    
    const cSumReq = function (m, digits, sum, start) {

        const diff = n - sum
       
       if(m === 1) {
           if(diff >= start && diff < 10 && ! digits.has(diff)) {
               digits.add(diff)
               res.push([...digits])
           }
          return     
       } 
      
        for(let digit = start; digit < 10; digit++) {
               
            if(sum + digit > n - m) break;
            
            if(digits.has(digit)) continue;
            
            cSumReq(m -1, new Set([...digits, digit]), sum + digit, digit + 1)
        }
    }
    
    cSumReq(k, new Set(), 0, 1)
    return res
};