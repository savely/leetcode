/*
#474. Ones and Zeroes

You are given an array of binary strings strs and two integers m and n.

Return the size of the largest subset of strs such that there are at most m 0's and n 1's in the subset.

A set x is a subset of a set y if all elements of x are also elements of y.

 

Example 1:

Input: strs = ["10","0001","111001","1","0"], m = 5, n = 3
Output: 4
Explanation: The largest subset with at most 5 0's and 3 1's is {"10", "0001", "1", "0"}, so the answer is 4.
Other valid but smaller subsets include {"0001", "1"} and {"10", "1", "0"}.
{"111001"} is an invalid subset because it contains 4 1's, greater than the maximum of 3.
Example 2:

Input: strs = ["10","0","1"], m = 1, n = 1
Output: 2
Explanation: The largest subset is {"0", "1"}, so the answer is 2.
 

Constraints:

1 <= strs.length <= 600
1 <= strs[i].length <= 100
strs[i] consists only of digits '0' and '1'.
1 <= m, n <= 100

*/

 /**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
  var findMaxForm = function(strs, m, n) {


    let zeros = 0, ones = 0;

    const len = strs.length;
    
    strs = strs.reduce((acc, word) => {
      if(word.length > m + n) return acc
        
        const zeroes = Array.from(word).filter(ch => ch === '0').length

        zeros += zeroes;

        ones += word.length - zeroes;        
        
        if(zeroes > m || word.length - zeroes > n) return acc
        
        acc.push([zeroes, word.length - zeroes])
        return acc
    }, [])
     
    // console.log(strs)

    const dp = {};

    if(zeros < m && ones < n) return len;
     
    
     const f = function (i, zeroes, ones) {
         

         if(zeroes < 0 || ones < 0) return -Infinity;

         if(zeroes === 0 && ones === 0) return 0;

         if(i === strs.length) return 0;

         const hash = `${i}|${zeroes}|${ones}`;

         if(dp[hash] !== undefined) return dp[hash];
         
         const [z, o] = strs[i];

         dp[hash] = Math.max(f(i + 1, zeroes - z, ones - o) + 1, f(i + 1, zeroes, ones));

         return dp[hash];
     }
     
     return f(0, m, n);
 };