/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let fstCol = false

    for(let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if(matrix[i][j] === 0) {
                if(j === 0) {
                    fstCol = true
                    continue
                }
                matrix[0][j] = matrix[i][0] = 0
            }
        }
    }

    for(let i = 1; i < matrix[0].length; i++) {
        if(matrix[0][i] === 0) {
          for (let j = 1; j < matrix.length; j++) {
            matrix[j][i] = 0        
         }
        }
    }
    
    for(let i = 1; i < matrix.length; i++) {
        if(matrix[i][0] === 0) {
          for (let j = 1; j < matrix[0].length; j++) {
            matrix[i][j] = 0        
         }
        }
    }
    if(matrix[0][0] === 0) {
        for(let i = 0; i < matrix[0].length; i++) {
            matrix[0][i] = 0
        }
    }

    if(fstCol) {
        for(let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0
        }
    }
};

let mat = [
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
]
//mat = [[1,0,3]]
setZeroes(mat)
console.log(mat)