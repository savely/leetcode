/*
#54. Spiral Matrix

Given an m x n matrix, return all elements of the matrix in spiral order.

 

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:

Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

 

Constraints:

    m == matrix.length
    n == matrix[i].length
    1 <= m, n <= 10
    -100 <= matrix[i][j] <= 100
*/


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    
    let [left, right, top, bottom] = [0, matrix[0].length - 1, 0, matrix.length - 1];

    let arr = [];

    while(left<=right && top <= bottom){

        for(let i=left; i<=right; i++) arr.push(matrix[top][i])
        top++;

        for(let i=top; i<=bottom; i++) arr.push(matrix[i][right])
        right--;

        if(top<=bottom){               // condition 1
            for(let i=right; i>=left; i--) arr.push(matrix[bottom][i])
            bottom--;
        }
      

        if(left<=right){               // condition 2
            for(let i=bottom; i>=top; i--) arr.push(matrix[i][left])
            left++;
        }  
    }
    return arr;
};