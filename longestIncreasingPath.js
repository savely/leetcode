/*
#329. Longest Increasing Path in a Matrix
Given an m x n integers matrix, return the length of the longest increasing path in matrix.

From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).
*/

/**
 * @param {number[][]} matrix
 * @return {number}
 */
/**
 * @param {number[][]} matrix
 * @return {number}
 */
 var longestIncreasingPath = function(matrix) {
    
    const dp = new Map(), length = matrix.length, width = matrix[0].length
    
    if(length < 2 && width < 2) return 1
    
    const neighbors = (i, j) => {
            return [[i - 1, j], [i, j - 1], [i + 1, j], [i, j + 1]].filter(([a, b]) => {
            if(a < 0 || a >= length) return false;
            if(b < 0 || b >= width) return false;
            if(matrix[a][b] <= matrix[i][j]) return false
            return true
        })
    }
    
    const h = (i, j) => `${i}:${j}`
    
    let  max = 0
    
    const dfs = (i, j) => {
        
        const hash = h(i,j)
        
        if(dp.has(hash)) return dp.get(hash)
        
        const next = neighbors(i, j)
        
        if(next.length === 0) {
            dp.set(hash, 1)
            return 1
        }
        
        let maxLength = 0
        
        for(const pos of next) {
            maxLength = Math.max(maxLength, dfs(...pos))
        }
        
        dp.set(hash, maxLength + 1)
        
        max = Math.max(max, maxLength + 1)
        
        return maxLength + 1
    }
    
    
    for(let i = 0; i < length; i++) {
        for(let j = 0; j < width; j++) {
            dfs(i,j)
        }
    }
    
    return max
 };

 let matrix = [[9,9,4],
               [6,6,8],
               [2,1,1]]

/*matrix = [[1,2],
          [3,3]]  */             



 console.log(longestIncreasingPath(matrix))