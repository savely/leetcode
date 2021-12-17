/*
#221. Maximal Square

Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

 

Example 1:


Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 4
Example 2:


Input: matrix = [["0","1"],["1","0"]]
Output: 1
Example 3:

Input: matrix = [["0"]]
Output: 0
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 300
matrix[i][j] is '0' or '1'.

*/

/**
 * 
 * @param {[int][int]} matrix 
 */
 
var maximalSquare = function(matrix) {

    const dp = new Array(matrix.length + 1).fill(0).map(() => new Array(matrix[0].length + 1).fill(0));

    let max = 0;
    

    for(let i = 1; i < dp.length; i++) {

        for(let j = 1; j < dp[0].length; j++) {

            if(matrix[i - 1][j - 1] === "0") continue;

            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;

            max = Math.max(max, dp[i][j]);
        }
    }

    console.table(dp);

    return max * max;
};

matrix = [[0,1,0,0,0],
          [0,0,1,1,1],
          [1,1,1,1,1],
          [1,0,1,1,1]];

matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]];          

console.log(maximalSquare(matrix));