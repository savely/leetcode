/*
#1727. Largest Submatrix With Rearrangements

You are given a binary matrix matrix of size m x n, and you are allowed to rearrange the columns of the matrix in any order.

Return the area of the largest submatrix within matrix where every element of the submatrix is 1 after reordering the columns optimally.

 

Example 1:



Input: matrix = [[0,0,1],[1,1,1],[1,0,1]]
Output: 4
Explanation: You can rearrange the columns as shown above.
The largest submatrix of 1s, in bold, has an area of 4.
Example 2:



Input: matrix = [[1,0,1,0,1]]
Output: 3
Explanation: You can rearrange the columns as shown above.
The largest submatrix of 1s, in bold, has an area of 3.
Example 3:

Input: matrix = [[1,1,0],[1,0,1]]
Output: 2
Explanation: Notice that you must rearrange entire columns, and there is no way to make a submatrix of 1s larger than an area of 2.
Example 4:

Input: matrix = [[0,0],[0,0]]
Output: 0
Explanation: As there are no 1s, no submatrix of 1s can be formed and the area is 0.
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m * n <= 105
matrix[i][j] is 0 or 1.

 */

/**
 * @param {number[][]} matrix
 * @return {number}
 */
 var largestSubmatrix = function(matrix) {
  
    for(let j = 0; j < matrix[0].length; j++) {
       
        if(matrix.length === 1) break;

        for(let i = 1;  i< matrix.length; i++) {

            if(mat[i][j] === 0) continue;

            matrix[i][j] += matrix[i-1][j]
        }
    }

    let maxArea = 0;

    for(let i = 0; i < matrix.length; i++) {

        const row = matrix[i];

        row.sort((a, b) => b -a)

        for (let j = 0; j < row.length; j++) {
            if(row[j] === 0) break;

            maxArea = Math.max(maxArea, row[j] * (j+1))
        }
    }

    return maxArea
};

let mat = [[0,0,1],[1,1,1],[1,0,1]];
//mat = [[1,0,1,0,1]];
//mat = [[1,1,0],[1,0,1]];

console.log(largestSubmatrix(mat))