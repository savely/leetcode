/*
#566. Reshape the Matrix

In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the row number and column number of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.
*/

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
    
    const height = mat.length, width = mat[0].length
    
    if(height * width !== r * c 
        || (height === r && width === c)) return mat;
    
    const res = new Array(r).fill(0).map(_ => new Array(c).fill(0))
    
    for(let i = 0; i < height; i++) {
        for(let j = 0; j < width; j++) {
            
            const pos = i * width + j, row = Math.trunc(pos / c), col = pos - (row * c)
            res[row][col] = mat[i][j]
        }
    }
    
    return res
};

let mat = [[1,2],[3,4]], r = 4, c = 1;

console.table(matrixReshape(mat, r, c))