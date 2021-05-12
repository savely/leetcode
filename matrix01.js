/*
# 542. 01 Matrix

Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.
*/

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */


 var updateMatrix = function(mat) {
    
    const neighbors= (i, j, dist) => {
        
        const res = []
        
        for(const [k, m] of [[i-1,j],[i+1,j],[i,j-1],[i,j+1]]) {
            if(k < 0 || k >= mat.length)    continue;
            if(m < 0 || m >= mat[0].length) continue;
            if(mat[k][m] === 0 || mat[k][m] < dist) continue;
            
            res.push([k,m])
        }
        return res
    }
    
    const queue = []

    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[0].length; j++) {
            
            if(mat[i][j] === 0) {
                queue.push([i,j])
            } else {
                mat[i][j] = Infinity
            }
        }
    }
    
    while(queue.length) {
        const [i, j] = queue.shift(), dist = mat[i][j]

        for(const [k,m] of neighbors(i,j, dist + 1)) {
            mat[k][m] = dist + 1
            queue.push([k,m])
        }
    }
    return mat
};

const mat = [[0,1,1,1,1],
             [1,1,1,1,1],
             [1,1,1,1,1],
             [1,1,1,1,1],
             [1,1,1,1,1]];


console.table(updateMatrix(mat))