/*
#85. Maximal Rectangle

Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

 

Example 1:


Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 6
Explanation: The maximal rectangle is shown in the above picture.
Example 2:

Input: matrix = []
Output: 0
Example 3:

Input: matrix = [["0"]]
Output: 0
Example 4:

Input: matrix = [["1"]]
Output: 1
Example 5:

Input: matrix = [["0","0"]]
Output: 0

rows == matrix.length
cols == matrix[i].length
0 <= row, cols <= 200
matrix[i][j] is '0' or '1'.
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
 var maximalRectangle = function(matrix) {
    
    const dp = new Array(matrix.length).fill(0).map(_ => new Array(matrix[0].length).fill(0));

    let maxArea = 0;    

    for(let i = 0; i < matrix.length; i++) {
        
        for(let j = 0; j < matrix[0].length; j++) {

            if(matrix[i][j] == '0') {
                dp[i][j] = 0; 
            } else  {
                dp[i][j] =  i > 0 ? dp[i - 1][j] + 1 : 1;

                let minHeight = dp[i][j];

                for(let k = j; k >= 0 && dp[i][k] > 0; k--) {
    
                    minHeight = Math.min(minHeight, dp[i][k]);
                    const currArrea =  minHeight *(j - k + 1);
                    maxArea   = Math.max(maxArea, currArrea);
                }                
            }
        }
    }

    return maxArea;
};