/*
#931. Minimum Falling Path Sum

Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix.

A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right. Specifically, the next element from position (row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).

 

Example 1:

Input: matrix = [[2,1,3],[6,5,4],[7,8,9]]
Output: 13
Explanation: There are two falling paths with a minimum sum underlined below:
[[2,1,3],      [[2,1,3],
 [6,5,4],       [6,5,4],
 [7,8,9]]       [7,8,9]]

Example 2:

Input: matrix = [[-19,57],[-40,-5]]
Output: -59
Explanation: The falling path with a minimum sum is underlined below:
[[-19,57],
 [-40,-5]]

Example 3:

Input: matrix = [[-48]]
Output: -48

 

Constraints:

    n == matrix.length
    n == matrix[i].length
    1 <= n <= 100
    -100 <= matrix[i][j] <= 100


*/

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    
    const n = matrix.length;
    
    if(n === 1) return Math.min(...matrix[0]);
    
    let fst = [101 * n, ...matrix[0], 101 * n], snd = new Array(fst.length).fill(101 * n);
    
    for(let i = 1; i < n; i++) {
        
        for(let j = 1; j <=  n; j++) {
            
            const m = matrix[i][j - 1];
            
            snd[j] = Math.min(m + fst[j - 1], m + fst[j], m + fst[j + 1]);
        }
        
        [snd, fst] = [fst, snd];
    }
    
    return Math.min(...fst);
};