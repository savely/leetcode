
/**
 * 
 * @param {[int][int]} matrix 
 */
 
var maximalSquare = function(matrix) {
    
    if(matrix.length === 0) return 0
    
    

    const dp = new Array(matrix.length+1).fill(0).map((_,i) => {
        arr = new Array(matrix[0].length+1)
        arr.fill(0)
       return arr
    })

    max = 0

    for (let i = 1; i < dp.length; i++) {
        for(let j = 1; j < dp[0].length; j++) {

            if(matrix[i-1][j-1] === "0") {
                continue
            }

            dp[i][j] = 1 + Math.min(dp[i-1][j-1],dp[i][j-1], dp[i-1][j])

            max = Math.max(max, dp[i][j])
        }
    }
    return max * max
};

matrix = [[0,1,0,0,0],
          [0,0,1,1,1],
          [1,1,1,1,1],
          [1,0,1,1,1]]

console.log(maximalSquare([["0"]]))